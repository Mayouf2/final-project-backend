const bcrypt = require("bcrypt");
const userModel  = require("../../DB/models/userModel")
const replayModel = require("../../DB/models/replayModel")
const favModel = require("../../DB/models/favModel");


const addUser = async(req, res) => {
  let { name, email, password , img , bio , admin  , time} = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const  time = new Date()
      const newUser = new userModel({ name, email, password , img , bio , admin ,time});
      const response = await newUser.save();
      const newFav = new favModel({user:response._id,Like:[]});
    const result = await newFav.save();
    res.status(201).json({response , result})
  } catch (error) {
      res.send(error)
  }
};

module.exports = { addUser };
