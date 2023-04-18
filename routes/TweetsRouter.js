const express = require('express')

const tweetsRouter = express.Router();



//declare functions
tweetsRouter.get('/tweets', (req, res) => {
    res.json({data: [{
            title: "Deep Thoughts",
            body: "Friends, I am the realest coder alive",
            author: "Arthur",
    }] })
})

module.exports = tweetsRouter;