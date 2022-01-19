const express = require("express")
const userRoute = express.Router();

const {authentication} = require("../middleware/authorization")
const {getUserInfo ,getOneUser ,getUsers,AdminDeleteUser, updateUserName , deleteUser ,updateUserEmail , updateUserImage , updateUserBio} = require("../controler/user")



userRoute.get("/user"  , authentication ,getUserInfo)
userRoute.get("/getUsers"  , authentication ,getUsers)

userRoute.put("/username"  , authentication, updateUserName)
userRoute.put("/useremail"  , authentication, updateUserEmail)
userRoute.put("/userimage"  , authentication, updateUserImage)
userRoute.put("/userbio"  , authentication, updateUserBio)
userRoute.delete("/user/:id", authentication , deleteUser)

userRoute.delete("/AdminDeleteUser/:id", authentication , AdminDeleteUser);


userRoute.get("/getOneUser/:id"  , authentication ,getOneUser)







// userRoute.post("/like/:id" , authentication , giveLike)
// userRoute.get("/like" , authentication , showLike)
// userRoute.delete("/like/:id" , authentication , DeleteLike)


module.exports = userRoute;