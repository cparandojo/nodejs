
exports.createUser = function(userData){

    console.log('[createuserdao] Inicio creación de usuario.');

    var dataToInsert = [
        {name : userData.name, username : userData.username, email:userData.email, phone:userData.phone}
    ];

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

        //obtenemos la "tabla" de base de datos users.
        var collection = db.collection('users');

        // Inserción de algunas películas
        collection.insert(dataToInsert, function(err, docs) {            
            // Log de consola
            console.log('Insertado usuario en la base de datos "users" ');
            
        });

        db.close();

        console.log('Desconectado de la base de datos.');
        
    });
};


