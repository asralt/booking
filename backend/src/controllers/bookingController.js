const Booking = require('../models/Booking');
const Hotel = require('../models/Hotel');
const User = require('../models/User');




const createBooking = async (req,res )=>{
    try{
        const {hotel, checkinDate, checkOutData,guests} = req.body;;
        const userId = req.user._id;



        const hotelExists = await Hotel.findbyId(hotel);
        if(!hotelExists)return res.status(404).json({message:"Hotel not found"});



        const newBooking = new Booking({
            user: userId,
            hotel,
            checkinDate,
            checkOutDate,
            guests
        });
        await newBooking.save();
        res.status(201).json({message:"Booking was success", booking: newBooking});
    }catch(err){
        console.error('Booking error', err);
        res.status(500).json({message:"Server err"});

    }
};

const cancelBooking = async (req,res )=>{}
const getBooking = async (req,res )=>{}