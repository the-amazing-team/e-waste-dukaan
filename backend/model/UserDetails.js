const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required :true
    }
})

module.exports =  mongoose.model("UserDetails", userDetailsSchema)