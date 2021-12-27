const mongoose = require("mongoose");
const favModel = new mongoose.Schema({
  user:{type: mongoose.Schema.Types.ObjectId, ref: "user"},
  like:[{type: mongoose.Schema.Types.ObjectId, ref: "book"}]
});
module.exports = mongoose.model("favModel", favModel);