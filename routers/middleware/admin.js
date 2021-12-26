const jwt = require("jsonwebtoken");
const userModel = require("../../DB/models/userModel")


const admin = (req, res, next) => {
    try {
      const userRole = userModel.find({_id:user})

      if(userRole === true){
        next();
      } else {
        res.status(403).json("not allowed")
      }
      
    } catch (error) {
      res.status(403);
      res.send(error);
    }
  };

  module.exports = {admin}