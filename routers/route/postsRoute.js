const express = require("express");
const postsRoute = express.Router();
const {addPost , getPost , deletePost , givePostLike , givePostDissLike ,getLikes} =require("../controler/posts");
const { authentication } = require("../middleware/authorization");


postsRoute.get("/posts" ,authentication, getPost)
postsRoute.post("/posts" ,authentication, addPost)
postsRoute.delete("/posts/:id" ,authentication, deletePost)

////////////////////////
postsRoute.get("/postsLike" ,authentication, getLikes)
postsRoute.post("/postsLike/:id" ,authentication, givePostLike)
postsRoute.delete("/postsLike/:id" ,authentication, givePostDissLike)









module.exports = postsRoute