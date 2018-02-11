
const express = require('express');

const {getUsers, getUserById} = require('./model/userModel.js');

const router = express.Router();

router.post('/user',(req,res)=>{
    
    let data = req.body;

    //realizamos llamada al proceso hijo.
    req.app.get('addUserProcess').send(data);

    res.status(201).json(data);
});


router.get('/users', (req, res)=>{

    getUsers().then((data)=>{
        res.status(200).json(data);
    });
});

router.get('/users/:id', (req, res)=>{

    let userId = req.params.id;

    getUserById(userId).then((data)=>{
        res.status(200).json(data);
    });
});

module.exports = router;