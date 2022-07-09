import { useContext } from "react";
import AuthContext from "../../context/AuthContext.js";

import { useDispatch } from "react-redux";
import { deleteComment } from "../../features/commentsSlice.js";

import * as commentService from "../../services/commentService.js";

const Comment = ({ comment, productId }) => {
    const { userInfo } = useContext(AuthContext);
    const dispatch = useDispatch();
    let createdAt = new Date(comment.createdAt);
    console.log(comment)
    let timestamp = createdAt.toLocaleDateString('bg-BG', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const deleteCommentHandler = async () => {

        try {
            let commentId = comment._id;
            let response = await commentService.deleteComment(commentId, productId);
            
            if(response.status === 'ok') {
                dispatch(deleteComment(commentId));
                return;
            }
            else {
                alert('Грешка при изтриването на коемнтара!');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <article className="comment-section">
            <article className="comment-info">
            <p className="username">Потребителско име: {comment.username}</p>
            <p className="comment-timestamp">{timestamp}</p>
            </article>
            <p className="comment-text">{comment.text}</p>
            {userInfo._id === comment.userId ?
                <button className="btn" onClick={deleteCommentHandler}>Изтриване на коментара</button> : null}
        </article>
    )
}

export default Comment;