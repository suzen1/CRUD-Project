const mongoode = require('mongoose');
const userModel = new mongoode.Schema({
    username:String,
    email:String,
    ImageUrl: String
})


mongoode.connect('mongodb://localhost:27017/CrudApp');
module.exports = mongoode.model('user', userModel);