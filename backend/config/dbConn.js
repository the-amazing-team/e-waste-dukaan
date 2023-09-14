const mongoose = require("mongoose");

const uri = "mongodb+srv://paurush:puru2905@cluster0.ooqhymm.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser : true ,
            useUnifiedTopology  : true
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;