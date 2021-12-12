const express = require("express");
const loginRoute = express.Router();

const { login } = require("../controler/login");

loginRoute.post("/login", login);

module.exports = loginRoute;
