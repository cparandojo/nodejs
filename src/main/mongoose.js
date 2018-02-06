var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

     console.log('Conectado');
                
});