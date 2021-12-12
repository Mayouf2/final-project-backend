const bookModel = require("../../DB/models/bookModel")



// const bookInfo = async (req,res)=>{
//     // const token = req.headers.authorization.split(" ")[1]
//     // res.send(token)
//     try {
//       // const valid = jwt.verify(token , "ABC")
//       const userId = req.valid.userId
//      const bookInfo = await bookModel.findOne({_id:userId})
//       res.status(200).json(bookInfo)
//     } catch (error) {
//       res.send(error);
//     }
//   }

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

const oneBook = (req, res) => {
  let _id = req.params.id
  bookModel
  .find()
  .then((books)=>{
    res.status(200).json(books[_id-1]);

  })
  .catch((err) => {
    res.send(err);
  });
}

  const addBook = async (req, res) => {
    const { name ,auther, img , price , like} = req.body;
    res.send({ name , img , price , like})
    const newBook = new bookModel({ name ,auther, img , price ,like});
  
    try {
      const response = await newBook.save();
      res.status(201).json(response);
    } catch (error) {
      res.send( error , "err");
    }
  }

  ////////////////////////////////////////
  const Likes = []
const giveLike = async (req , res) => {
  let id = req.params.id
  let len = Likes.filter((element , i) => {
    return element.id == id
  }).length

  if (len == 0){
    Likes.push(books[id-1])
    books[id-1].like = "red"
    res.json(books); 
  }else{
    books[id-1].like = "black"
    res.json("-1"); 
  }
  res.status(200);
  res.json("")
  
}

// app.get("/like", (req, res) => {
//   res.status(200);
//   res.json(Likes);
// });

//delete Like
const delLike = async (req , res) => {
  const id = req.params.id;
 
  Likes.forEach((element , i) => {
    if (element.id == Number(id)) {
      Likes.splice(i,1)
      books[Number(id-1)].like = "black"
    }
   
  });
  
  res.status(200);
  res.json(Likes);
}
  module.exports = { bookInfo , addBook ,oneBook ,giveLike , delLike}