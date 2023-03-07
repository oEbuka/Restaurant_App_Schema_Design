//A NoSQL Schema for customer
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})
// Since the task was just to design schemas I did not link my mongo database to it. Well the process will require I create a
// dotenv file which will contain my DB_URI link\
// then my index.jx or app.js will have the mongoose.connect command using that DB_URI