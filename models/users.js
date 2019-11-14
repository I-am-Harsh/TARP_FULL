const mongoose = require('mongoose');
require('mongoose-type-email')

const Email = mongoose.Types.Email;
const Schema = mongoose.Schema;

var carNum = new Schema ({
    plateNum : {

        type : String,
        unique : true,
        sparse: true

    },
    name : {
        type : String
    },
    price : {
        type : Number
    }
});

var userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : Email,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    car : [carNum]
});




var users = mongoose.model('user',userSchema);

module.exports = users;

