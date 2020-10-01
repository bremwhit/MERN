const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dbtools = require('./dbtools/dbtools');
const userSchema = require('./models/userSchema');
const orderSchema = require('./models/orderSchema');
const productSchema = require('./models/productSchema');
const user = mongoose.model('user', userSchema, 'users');
const product = mongoose.model('product', productSchema, 'products');
const order = mongoose.model('order', orderSchema, 'orders');
const tests = require('./testfiles/tests');
require('./init_mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, '../frontend/build')));
// temporary page for testing
app.use(express.static(path.join(__dirname, './testfiles')));

/* start server */
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});