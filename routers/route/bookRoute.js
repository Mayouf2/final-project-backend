const express = require("express")
const bookRoute = express.Router();
const {authentication} = require("../middleware/authorization")
const {admin} = require("../middleware/admin")

const {getbook,bookInfo , addBook ,oneBook , addComment , deleteComment , rating} = require("../controler/book")


bookRoute.get("/books"  , bookInfo)

bookRoute.get("/getbook"  , getbook)



bookRoute.post("/addbook"  ,authentication, addBook)
// bookRoute.post("/like/:id" ,giveLike)
// bookRoute.delete("/like/:id",delLike) 
bookRoute.get("/book/:id" , oneBook)

bookRoute.get("/rating" ,rating)

bookRoute.post("/comment/:id" ,authentication,addComment)
bookRoute.put("/comment/:id" ,authentication, deleteComment)



module.exports = bookRoute
