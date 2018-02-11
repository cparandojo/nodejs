
//importamos el modelo de usuario para poder relacionarnos con la base de datos.
const {saveUser} = require ('../../model.js');


process.on('message', (data) => {
 
    saveUser(data).then(() => {
        console.log('Usuario creado correctamente.');
     })
     .catch(() =>{
         console.log('Usuario no creado correctamente.');   
     });
     
});