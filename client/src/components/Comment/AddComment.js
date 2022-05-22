import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../context/AuthContext.js";
import { addComment } from "../../features/commentsSlice.js";
import * as productService from "../../services/productsService.js";

const AddComment = (productId, comments) => {
    const { userInfo } = useContext(AuthContext);
    const dispatch = useDispatch();
    
    const addCommentHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const text = formData.get('text');
            
        try {
            await productService.addComment({ text, userId: userInfo._id, username: userInfo.username, productId });
            let comment = { text, userId: userInfo._id, username: userInfo.username, productId };
            dispatch(addComment({productId, comment}))
            return;
        }
        catch (err) {
            console.log(err);
        }
    }  
    return (
        <section className="add-comment-article">
            <form onSubmit={addCommentHandler} className="add-comment-form">
                <textarea className="add-comment" name="text">
                </textarea>
                <button className="button comment-btn">Добавяне</button>
            </form>
        </section>
    )
}

export default AddComment;