const User = require("../models/User");
const Booking = require("../models/Booking");
const Hotel = require("../models/Hotel");


const getUserProfile = async (req, res)=>{
    try{
        const user = await User.findId(req.user.id).select("-password");
        if(!user) return res.status(404).json({message: "usernotfound"});


        res.status(200).json(user);
    }catch(error){
        console.log("Error in getUerprofile")
        res.status(500).json({message: "Server error"})
    }
}