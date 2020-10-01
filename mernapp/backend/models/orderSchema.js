const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const orderSchema = new Schema ({
    user_ID: String,
    date: Date,
    product_IDs: [String],
    total: Number
});

module.exports = orderSchema;