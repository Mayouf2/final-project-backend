const express = require("express")
const userRoute = express.Router();

const {authorization} = require("../middleware/authorization")
const {getUserInfo , updateInfo} = require("../controler/user")



userRoute.get("/user"  , getUserInfo)
// userRoute.put("/user"  , updateInfo)

module.exports = userRoute;