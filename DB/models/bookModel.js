const mongoose = require("mongoose");


const book = new mongoose.Schema({
    name: { type: String, required: true },
    auther:{type:String},
    img: { type: String, }, 
    description:{type:String}, 
    price:{type:String},
    comment:{type:Array},
    rating: { type: Number , default: 0},
  
});


module.exports = mongoose.model("book", book);