//A NoSQL Schema for order


const orderSchema = new Schema({
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

