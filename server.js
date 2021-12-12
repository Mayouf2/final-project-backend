const express = require("express");
const app = express();
require("./DB/db");
app.use(express.json());
const cors = require('cors')
app.use(cors())


////////////////////////////////////////
const signUpRoute = require("./routers/route/signUpRoute")
const loginRoute = require("./routers/route/loginRoute")
const userRoute = require("./routers/route/userRoute")
const bookRoute = require("./routers/route/bookRoute")
const {authorization} =require ("./routers/middleware/authorization")

// app.use(signUpRoute , authorization)
// app.use(loginRoute , authorization)
// app.use(userRoute , authorization)
app.use(bookRoute)
app.use(signUpRoute);
app.use(loginRoute);
////////////////////////////////////////////



////////////////////////////////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port ");
});