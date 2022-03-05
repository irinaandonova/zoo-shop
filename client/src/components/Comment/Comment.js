const Comment =  ({comments}) => {
    return(
        <article className="comment-section">
                <p className="username">{comments.username}</p>
                <p className="comment-text">{comments.text}</p>
                </article>
    )
}

export default Comment;