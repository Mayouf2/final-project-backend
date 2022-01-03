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
const replaysRoute =require("./routers/route/replaysRoute")
const FavRoute = require("./routers/route/FavRoute")
const postsRoute = require("./routers/route/postsRoute")

const {authorization} =require ("./routers/middleware/authorization")


app.use(userRoute);
app.use(bookRoute);
app.use(signUpRoute);
app.use(loginRoute);
// app.use(replaysRoute);
app.use(FavRoute);
app.use(postsRoute);

////////////////////////////////////////////



////////////////////////////////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port ");
});