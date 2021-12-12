const express = require("express")
const bookRoute = express.Router();
const {authentication} = require("../middleware/authorization")

const {bookInfo , addBook ,oneBook ,giveLike , delLike} = require("../controler/book")


bookRoute.get("/books"  , bookInfo)
bookRoute.post("/addbook"  , addBook)
// bookRoute.post("/like/:id" ,giveLike)
// bookRoute.delete("/like/:id",delLike) 
bookRoute.get("/book/:id" , oneBook)

module.exports = bookRoute
