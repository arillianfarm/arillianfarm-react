import React, { useState, useEffect } from 'react';
// Import 'db' and the new 'firebaseInitialized' flag
import { db, firebaseInitialized } from '../firebase/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from "firebase/auth"; // For anonymous sign-in
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import InputEmoji from 'react-input-emoji';

const Comments = ({ article_name, article_type, pub_date }) => {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');
    const [commentatorName, setCommentatorName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // This state will now handle both Firebase init and operation errors

    // Validation States
    const [isCommentTooLong, setIsCommentTooLong] = useState(false);
    const [isNameInvalid, setIsNameInvalid] = useState(false);

    // Constants for character limits
    const MAX_COMMENT_LENGTH = 500;
    const MIN_COMMENT_LENGTH = 3;
    const MAX_NAME_LENGTH = 50;
    const MIN_NAME_LENGTH = 2;

    const EMOJI_INPUT_HEIGHT = 120;

    // Derive articleId from passed props
    const articleId = `${article_type}-${pub_date.replace(/\//g, '-')}`;

    useEffect(() => {
        // First, check if Firebase itself initialized successfully
        if (!firebaseInitialized || !db) {
            console.warn("Firebase or Firestore not initialized. Comments functionality will be limited.");
            setError("Comments are currently unavailable. Please try again later.");
            setIsLoading(false); // Stop loading if Firebase isn't ready
            return; // Exit early if Firebase isn't ready
        }

        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                console.log('Signed in anonymously to post comments.');
            })
            .catch((err) => {
                console.error("Anonymous sign-in error:", err);
                setError("Failed to initialize comments. Please try again.");
                setIsLoading(false); // Stop loading if sign-in fails
                return; // Exit if anonymous sign-in fails
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

            // Use try...catch for the onSnapshot listener setup itself
            try {
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const fetchedComments = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    // Keep client-side filter if you don't use `where` in the query above
                    const filteredComments = fetchedComments.filter(comment => comment['article-id'] === articleId);
                    setComments(filteredComments);
                    setIsLoading(false);
                }, (err) => { // Error callback for onSnapshot
                    console.error("Error fetching comments from snapshot:", err);
                    setError("Failed to load comments.");
                    setIsLoading(false);
                });

                return () => unsubscribe();
            } catch (err) {
                // This catch handles errors during the setup of the onSnapshot listener, not the data fetch itself
                console.error("Error setting up comments listener:", err);
                setError("Failed to initialize comments listener.");
                setIsLoading(false);
            }
        }
    }, [articleId]);

    const handleCommentTextChange = (text) => {
        setNewCommentText(text);
        setIsCommentTooLong(text.length > MAX_COMMENT_LENGTH);
    };

    const handleCommentatorNameChange = (e) => {
        const value = e.target.value;
        setCommentatorName(value);
        setIsNameInvalid(value.length < MIN_NAME_LENGTH || value.length > MAX_NAME_LENGTH);
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();

        // Check Firebase initialization again before trying to submit
        if (!firebaseInitialized || !db) {
            setError("Comments service is unavailable. Please try again later.");
            return;
        }

        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (!currentUser) {
            setError("You must be signed in to post a comment. Please refresh the page or check your connection.");
            return;
        }

        // Final client-side validation
        if (isCommentTooLong || newCommentText.length < MIN_COMMENT_LENGTH) {
            alert(`Please ensure your comment is between ${MIN_COMMENT_LENGTH} and ${MAX_COMMENT_LENGTH} characters.`);
            return;
        }
        if (isNameInvalid) {
            alert(`Please ensure your name is between ${MIN_NAME_LENGTH} and ${MAX_NAME_LENGTH} characters.`);
            return;
        }

        setIsLoading(true);
        setError(null); // Clear previous errors before trying to submit

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
        } catch (err) {
            console.error("Error adding comment: ", err);
            setError("Failed to post comment. Please try again.");
        } finally {
            setIsLoading(false); // Always set loading to false after attempt
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000); // Handle Firestore Timestamps
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
        commentatorName.length < MIN_NAME_LENGTH ||
        !firebaseInitialized; // Disable if Firebase wasn't initialized

    return (
        <div className="col-xs-12 comments-section border2px br20 text-white mt-5 mb-5 p-3">
            <h3 className="text-center mb-4">Comments About "{article_name}"</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            {/* Conditionally render form if Firebase is initialized */}
            {firebaseInitialized ? (
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
                            onChange={handleCommentTextChange}
                            cleanOnEnter
                            placeholder="Share your thoughts..."
                            maxLength={MAX_COMMENT_LENGTH}
                            inputClass={isCommentTooLong ? 'form-control is-invalid' : 'form-control'}
                            inputStyle={{ width: '100%', border: isCommentTooLong ? '1px solid #dc3545' : '' }}
                            shouldReturn={false}
                        />
                        <small className="form-text text-white text-right d-block">
                            {newCommentText.length} / {MAX_COMMENT_LENGTH} characters
                        </small>
                        {(isCommentTooLong || (newCommentText.length > 0 && newCommentText.length < MIN_COMMENT_LENGTH)) && (
                            <div className="invalid-feedback d-block">
                                {newCommentText.length < MIN_COMMENT_LENGTH ? `Comment must be at least ${MIN_COMMENT_LENGTH} characters.` : `Comment is too large (max ${MAX_COMMENT_LENGTH} characters).`}
                            </div>
                        )}
                        {/* Adding message for empty comment only when focused away or trying to submit without content */}
                        {newCommentText.length === 0 && !isLoading && (
                            <div className="invalid-feedback d-block">
                                Comment is required.
                            </div>
                        )}
                    </div>
                    <div className="col-xs-12 text-center">
                        <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitDisabled}>
                            {isLoading ? 'Posting...' : 'Post Comment'}
                        </button>
                    </div>
                </form>
            ) : (
                <p className="text-center text-danger">Comments feature is currently unavailable.</p>
            )}

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