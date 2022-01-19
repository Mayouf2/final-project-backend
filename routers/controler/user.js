const userModel  = require("../../DB/models/userModel")
// const bookModel  = require("../../DB/models/bookModel")


const getUsers = async (req ,res)=>{
  const userId = req.token.userId
  // const id = req.params.id;
  try {
      const profile = await userModel.find({})
      res.status(200).json(profile);
  } catch (error) {
      res.send(error)
  }
}

const getOneUser = async (req ,res)=>{
  const userId = req.token.userId
  const id = req.params.id;
  try {
      const profile = await userModel.find({_id:id})
      res.status(200).json(profile);
  } catch (error) {
      res.send(error)
  }
}

const AdminDeleteUser = async(req , res)=>{
  const userId = req.token.userId;
  // const id = req.params.id
  
    try {
      const user = await userModel.findOne({ _id: userId });
  if(user.admin == true){
    const del = await userModel.findOneAndDelete({_id:userId})

      if(del){
        res.status(200).json([del , "delete"]);
    } else {
      console.log("can't delete");
    res.send("can't")
}
} 
}
catch (error) {
  res.send(error)
}
}



const getUserInfo = async (req ,res)=>{
    const userId = req.token.userId
    // const id = req.params.id;
    try {
        const profile = await userModel.findOne({_id:userId})
        res.status(200).json(profile);
    } catch (error) {
        res.send(error)
    }
}
const updateUserName = async (req, res) => {
    const { newName  , newEmail , newImg , newBio} = req.body;
    try {
      const userId = req.token.userId;
      // const id = req.params.id
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        { name : newName},
        // {email : newEmail},
        // {img : newImg},
        // {bio : newBio},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };
  const updateUserEmail = async (req, res) => {
    const { newName  , newEmail , newImg , newBio} = req.body;
    try {
      const userId = req.token.userId;
      // const id = req.params.id
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        // { name : newName},
        {email : newEmail},
        // {img : newImg},
        // {bio : newBio},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };

  const updateUserImage = async (req, res) => {
    const { newName  , newEmail , newImg , newBio} = req.body;
    try {
      const userId = req.token.userId;
      // const id = req.params.id
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        // { name : newName},
        // {email : newEmail},
        {img : newImg},
        // {bio : newBio},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };


  const updateUserBio = async (req, res) => {
    const { newName  , newEmail , newImg , newBio} = req.body;
    try {
      const userId = req.token.userId;
      // const id = req.params.id
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        // { name : newName},
        // {email : newEmail},
        // {img : newImg},
        {bio : newBio},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send(error);
    }
  };

  


  const deleteUser = async(req , res)=>{
    const userId = req.token.userId;
    // const id = req.params.id
    try {
      const del = await userModel.findOneAndDelete({_id:userId})
      res.status(200).json([del , "delete"]);
    } catch (error) {
      res.send(error)
    }
  }


  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
//   const giveLike  = async (req, res) => {
//     const id = req.params.id;
//     const user = req.token.userId;
//     try {
      
//       const like = await userModel.findOneAndUpdate(
//         { _id: user },
//         { $push: { Like: id } },
//         { new: true }
//       )
//       res.status(201).json(like);
//     } catch (error) {
//       res.send(error);
//     }
//   }

//   const DeleteLike = async (req, res) => {
//     const id = req.params.id;
//     const user = req.token.userId;
//     try {
//       const newLike = await userModel.findOneAndUpdate(
//         { _id: user },
//         { $pull: { Like: id } },
//         { new: true }
//       );
//       res.status(200).json(newLike);
//     } catch (error) {
//       res.send("error");
//     }
//   }; 

//   const showLike = async (req, res)=>{
// const user = req.token.userId
// try{
// const getlike= await userModel.findOne({_id:user}).populate("Like")
// res.status(200).json(getlike.Like)
// }catch(err){
// res.send(err)
// }
// }
  ////////////////////////////////////////

module.exports = {getUserInfo ,getOneUser,getUsers,AdminDeleteUser, updateUserName , deleteUser ,updateUserEmail,updateUserImage,updateUserBio}