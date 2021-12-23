const mongoose = require("mongoose");


const replays = new mongoose.Schema({
    comment:[{type:mongoose.Schema.Types.ObjectId,ref:"book"}],
    replay:{type: String},
    user:{type: mongoose.Schema.Types.ObjectId, ref:"user"}
  
});


module.exports = mongoose.model("replays", replays);