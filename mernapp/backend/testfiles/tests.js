const mongoose = require('mongoose');

module.exports = {
    testuser: {
        user_ID: mongoose.Types.ObjectId(),
        user_email: "newuser@email.com",
        hash: "hashpwd",
        fname: "Alan",
        lname: "Turing",
        phone: 7313141592,
        acc_type: "user",
        order_IDs: [
            "orderID1",
            "orderID2"
        ]
    },
    testproduct: {
        product_Name: "box of stuff",
        quantity: 100,
        description: "description of a box of stuff",
        unit_price: 200,
        sale_price: 300,
        category: "category of a box of stuff"
    },
    testorder: {
        user_ID: "user id here",
        date: Date.now(),
        product_IDs: [
            "productID1",
            "productID2"
        ],
        total: 50
    }
}