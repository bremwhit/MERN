const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('useCreateIndex', true);

const productSchema = new Schema ({
    product_Name: String,
    quantity: Number,
    description: String,
    unit_price: Number,
    sale_price: Number,
    category: String
});

module.exports = productSchema;