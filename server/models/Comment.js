const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        required: true,
        type: String
    }
});

const Comment =  mongoose.model('Comment', commentSchema);

module.exports = Comment;

