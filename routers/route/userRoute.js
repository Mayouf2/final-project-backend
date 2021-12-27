const express = require("express")
const userRoute = express.Router();

const {authentication} = require("../middleware/authorization")
const {getUserInfo , updateUserName , deleteUser ,updateUserEmail , updateUserImage , updateUserBio} = require("../controler/user")



userRoute.get("/user"  , authentication ,getUserInfo)
userRoute.put("/username"  , authentication, updateUserName)
userRoute.put("/useremail"  , authentication, updateUserEmail)
userRoute.put("/userimage"  , authentication, updateUserImage)
userRoute.put("/userbio"  , authentication, updateUserBio)
userRoute.delete("/user/:id", authentication , deleteUser)


// userRoute.post("/like/:id" , authentication , giveLike)
// userRoute.get("/like" , authentication , showLike)
// userRoute.delete("/like/:id" , authentication , DeleteLike)


module.exports = userRoute;