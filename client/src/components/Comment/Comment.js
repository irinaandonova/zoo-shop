const Comment =  ({comment}) => {
    return(
        <article className="comment-section">
                <p className="username">{comment.username}</p>
                <p className="comment-text">{comment.text}</p>
                </article>
    )
}

export default Comment;