
// const commentsModel = require("../../DB/models/commentsModel")



// const addComment = (req, res) => {
//     const { comment } = req.body;
//     const id = req.params.id;
//     const user = req.token.userId;
//     const userName=req.token.userName
//     commentsModel
//       .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} } },{
//         new: true
//       })
//       .populate("user")
//       .then((result) => {
//         // console.log(result,"resulttt")
//         res.send(result);
//       }).catch(err=>{
//         res.send(err)
//       });
//   };
//   const deleteComment = (req, res) => {
//     const { comment } = req.body;
//     const id = req.params.id;
//     const user = req.token.userId;
//     const userName=req.token.userName
//     commentsModel
//       .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment, userName} } },{
//         new: true
//       })
//       .populate("user")
//       .then((result) => {
//         // console.log(result,"resulttt")
//         res.send(result);
//       }).catch(err=>{
//         res.send(err)
//       });
//   };

//   module.exports = { addComment , deleteComment}
  