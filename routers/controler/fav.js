const favModel = require("../../DB/models/favModel");
const userModel = require("../../DB/models/userModel");




const addFav =async(req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const newLike = await favModel.findOneAndUpdate({ user:user }, { $push: { like: id } },{new:true})

      const like = await favModel.findOne({user}).populate("like")
      res.status(201).json(like.like);
      
    } catch (error) {
      res.send(error);
    }
}

///////////////////////////////
//////////////////////////////
const deleteFav= async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const deleteLike = await favModel.findOneAndUpdate({ user: user }, { $pull: { like: id } },{new:true})
    const like = await favModel.findOne({user}).populate("like")
    res.status(200).json(like.like);
  } catch (error) {
    res.send(error);
  }
}
///////////////////////////////
//////////////////////////////

const getFav = async(req,res)=>{
    const user = req.token.userId;
    try {
      const getlike = await favModel.findOne({user}).populate("like")
      res.status(200).json(getlike.like);
    } catch (error) {
      res.send(error);
    }
  }
module.exports = {addFav,getFav,deleteFav}

