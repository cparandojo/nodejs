
/**
 * Importamos las dependencias necesarias.
 */
var express = require("express");//facilita crear el servidor y hacer llamadas http
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var httpService = require("../service/httpservice.js");



var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//permite que pueda parsear JSON
app.use(methodOverride());//permite personalizar metodos http

//añadimos el uso de obtencion de usuarios a partir del servicio.
app.use(httpService.getUsers());

//arrancamos nuestro servidor.
app.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});


//var mongoose = require('mongoose');

//var router = express.Router();

//declaramos las rutas donde escucharemos.
/*
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

});*/



/*
mongoose.connect('mongodb://localhost/user', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }else{
      //no ha habido error al conectar con la bbdd. Arrancamos el servidor.
    app.listen(8080, function() {
        console.log("Node server running on http://localhost:8080");
      });
  }
  
});*/