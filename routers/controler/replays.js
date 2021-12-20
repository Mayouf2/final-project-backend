
const replaysModel = require("../../DB/models/replayModel")



const addComment = (req, res) => {
    const { replay } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    replaysModel
      .findOneAndUpdate({ user: user }, { $push: { replay: {replay, userName} } },{
        new: true
      })
      .populate("user")
      .then((result) => {
        // console.log(result,"resulttt")
        res.send(result);
      }).catch(err=>{
        res.send(err)
      });
  };
  const deleteComment = (req, res) => {
    const { replay } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    replaysModel
      .findOneAndUpdate({ _id: id }, { $pull: { replay: {replay, userName} } },{
        new: true
      })
      .populate("user")
      .then((result) => {
        // console.log(result,"resulttt")
        res.send(result);
      }).catch(err=>{
        res.send(err)
      });
  };

  const showReplay = async (req, res)=>{
    const user = req.token.userId
    try{
    const getreplay = await replaysModel.find({_id:user}).populate("replay")
    res.status(200).json(getreplay)
    }catch(err){
    res.send(err)
    }
          
      }

  module.exports = { addComment , deleteComment , showReplay}
  