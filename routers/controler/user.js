const userModel  = require("../../DB/models/userModel")

const getUserInfo = async (req ,res)=>{
    const userId = req.token.userId
    const id = req.params.id;
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
      const response = await userModel.findOneAndUpdate(
        { _id: userId },
        { name: newName },
        {email:newEmail},
        {img:newImg},
        {bio:newBio},
        { new: true }
      );
      res.status(200).json(response);
    } catch (error) {
      res.send("error in token");
    }
  };

module.exports = {getUserInfo , updateUserName}