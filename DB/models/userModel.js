const mongoose = require("mongoose");


const user = new mongoose.Schema({
    name: { type: String},
    email: { type: String, },  
    password:{type:String},
    img:{type:String , default:""},
    admin:{type:Boolean , default:false}

});


module.exports = mongoose.model("user", user);