import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../context/AuthContext.js";
import { deleteComment } from "../../features/commentsSlice.js";

import * as commentService from "../../services/commentService.js";

const Comment = ({ comment, productId }) => {
    const { userInfo } = useContext(AuthContext);
    const dispatch = useDispatch();

    const deleteCommentHandler = async () => {
        try {
            let commentId = comment._id;
            await commentService.deleteComment(commentId, productId);
            dispatch(deleteComment(commentId));
            return;
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <article className="comment-section">
            <p className="username">Потребителско име: {comment.username}</p>
            <p className="comment-text">{comment.text}</p>
            {userInfo._id === comment.userId ?
                <button className="btn" onClick={deleteCommentHandler}>Изтриване на коментара</button> : null}
        </article>
    )
}

export default Comment;