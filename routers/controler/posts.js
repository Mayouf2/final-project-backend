const postsModel = require("../../DB/models/postsModel");




const getPost = async  (req, res) => {
    const id = req.params.id
    postsModel
      .find({}).populate("user")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  const addPost = async (req, res) => {
    
    const { bookTitle ,auther ,desc , img , likes , rating , url} = req.body;
    const user = req.token.userId
    const userName = req.token.userName
    const  time = new Date()
    const newPost = new postsModel({bookTitle ,auther , desc , img , likes ,rating , user , userName ,url ,time})
    try {
      const response = await newPost.save()
      // const res = await postsModel.find({});
      res.status(201).json(response);
    } catch (error) {
      res.send( error);
    }
  }


  const deletePost = async (req , res)=>{
      const id = req.params.id
      const user = req.token.userId;

    try {
        const deleted = await postsModel.findOneAndDelete({_id:id , user:user})
        res.status(200).json(deleted)
    } catch (error) {
        res.send( error);
    }
  }

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////


// const givePostLike =async(req,res)=>{
//   const id = req.params.id;
//   const user = req.token.userId;
//   try {
//     const newLike = await postsModel.findOneAndUpdate({ user:user }, { $push: { like: id } },{new:true})
//     const like = await postsModel.findOne({user}).populate("likes")
//     res.status(201).json(like.like);
//   } catch (error) {
//     res.send(error);
//   }
// }

// ///////////////////////////////
// //////////////////////////////
// const givePostDissLike = async(req,res)=>{
// const id = req.params.id;
// const user = req.token.userId;
// try {
//   const deleteLike = await postsModel.findOneAndUpdate({ user: user }, { $pull: { like: id } },{new:true})
//   const like = await postsModel.findOne({user}).populate("likes")
//   res.status(200).json(like.like);
// } catch (error) {
//   res.send(error);
// }
// }
// ///////////////////////////////
// //////////////////////////////

// const getLikes = async(req,res)=>{
//   const user = req.token.userId;
//   try {
//     const getlike = await postsModel.findOne({user}).populate("likes")
//     res.status(200).json(getlike.like);
//   } catch (error) {
//     res.send(error);
//   }
// }

  
  module.exports = {addPost , getPost , deletePost,
  }