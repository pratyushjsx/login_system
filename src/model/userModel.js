const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }  
}, { timestamps: true });
module.exports = mongoose.model('user', Schema);