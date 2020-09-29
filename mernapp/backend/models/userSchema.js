const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    user_ID: mongoose.ObjectId,
    user_email: String,
    hash: String,
    acc_type: String,
    order_IDs: [String]
});

module.exports = userSchema;