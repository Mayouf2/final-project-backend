
const replaysModel = require("../../DB/models/replayModel")



const addComment = (req, res) => {
    const { comment , replay } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    replaysModel
      .findOneAndUpdate({ user: user }, { $push: { comment: {comment,replay, userName} } },{
        new: true
      })
      .populate("comment")
      .then((result) => {
        // console.log(result,"resulttt")
        res.send(result);
      }).catch(err=>{
        res.send(err)
      });
  };
  const deleteComment = (req, res) => {
    const { comment,replay } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    replaysModel
      .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment,replay, userName} } },{
        new: true
      })
      .populate("comment")
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
    const getreplay = await replaysModel.find({_id:user}).populate("comment")
    res.status(200).json(getreplay)
    }catch(err){
    res.send(err)
    }
          
      }

  module.exports = { addComment , deleteComment , showReplay}
  