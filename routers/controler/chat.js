const ChatModel = require("../../DB/models/chatModel")

const getChat= async(req,res)=>{
    console.log("iiiiiiiiiiiiiiiiiiii");
    const room = req.params.id;
  console.log(room,"ooooo");
  try {
    const getMag= await ChatModel.findOne({room:room})
    res.status(200).json(getMag);
  
  } catch (error) {
    res.send(error);
    
  }
  }
  
  const saveChat = async (req, res) => {
    const userId = req.token.userId;
    // const room=req.body
    const { room, message, userName,recipient ,time } = req.body;
    console.log(recipient,"recipient");
    const objChat = { userId, message,userName,time };
  
    try {
      const foundRoom = await ChatModel.findOne({ room: room });
      console.log(foundRoom, "foundRoom");
  
      if (foundRoom == null) {
        console.log("it's in");
        const newChat = new ChatModel({ room: room, chatArr: [objChat] });
        console.log(newChat, "newChat");
        const response = await newChat.save();
        res.status(200).json(response);
      } else {
        const updetChat = await ChatModel.findOneAndUpdate(
          { room: room },
          { $push: { chatArr: objChat } },
          { new: true }
        );
        res.status(201).json(updetChat);
      }
    } catch (error) {
      res.send(error);
    }
  };
  
  module.exports ={getChat , saveChat}