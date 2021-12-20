const mongoose = require("mongoose");


const replays = new mongoose.Schema({
  
    replay:{type: mongoose.Schema.Types.ObjectId,ref:"bookModel"},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"userModel"}
});


module.exports = mongoose.model("replays", replays);