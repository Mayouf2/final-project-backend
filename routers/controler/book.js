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
    
    let { name ,auther, img ,description, price , like , rating} = req.body;
    // res.send({ name , img , price , like})
    const userId = req.token.userId;
    const isAdmin = await userModel.findOne({ _id: userId });
    if (isAdmin.admin == true) {
    const newBook = new bookModel({ name ,auther, img ,description, price ,like , rating});
  
    try {
      if(newBook){
      const response = await newBook.save();
      // const res = await bookModel.find({});
      res.status(201).json(response);
    } else{
      console.log("can't");
      res.send("can't post");
    } 
  }catch (error) {
      res.send(error);
    }
  }
  }
  /////////////////////////////////////
  const addComment = (req, res) => {
    const { comment } = req.body;
    const id = req.params.id;
    const user = req.token.userId;
    const userName=req.token.userName
    bookModel
      .findOneAndUpdate({ _id: id }, { $push: { comment: {comment, userName , rating } } },{
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
      .findOneAndUpdate({ _id: id }, { $pull: { comment: {comment, userName  } } },{
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

const rating = async(req, res) => {
  const id = req.params.id
  const rating = req.body.rating
  bookModel
    .find({rating})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

/////////////////////////////////////////////////
  module.exports = { bookInfo , addBook ,oneBook   , addComment , deleteComment , rating}