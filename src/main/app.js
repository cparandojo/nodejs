
/**
 * Importamos las dependencias necesarias.
 */

var express = require("express");//facilita crear el servidor y hacer llamadas http
var bodyParser  = require("body-parser");//middleare body parser para recuperar el valor del parámetro enviado por POST
var methodOverride = require("method-override");
var httpService = require('../service/users/httpservice.js');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//permite que pueda parsear JSON
app.use(methodOverride());//permite personalizar metodos http

//añadimos el uso de obtencion de usuarios a partir del servicio.
app.use(httpService.getHttpServices());

//arrancamos nuestro servidor.
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
