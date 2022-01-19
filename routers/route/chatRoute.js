const express = require("express")
const chatRoute = express.Router();
const {authentication} = require("../middleware/authorization")

const {getChat , saveChat}= require("../controler/chat")



chatRoute.get("/getChat/:room" ,authentication, getChat)
chatRoute.post("/saveChat" ,authentication, saveChat)



module.exports = chatRoute
