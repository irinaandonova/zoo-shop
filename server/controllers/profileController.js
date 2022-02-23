const router = require('express').Router();
const profileService = require('../services/profileService.js');

router.get('/:id', async(req, res) => {
    const _id = req.params.id;
    const user = await profileService.getProfile(_id);
    if(user) {
        res.json({ status: 'ok', user: user.user})
    }
    else {
        res.json({ status: 'error'});
    }
})

module.exports = router;