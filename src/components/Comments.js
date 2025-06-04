// src/components/Comments.js

import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'; // Your initialized Firestore instance
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from "firebase/auth"; // For anonymous sign-in
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import InputEmoji from 'react-input-emoji';

const Comments = ({ article_name, article_type, pub_date }) => {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [commentatorName, setCommentatorName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Validation States
    const [isCommentTooLong, setIsCommentTooLong] = useState(false);
    const [isNameInvalid, setIsNameInvalid] = useState(false); // Renamed for clarity: isNameInvalid

    // Constants for character limits
    const MAX_COMMENT_LENGTH = 500;
    const MIN_COMMENT_LENGTH = 3;
    const MAX_NAME_LENGTH = 50;
    const MIN_NAME_LENGTH = 2;

    const EMOJI_INPUT_HEIGHT = 120;

    // Derive articleId from passed props
    const articleId = `${article_type}-${pub_date.replace(/\//g, '-')}`;

    useEffect(() => {
        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                console.log('Signed in anonymously to post comments.');
            })
            .catch((err) => {
                console.error("Anonymous sign-in error:", err);
                setError("Failed to initialize comments. Please try again.");
            });

        if (articleId) {
            const commentsRef = collection(db, 'comments');
            const q = query(
                commentsRef,
                // If you want to filter comments by articleId directly in the query, uncomment this:
                // import { where } from 'firebase/firestore'; then add:
                // where('article-id', '==', articleId),
                orderBy('comment-date', 'desc')
            );

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedComments = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Keep client-side filter if you don't use `where` in the query above
                const filteredComments = fetchedComments.filter(comment => comment['article-id'] === articleId);
                setComments(filteredComments);
                setIsLoading(false);
            }, (err) => {
                console.error("Error fetching comments:", err);
                setError("Failed to load comments.");
                setIsLoading(false);
            });

            return () => unsubscribe();
        }
    }, [articleId]);

    const handleCommentTextChange = (text) => { // InputEmoji passes text directly
        setNewCommentText(text); // Update the state with the new text
        if (text.length > MAX_COMMENT_LENGTH) {
            setIsCommentTooLong(true);
        } else {
            setIsCommentTooLong(false);
        }
    };

    const handleCommentatorNameChange = (e) => {
        const value = e.target.value;
        setCommentatorName(value);
        // Check for validity after updating state
        if (value.length < MIN_NAME_LENGTH || value.length > MAX_NAME_LENGTH) {
            setIsNameInvalid(true);
        } else {
            setIsNameInvalid(false);
        }
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (!currentUser) {
            setError("You must be signed in to post a comment. Please refresh the page.");
            return;
        }

        // Final client-side validation using state validity checks
        if (isCommentTooLong || newCommentText.length < MIN_COMMENT_LENGTH) {
            // These alerts are fallbacks; UI should prevent this state
            alert(`Please ensure your comment is between ${MIN_COMMENT_LENGTH} and ${MAX_COMMENT_LENGTH} characters.`);
            return;
        }
        if (isNameInvalid) {
            alert(`Please ensure your name is between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters.`);
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await addDoc(collection(db, 'comments'), {
                'article-type': article_type,
                'article-id': articleId,
                'comment': newCommentText,
                'commentator-name': commentatorName,
                'comment-date': serverTimestamp(),
                'comment-id': uuidv4(),
                'user-uid': currentUser.uid,
            });
            setNewCommentText('');
            setCommentatorName('');
            setIsLoading(false);
        } catch (err) {
            console.error("Error adding comment: ", err);
            setError("Failed to post comment. Please try again.");
            setIsLoading(false);
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const displayedComments = comments.slice(0, 50);
    const hasMoreComments = comments.length > 50;

    // Determine if the submit button should be disabled
    const isSubmitDisabled = isLoading || isCommentTooLong || isNameInvalid ||
        newCommentText.length < MIN_COMMENT_LENGTH ||
        commentatorName.length < MIN_NAME_LENGTH; // Ensure name is long enough to submit

    return (
        <div className="col-xs-12 comments-section border2px br20 text-white mt-5 mb-5 p-3">
            <h3 className="text-center mb-4">Comments for "{article_name}"</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmitComment} className="row mb-4">
                <div className="col-xs-12 col-md-6 mb-3">
                    <label htmlFor="commentatorName" className="form-label">Your Name/Handle:</label>
                    <input
                        type="text"
                        id="commentatorName"
                        className={`form-control ${isNameInvalid ? 'is-invalid' : ''}`}
                        value={commentatorName}
                        onChange={handleCommentatorNameChange}
                        placeholder="e.g., FarmFan123"
                        maxLength={MAX_NAME_LENGTH}
                        minLength={MIN_NAME_LENGTH}
                        required
                    />
                    {isNameInvalid && (
                        <div className="invalid-feedback d-block">
                            Name must be between {MIN_NAME_LENGTH} and {MAX_NAME_LENGTH} characters.
                        </div>
                    )}
                </div>
                <div className="col-xs-12 col-md-12 mb-3">
                    <label htmlFor="newCommentText" className="form-label">Your Comment:</label>
                    <InputEmoji
                        value={newCommentText}
                        height={EMOJI_INPUT_HEIGHT}
                        onChange={handleCommentTextChange} // This handler now receives text directly
                        cleanOnEnter // Clears input on Enter key press
                        placeholder="Share your thoughts..."
                        maxLength={MAX_COMMENT_LENGTH} // InputEmoji has its own maxLength prop
                        // InputEmoji also accepts custom classNames for styling
                        // You might need to check react-input-emoji docs for how to apply 'is-invalid' class if it's not straightforward
                        // For a quick solution, we'll apply it to a wrapping div if needed, or rely on its default styling
                        // If you need the red border directly on the input, check react-input-emoji's styling props.
                        // For now, let's keep the character counter and error message logic.
                        shouldReturn={false} // Prevent Enter key from submitting form (useful if you want Enter to just add a new line)
                        // This package also has an `inputClass` prop for applying custom classes:
                        inputClass={isCommentTooLong ? 'form-control is-invalid' : 'form-control'}
                        // Ensure it takes full width within its container
                        inputStyle={{ width: '100%', border: isCommentTooLong ? '1px solid #dc3545' : '' }}
                        // For better integration, set the `inputClass` to match your existing form-control styling
                        // and add custom border color for invalid state via `inputStyle` or specific CSS rules.
                    />
                    <small className="form-text text-white text-right d-block">
                        {newCommentText.length} / {MAX_COMMENT_LENGTH} characters
                    </small>
                    {(isCommentTooLong || newCommentText.length === 0) && ( // Show feedback if too long OR empty
                        <div className="invalid-feedback d-block">
                            {newCommentText.length === 0 ? `Comment is required (min ${MIN_COMMENT_LENGTH} characters).` : `Comment is too large (max ${MAX_COMMENT_LENGTH} characters).`}
                        </div>
                    )}
                </div>
                <div className="col-xs-12 text-center">
                    <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitDisabled}>
                        {isLoading ? 'Posting...' : 'Post Comment'}
                    </button>
                </div>
            </form>

            <hr className="mt-5 mb-4" />

            <div className="comments-list">
                {isLoading && <div className="text-center">Loading comments...</div>}
                {!isLoading && displayedComments.length === 0 && (
                    <p className="text-center">No comments yet. Be the first to leave one!</p>
                )}
                {displayedComments.map((comment) => (
                    <div key={comment['comment-id']} className="comment-item row mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="col-xs-12 col-md-3">
                            <strong className="text-info">{comment['commentator-name']}</strong>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <p className="mb-0">{comment.comment}</p>
                        </div>
                        <div className="col-xs-12 col-md-3 text-right">
                            <small className="text-white">{formatDate(comment['comment-date'])}</small>
                        </div>
                    </div>
                ))}

                {hasMoreComments && (
                    <div className="text-center mt-4">
                        <button className="btn btn-info">View Full Comment List</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comments;