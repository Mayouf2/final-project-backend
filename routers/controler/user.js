const userModel  = require("../../db/models/userModel")

const getUserInfo = async (req ,res)=>{
    try {
        const profile = await userModel.findOne({user:user})
        res.status(200).json(profile);

    } catch (error) {
        res.send(error)
    }
}

module.exports = {getUserInfo}