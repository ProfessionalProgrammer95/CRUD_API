
const mongoose = require('mongoose')


//schema instance
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type: String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    age : {
        type :Number,
        default : true
    },
    isActive : {
        type :Boolean,
        default :true
    }
}, {
    collection : "users",
    timestamps : true
})


//export 
module.exports = mongoose.model("User", userSchema)