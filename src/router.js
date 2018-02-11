
const { getUsers,saveUser } = require('./model');

const express = require('express');

const router = express.Router();

router.post('/user',(req,res)=>{
    let data = req.body;
    req.app.get('userProcess').send(data);
    res.json(data);
});

/*
router.get('/tweets', (req, res)=>{
    getTweets().then((data)=>{
        res.json(data);
    })
});

router.get('/tweeter/:id', (req, res)=>{
    let id = req.param.id;
    getTweets(id).then((data)=>{
        res.json(data);
    })
});


router.post('tweets/find',(req, res)=>{
    let filter = req.body;
    getTweetsByFilter(filter).then((data) =>{
        res.json(data);
    });
})*/


module.exports = router;