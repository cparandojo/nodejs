
const express = require('express');

//importamos solo las funciones del modelo que vamos a usar desde el router.
const {getUsers, getUserById, deleteUser} = require('./model/userModel.js');

const router = express.Router();

//creación del usuario con proceso hijo.
router.post('/user',(req,res)=>{
    
    //obtenemos el campo body de la petición
    let data = req.body;

    //realizamos llamada al proceso hijo.
    req.app.get('addUserProcess').send(data);

    //Respondemos con OK
    res.status(201).json(data);
});

//listado de usuarios sin proceso hijo
router.get('/users', (req, res)=>{

    //obtenemos los resultados.
    getUsers().then((data)=>{
        console.log('Lista de usuarios obtenida.');

        res.status(200).json(data);

    }).catch((err) => {
        console.log('Error obteniendo lista de usuarios');
        console.log(err);
        res.status(500).json({success:false});
    });
});

//busqueda de usuario por id sin proceso hijo
router.get('/users/:id', (req, res)=>{

    let userId = req.params.id;

    getUserById(userId).then((data)=>{
        console.log('Usuario obtenido correctamente.');

        res.status(200).json(data);

    }).catch((err) => {
        console.log('Error obteniendo usuario');
        console.log(err);
        res.status(500).json({success:false});
    });
});


//actualización de usuario con proceso hijo.
router.patch('/users/:id', (req, res)=>{
   
    let data = req.body;
    data.id = req.params.id;

    //realizamos llamada al proceso hijo.
    req.app.get('updateUserProcess').send(data);

    res.status(200).json(data);
   
});

//eliminación de usuario sin proceso hijo.
router.delete('/users/:id', (req, res)=>{
   
    let userId = req.params.id;
    
    deleteUser(userId).then((data)=>{
        console.log('Usuario borrado correctamente')
        res.status(200).json({success:true});

    }).catch((err) => {
        console.log('Error borrando usuario con id ', userId);
        console.log(err);
        res.status(500).json({success:false});
    });   
});


module.exports = router;