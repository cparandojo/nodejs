
//importamos el dao de crear.
var userDao = require('../../dao/users/userdao.js');

//importamos el modelo.
var userModel = require('../../model/user.js');

/**
 * Servicio que contiene las peticiones http necesarias.
 */
exports.getHttpServices = function () {

    var express = require("express");
    var router = express.Router();

    //Objeto que contiene la respuesta del servicio.
    var responseOK = {}
    var statusCode;

    //Declaramos la ruta para realizar un post de un usuario.
    router.post('/user', function (req, res, next) {

        //Función callback que indica la creación del usuario en mongodb.
        var callbackCreateUserDao = function (callbackUserData){
            
            //ponemos el codigo de error y el data del usuario creado
            responseOK.code = "201";           
            responseOK.data =  callbackUserData;
            statusCode = 201;
            //como tenemos otra función middelware, indicamos que pase a la siguiente.
            next();
        }

        //Función callback que indica la creación del usuario en mongodb.
        var callbackCreateUserDaoException = function (){
            
            //Ponemos el codigo de error.
            responseOK.code = "500"; 
            statusCode = 500;           
            //como tenemos otra función middelware, indicamos que pase a la siguiente.
            next();
        }

        //obtenemos el body de la petición
        var requestBody = req.body;

        //realizamos la llamada al DAO. Cuando finalice con exito, llamara
        userDao.createUser(requestBody, callbackCreateUserDao, callbackCreateUserDaoException);

    }, function(req, res){
        //ultima función a ejecutar cuando todo el proceso termina.
        res.setHeader('Content-Type', 'application/json');
        res.status(statusCode).jsonp(responseOK);
    });



    //declaramos las rutas donde escucharemos para obtener el listado de usuarios.
    router.get('/users', function (req, res, next) {

        //Funcion callback cuando se obtienen todos los datos correctamente.
        var callbackListUsers = function(callbackUserList){
            //ponemos el codigo de error y la información de los usuarios.
            responseOK.code = "200";        
            responseOK.total = callbackUserList.length;   
            responseOK.data =  callbackUserList;
           
            statusCode = 200;
            //como tenemos otra función middelware, indicamos que pase a la siguiente.
            next();

        };

         //Función callback que indica un error en la obtención del listado de usuarios.
         var callbackCreateUserDaoException = function (){
            
            //Ponemos el codigo de error.
            responseOK.code = "500"; 
            statusCode = 500;           
            //como tenemos otra función middelware, indicamos que pase a la siguiente.
            next();
        }

        userDao.getUsers(callbackListUsers,callbackCreateUserDaoException);

    }, function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.status(statusCode).jsonp(responseOK);
    });

    //retornamos el objeto router para que sea añadido en app
    return router;

};

