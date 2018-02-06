
//Funcion para conectar con la base de datos.
module.exports.startDB = function () {

    //Importamos el cliente mongo.
    var mongoClient = require('mongodb').MongoClient;

    var url = "mongodb://localhost:27017/nodejs";

    // Conectamos con la base de datos.
    mongoClient.connect(url, function (err, db) {

        console.log('[ConnectionDB] Conectando con la base de datos "nodejs" ...');

        if (err) {
            console.log(' [ConnectionDB] Error conentando con la base de datos "nodejs" ');
            console.log(err);
            throw err;
        }

        console.log('[ConnectionDB] Conectado con la base de datos "nodejs" ');

    });

};

module.exports.endDB = function () {

    console.log('[ConnectionDB] Desconectando con la base de datos "nodejs" ...');
};
