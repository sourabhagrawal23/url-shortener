//redirect short to long urls

const express = require('express')

const router = express.Router()


//Bringing Our Model

// const Url = require('../models/Url')
const Url = require('../models/url')

// @route   GET /:code
// @desc    Redirect to long/original URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        });

        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No Url Found')
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }

}) //: beacuse it is a parameter

module.exports = router;