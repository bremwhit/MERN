const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const userSchema = new Schema ({
    user_email: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    fname: String,
    lname: String,
    phone: {type: Number, unique: true},
    acc_type: String,
    order_IDs: [String]
});

module.exports = userSchema;0