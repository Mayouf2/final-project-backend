// const express = require("express");
// const signUpRoute = express.Router();

// const { addUser } = require("../controler/signUp");

// signUpRoute.post("/signUp", addUser);

// module.exports = signUpRoute;

const express = require("express");
const signUpRoute = express.Router();

const {addUser} = require("../controler/signUp");

signUpRoute.post("/signUp" , addUser);

module.exports = signUpRoute;
