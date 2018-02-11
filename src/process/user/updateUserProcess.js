//importamos el modelo de usuario para poder relacionarnos con la base de datos.
const {updateUser} = require ('../../model/userModel.js');

//El proceso hijo de actualización de usuario realizará la actualización en base de datos del usuario.
process.on('message', (data) => {
 
    updateUser(data).then(() => {
        console.log('Usuario actualizado correctamente.');
     })
     .catch(() =>{
         console.log('Usuario no actualizado correctamente.');   
     });

});