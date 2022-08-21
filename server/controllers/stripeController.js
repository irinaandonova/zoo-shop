const router = require('express').Router();
const stripe = require('stripe')(process.env.SECRET_KEY);
module.exports = router;