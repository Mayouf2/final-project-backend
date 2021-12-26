const bookModel = require("../../DB/models/bookModel")
const userModel = require("../../DB/models/userModel")





const bookInfo = async  (req, res) => {
  const id = req.params.id
  bookModel
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

const oneBook = async (req, res) => {
  let id = req.params.id
 
try {
  const onebook = await
  bookModel
  .findById({_id:id})
  res.status(200).json(onebook)
} catch (error) {
  res.send(error)
}
}

  const addBook = async (req, res) => {
    
    const { name ,auther, img ,description, price , like} = req.body;
    res.send({ name , img , price , like})
    const newBook = new bookModel({ name ,auther, img ,description, price ,like});
  
    try {
      const response = await newBook.save();
      res.status(201).json(response);
    } catch (error) {
      res.send( error , "err");
    }
  }

  /////////////////////////////////////
  const addComment = (req, res) => {
    const { comment } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    bookModel
      .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName} } },{
        new: true
      })
      .populate("user")
      .then((result) => {
        // console.log(result,"result")
        res.send(result);
      }).catch(err=>{
        res.send(err)
      });
  };
  const deleteComment = (req, res) => {
    // if(req.params.id == req.params.id || req.body.admin == true){
    const { comment } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    bookModel
      .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment, userName} } },{
        new: true
      })
      .populate("user")
      .then((result) => {
        res.send(result);
      }).catch(err=>{
        res.send(err)
      });
  };
// }

  
  
  
  

  ////////////////////////////////////////


// app.get("/like", (req, res) => {
//   res.status(200);
//   res.json(Likes);
// });

//delete Like


//////////////////////////////////////////////////

/////////////////////////////////////////////////
  module.exports = { bookInfo , addBook ,oneBook   , addComment , deleteComment }