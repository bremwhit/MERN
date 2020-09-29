const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const userSchema = require('./models/userSchema');

require('./init_mongodb');

const user = mongoose.model('user', userSchema, 'users');

const newUser = new user({
    user_ID: mongoose.Types.ObjectId(),
    user_email: "newUser@email.com",
    hash: "randomPWhash",
    acc_type: "User",
    order_IDs: [
        "id1",
        "id2",
        "id3"
    ]
})

newUser.save((err, newUser) => {
    if(err) return console.log(err);
    console.log(newUser.user_email + " has been added...hopefully");
})

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
