const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const userSchema = new Schema ({
    user_email: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    acc_type: String,
    order_IDs: [{type: String, unique: true}]
});

module.exports = userSchema;