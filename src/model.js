const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/practicanodejs');
mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
    id : String,
    name :String,
    username : String,
    phone : String,
    email: String
});


const User = mongoose.model('User', UserSchema);

exports.getUsers = ()=>{
    return User.find({}).exec();
};

exports.saveUser = (data) =>{
    return (new User(data)).save();
};

/*
exports.getUsers = (id) =>{
    return User.findOne({id:id}).exec();
};

exports.getUsersByFilter=() =>{
    return User.findOne(filter).exec();
};
*/
