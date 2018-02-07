//indicamos la URL de la base de datos.
var url = "mongodb://localhost:27017/";

//Importamos el cliente mongo.
var mongoClient = require('mongodb').MongoClient;

//Función que crea un usuario.
exports.createUser = function(userData, callbackCreateUser, callbackCreateUserDaoException){

    // Conectamos con la base de datos.
    mongoClient.connect(url, function (err, db) {

        console.log('[UserDao.createUser] Conectando con la base de datos ...');

        if (err) {
            console.log(' [UserDao.createUser] Error conentando con la base de datos ');
            console.log(err);
            //llamamos a la funcion callback de la petición de creación.
            callbackCreateUserDaoException();

        }else{

            console.log('[UserDao.createUser] Conectado con la base de datos ');
        
            //obtenemos el esquema de base de datos a la que queremos conectarnos
            var dbo = db.db("nodejs");

            //obtenemos la "tabla" de base de datos users.
            var collection = dbo.collection('users');
        
            // Inserción del objeto usuario.
            dbo.collection("users").insertOne(userData, function(err, res) {
                if (err){
                    console.log('Error insertando usuario en base de datos.');
                    console.log(err);
                    //llamamos a la funcion callback de la petición de creación.
                    callbackCreateUserDaoException();

                }else{

                    console.log('usuario insertado en "nodejs"');

                    //desconectamos de la base de datos.
                    db.close();
    
                    console.log('[UserDao.createUser] Desconectado de la base de datos.');
    
                    //Realizamos la llamada a la función callback que tiene el servicio http.
                    callbackCreateUser(userData);
                }               
            });
        }
    });
};


//Función que obtiene la lista de usuarios.
exports.getUsers = function(callbackListUsers,callbackCreateUserDaoException){

    // Conectamos con la base de datos.
    mongoClient.connect(url, function (err, db) {

        console.log('[UserDao.getUsers] Conectando con la base de datos ...');

        if (err) {
            console.log(' [UserDao.getUsers] Error conentando con la base de datos ');
            console.log(err);
            
            callbackCreateUserDaoException();

        }else{

            console.log('[UserDao.getUsers] Conectado con la base de datos ');
            //obtenemos el esquema de base de datos a la que queremos conectarnos
            var dbo = db.db("nodejs");

            //obtenemos la "tabla" de base de datos users.
            var collection = dbo.collection('users');

            //obtenemos los usuarios de la base de datos
            collection.find({}).toArray(function(err, result) {
                if (err) {
                    console.log('Error obteniendo usuarios en base de datos.');
                    console.log(err);
                   
                    callbackCreateUserDaoException();

                }else{
                    db.close();
                    console.log('[UserDao.getUsers] Desconectado con la base de datos ');
                    callbackListUsers(result);
                }

            });
        }
    });
};


