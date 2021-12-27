const express = require("express");
const FavRoute = express.Router();
const {addFav,getFav,deleteFav} =require("../controler/fav");
const { authentication } = require("../middleware/authorization");



FavRoute.post("/like/:id", authentication, addFav)
FavRoute.delete("/like/:id", authentication, deleteFav)
FavRoute.get("/like", authentication, getFav)


module.exports = FavRoute;