const mongoose = require("mongoose");
const postsModel = new mongoose.Schema({
    bookTitle:{type:String },
    auther:{type:String},
    desc: {type: String,},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"user"},
      img: {type: String,},
      likes: {type: Array,default: [],},
      rating:{type:Number , default: 0},
      url:{type:String},
      time:{type:String}
    },
    { timestamps: true }
  );
module.exports = mongoose.model("postsModel", postsModel);