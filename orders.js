//A NoSQL Schema for order
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    _id: ObjectId,
    items:
    [{
        itemId: ObjectId,
        quantity: Number
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: String,
    orderDate: Date,
    deliveryAddress: {
        type: String,
        required: true
    }
})

// Lastly we should export Schemas which then becomes models we use in our application. That is not requird from the task. Thank you.