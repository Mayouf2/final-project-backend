const express = require("express")
const bookRoute = express.Router();
const {authentication} = require("../middleware/authorization")
const {admin} = require("../middleware/admin")

const {bookInfo , addBook ,oneBook ,giveLike , delLike , addComment , deleteComment } = require("../controler/book")


bookRoute.get("/books"  , bookInfo)
bookRoute.post("/addbook" ,admin , addBook)
// bookRoute.post("/like/:id" ,giveLike)
// bookRoute.delete("/like/:id",delLike) 
bookRoute.get("/book/:id" , oneBook)

bookRoute.post("/comment/:id" ,authentication,addComment)
bookRoute.put("/comment/:id" ,authentication, deleteComment)



module.exports = bookRoute
