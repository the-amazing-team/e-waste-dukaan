const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDB = require("./config/dbConn");

const app = express();
const PORT =  process.env.PORT || 3500

connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req ,res) => {
    res.send("hello world !");
})

app.use('/register', require('./routes/register'));
app.use('/signin', require('./routes/signin'));

const db = mongoose.connection;

db.once('open', () => {
    console.log("MongoDB database connection established successfully");
    app.listen(PORT, () => console.log(`app running on port ${PORT}`));
})