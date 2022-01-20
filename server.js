const express = require("express");
require('dotenv').config()
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
const chatRoute = require("./routers/route/chatRoute")

const {authorization} =require ("./routers/middleware/authorization")


app.use(userRoute);
app.use(bookRoute);
app.use(signUpRoute);
app.use(loginRoute);
// app.use(replaysRoute);
app.use(FavRoute);
app.use(postsRoute);
app.use(chatRoute);

////////////////////////////////////////////



const { Server } = require("socket.io");
// const Port = 5000;


//  console.log(process.env.PORT);
const server = app.listen(process.env.PORT, () => {
  console.log("SERVER IS RUN!");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"],
    
  },
});

io.on("connection", (socket) => {
  // console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    // console.log(data,"data of send_message ");
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    // console.log("User Disconnected", socket.id);
  });
});






////////////////////////////////////////////////////
// // const Port = 5000;
// app.listen(Port, () => {
//   console.log("server run on 5000 port ");
// });