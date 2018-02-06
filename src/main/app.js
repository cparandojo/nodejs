
/**
 * Importamos las dependencias necesarias.
 */
var express = require("express");//facilita crear el servidor y hacer llamadas http
var app = express();

var bodyParser  = require("body-parser");

var methodOverride = require("method-override");

var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());//permite que pueda parsear JSON
app.use(methodOverride());//permite personalizar metodos http

var router = express.Router();

//declaramos las rutas donde escucharemos.
router.get('/', function(req, res) {

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

});

app.use(router);

app.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});

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