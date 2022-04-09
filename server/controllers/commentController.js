const router = require('express').Router();
const commentService = require('../services/commentService.js');



router.post('/add', async(req, res) => {
    const { user, comment } = req.body;
    try {
        let response = await commentService.addComment({ user, comment });
        res.status(201).json(response);
    }
    catch(err) {
        console.log(err);
        return { status: 'error'}
    }
    
})
module.exports = router;