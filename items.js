//A NoSQL Schema for items
const mongoose = require("mongoose"); // MongoDB npm package required to use the  mongoose command

const itemsSchema = new mongoose.Schema({ // mongoose.Schema creates a NoSQL schema in your linked mongoose database
    _id: ObjectId,
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image_url: String,
    categories: [String],
})


