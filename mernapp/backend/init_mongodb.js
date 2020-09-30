const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(URI, options);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

connection.on('error', (err) => {
    console.log('ERROR ' + err.message);
});

connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected');
});