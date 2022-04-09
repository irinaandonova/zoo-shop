import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import * as commentService from "../../services/commentService.js";
const AddComment = () => {
    const { userInfo } = useContext(AuthContext);

    const addCommentHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = formData.get('comment');

        try {
            await commentService.addComment({ user: userInfo._id,comment });
        }
        catch(err) {
            console.log(err);
        }
    }
    return(
        <section className="add-comment-article">
            <form onSubmit={addCommentHandler} className="add-comment-form">
            <textarea className="add-comment" name="comment">
            </textarea>
            <button className="button comment-btn">Добавяне</button>
            </form>
        </section>
    )
}

export default  AddComment;