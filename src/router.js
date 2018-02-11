
const express = require('express');

const {getUsers, getUserById} = require('./model/userModel.js');

const router = express.Router();

//creación del usuario
router.post('/user',(req,res)=>{
    
    let data = req.body;

    //realizamos llamada al proceso hijo.
    req.app.get('addUserProcess').send(data);

    res.status(201).json(data);
});

//listado de usuarios.
router.get('/users', (req, res)=>{

    getUsers().then((data)=>{
        res.status(200).json(data);
    });
});

//busqueda de usuario por id
router.get('/users/:id', (req, res)=>{

    let userId = req.params.id;

    getUserById(userId).then((data)=>{
        res.status(200).json(data);
    });
});


//actualización de usuario.
router.patch('/users', (req, res)=>{
   
    let data = req.body;

    //realizamos llamada al proceso hijo.
    req.app.get('updateUserProcess').send(data);

    res.status(200).json(data);
    
   
});


module.exports = router;