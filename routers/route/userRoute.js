const express = require("express")
const userRoute = express.Router();

const {authentication} = require("../middleware/authorization")
const {getUserInfo , updateUserName} = require("../controler/user")



userRoute.get("/user"  , authentication ,getUserInfo)
userRoute.put("/user"  , authentication, updateUserName)

module.exports = userRoute;