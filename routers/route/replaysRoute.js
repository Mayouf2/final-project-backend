const express = require("express")
const replaysRoute = express.Router();
const {authentication} = require("../middleware/authorization")

const  { addComment , deleteComment , showReplay} = require("../controler/replays")

replaysRoute.get("comment" , authentication , showReplay )
replaysRoute.post("/comment/:id" ,authentication,addComment)
replaysRoute.put("/comment/:id" ,authentication, deleteComment)


module.exports = replaysRoute
