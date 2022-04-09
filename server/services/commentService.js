const Comment = require('../models/Comment.js');


const addComment = async ({ user, comment }) => {
    try {
        let newComment = await new Comment({ user, comment });
        await newComment.save();
        return { status: 'ok' };
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}
const commentService = { 
    
    addComment
}

module.exports = commentService;