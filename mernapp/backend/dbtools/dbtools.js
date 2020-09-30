
findOneAndUpdate_options = {
    upsert: true,
    new: true
}

module.exports = {
    /*create new user given Object*/
    // model: mongoose model that has been initialized in server code
    // modelBody: Object containing user data
    createNewUser: function(model, modelBody) {
        model.create(modelBody, function(err, newUser) {
            if (err) return console.log(err.message);
            console.log("new user, " + newUser.user_email + " added to database!");
        })
    },
    /*create new product given Object*/
    // model: mongoose model that has been initialized in server code
    // modelBody: Object containing product data
    addNewProduct: function(model, modelBody) {
        model.create(modelBody, function(err, newProduct) {
            if (err) return console.log(err.message);
            console.log(newProduct.product_Name + " added to database!");
        })
    },
    /*create new order given Object*/
    // model: mongoose model that has been initialized in server code
    // modelBody: Object containing order data
    addNewOrder: function(model, modelBody) {
        model.create(modelBody, function(err, newOrder) {
            if (err) return console.log(err.message);
            console.log(newOrder.order_ID + " added to database!");
        })
    },
    /*add new order_ID to user document */
    // mode: mongoose model that has been initialized in server code
    // user_ID: the user_ID of the document in MongoDB to be updated
    // order_ID: the order ID to add to array of IDs
    add_Order_to_User: function(model, user_ID, order_ID) {
        model.findOneAndUpdate({user_ID: user_ID}, {$push: { order_IDs: order_ID }}, function(err, res) {
            if (err) return console.log(err.message);
            console.log(res);
        });
    }
}


