const AddComment = () => {
    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = formData.get('comment');
        console.log(comment);
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