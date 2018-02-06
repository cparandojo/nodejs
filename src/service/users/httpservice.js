
/**
 * Servicio que contiene las peticiones http necesarias.
 */
exports.getHttpServices = function () {

    //importamos el modelo.
    var userModel = require('../../model/user.js');

    var express = require("express");
    var router = express.Router();

    //Declaramos la ruta para realizar un post de un usuario.
    router.post('/user', function (req, res) {

        //obtenemos el body de la petición
        var requestBody = req.body;

        //importamos el dao de crear.
        var createUserDao = require('../../dao/users/createuserdao.js');

        //realizamos la llamada al DAO
        createUserDao.createUser(requestBody);

        var responseOK = {
            message: "Succes",
            data: requestBody
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(201).jsonp(responseOK);

    });

    //declaramos las rutas donde escucharemos para obtener el listado de usuarios.
    router.get('/users', function (req, res) {

        var users = [];

        //TODO obtener de mongo los datos.


        var user = {
            "name": "name",
            "email": "aaa@bb.com",
            "username": "username",
            "phone": "123456789"
        }

        //TODO recorrer la lista que sale de mongo y añadirlo al obtejo users para la respuesta.

        users.push(user);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).jsonp(users);

    });

    //retornamos el objeto router para que sea añadido en app
    return router;

};

