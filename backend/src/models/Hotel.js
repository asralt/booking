const mongoose = require('mongoose')


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Hotel name is required"]
    },
    location:{
        type: String,
        required: [true, "location is reuqired"]
    },
    description:{
        type: String,
        required: [true, "Descriptiong of the hotel is required"]

    },
    pricePernight:{
        type: Number,
        required: [true, " Price per night is requied"]
    },
    amenities: [String],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }


});



module.export = mongoose.model("Hotel", hotelSchema);