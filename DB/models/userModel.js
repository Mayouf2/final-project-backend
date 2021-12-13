const mongoose = require("mongoose");


const user = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, },  
    password:{type:String},
    img:{type:String}
});


module.exports = mongoose.model("user", user);