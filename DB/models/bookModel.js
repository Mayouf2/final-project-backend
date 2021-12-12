const mongoose = require("mongoose");


const book = new mongoose.Schema({
    name: { type: String, required: true },
    auther:{type:String},
    img: { type: String, },  
    price:{type:String},
    like:{type:String}
});


module.exports = mongoose.model("book", book);