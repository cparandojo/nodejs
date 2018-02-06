
/**
 * Servicio que contiene las peticiones http necesarias.
 */
exports.getUsers = function() {

    console.log('Inicio obtención de usuarios.');

    var express = require("express");//facilita crear el servidor y hacer llamadas http

    console.log('Obtenemos express.');

    var router = express.Router();
    
    console.log('Obtenemos router.');

    //declaramos las rutas donde escucharemos.
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

      return router;

};

