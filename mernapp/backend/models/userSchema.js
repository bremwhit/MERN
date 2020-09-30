const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const userSchema = new Schema ({
    user_ID: {type: mongoose.ObjectId, unique: true},
    user_email: {type: String, unique: true},
    hash: String,
    acc_type: String,
    order_IDs: [{type: String, unique: true}]
});

module.exports = userSchema;