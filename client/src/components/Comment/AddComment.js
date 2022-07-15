import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../context/AuthContext.js";
import { addComment } from "../../features/commentsSlice.js";
import * as commentService from "../../services/commentService.js";

const AddComment = (productId) => {
    const { userInfo } = useContext(AuthContext);
    const dispatch = useDispatch();

    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const text = formData.get('text');
        try {
            let response = await commentService.addComment({ productId: Object.values(productId)[0], userId: userInfo._id, username: userInfo.username, text });
            if (response.status === 'ok') {
                let comment = response.comment;
                dispatch(addComment({ productId, comment }));
                e.target.reset();
            }
            else {
                throw new Error('Couldnot add comment!')
            }
            return;
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <section className="add-comment-article">
            <form onSubmit={addCommentHandler} className="add-comment-form">
                <textarea className="add-comment" name="text" maxLength={100}>
                </textarea>
                <button className="button comment-btn">Добавяне</button>
            </form>
        </section>
    )
}

export default AddComment;