import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";

import { useDispatch } from "react-redux";
import { deleteComment } from "../../features/commentsSlice.js";

import * as commentService from "../../services/commentService.js";
import { convertTime } from "../../helpers/timeHelper.js";

const Comment = ({ comment, productId }) => {
    const { userInfo } = useContext(AuthContext);
    const dispatch = useDispatch();
    let createdAt = new Date(comment.createdAt);
    let timestamp = convertTime(createdAt, 0);
    const deleteCommentHandler = async () => {

        try {
            let commentId = comment._id;
            let response = await commentService.deleteComment(commentId, productId);
            
            if(response.status === 'ok') {
                dispatch(deleteComment(commentId));
                return;
            }
            else {
                alert('Couldnot delete comment!');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <article className="comment-section">
            <article className="comment-info">
            <p className="username">Username: {comment.username}</p>
            <p className="comment-timestamp">{timestamp}</p>
            </article>
            <p className="comment-text">{comment.text}</p>
            {userInfo._id === comment.userId ?
                <button className="btn" onClick={deleteCommentHandler}>Delete comment</button> : null}
        </article>
    )
}

export default Comment;