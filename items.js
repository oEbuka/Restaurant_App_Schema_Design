//A NoSQL Schema for items

const itemsSchema = new Schema({
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


