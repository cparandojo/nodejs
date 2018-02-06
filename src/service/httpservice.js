
/**
 * Servicio que contiene las peticiones http necesarias.
 */
exports.getHttpServices = function() {

    var express = require("express");

    var router = express.Router();
    
    var userdao = require('../dao/userdao.js');

    //declaramos las rutas donde escucharemos para obtener el listado de usuarios.
    router.get('/users', function(req, res) {
    
        var users = [];
      
        //TODO obtener de mongo los datos.
        //TODO recorrer la lista que sale de mongo y añadirlo al obtejo users para la respuesta.

        var user = {
          "name": "name",
          "email": "aaa@bb.com",
          "username" : "username",
          "phone" : "123456789"
        }
      
        users.push(user);
      
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(users));
      
        console.log('Respondemos con el listado.' , JSON.stringify(users));

      });


      //Declaramos la ruta para realizar un post de un usuario.
      router.post('/user', function(req, res){

        //obtenemos el body de la petición
        var requestBody = req.body;

        console.log('El body de la petición es: ', JSON.stringify(requestBody));

        
        //TODO guardar en mongo

        var responseOK={
            code : 200,
            message : "Succes",
            data: requestBody
        }


        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(responseOK));
        
      });

      //retornamos el objeto router para que sea añadido en app
      return router;

};

