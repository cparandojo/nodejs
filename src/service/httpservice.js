
/**
 * Servicio que contiene las peticiones http necesarias.
 */
exports.getHttpServices = function() {

    var express = require("express");

    var router = express.Router();
    
   

    //declaramos las rutas donde escucharemos para obtener el listado de usuarios.
    router.get('/users', function(req, res) {
    
        var users = [];
      
        //TODO obtener de mongo los datos.
       

                var user = {
                "name": "name",
                "email": "aaa@bb.com",
                "username" : "username",
                "phone" : "123456789"
                }
      
         //TODO recorrer la lista que sale de mongo y añadirlo al obtejo users para la respuesta.

        users.push(user);
      
        res.setHeader('Content-Type', 'application/json');
        res.status(200).jsonp(users);

      });


      //Declaramos la ruta para realizar un post de un usuario.
      router.post('/user', function(req, res){

        //obtenemos el body de la petición
        var requestBody = req.body;


        //TODO guardar en mongo 

        var responseOK={
            message : "Succes",
            data: requestBody
        }


        res.setHeader('Content-Type', 'application/json');
        res.status(201).jsonp(responseOK);
        
      });

      //retornamos el objeto router para que sea añadido en app
      return router;

};

