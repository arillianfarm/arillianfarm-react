import React, { useState } from 'react';
import Emoji from 'react-emoji-render';

function CommentSection() {
    const [commentText, setCommentText] = useState('This is a comment with a 👍 emoji!');

    return (
        <div>
            <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} />
            <p><Emoji text={commentText} /></p>
        </div>
    );
}

export default CommentSection;