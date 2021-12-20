const bcrypt = require("bcrypt");
const userModel  = require("../../DB/models/userModel")
const replayModel = require("../../DB/models/replayModel")

const addUser = async(req, res) => {
  let { name, email, password , img , bio , admin } = req.body;
  try {
      password = await bcrypt.hash(password,10);
      const newUser = new userModel({ name, email, password , img , bio , admin , Like:[]});
      const response = await newUser.save();
      const newReplay = new replayModel({user:response._id,replay:[]});
    const result = await newReplay.save();
    res.status(201).json({response , result});
  } catch (error) {
      res.send(error)
  }
};

module.exports = { addUser };
