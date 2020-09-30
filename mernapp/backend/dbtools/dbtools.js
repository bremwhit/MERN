
module.exports = {
    createNewUser: function(model, modelBody) {
        model.create(modelBody, function(err, newUser) {
            if (err) console.log(err);
            console.log("new user, " + newUser.user_email + " added to database!");
        })
    },
    addNewProduct: function(model, modelBody) {
        model.create(modelBody, function(err, newProduct) {
            if (err) console.log(err);
            console.log(newProduct.product_Name + " added to database!");
        })
    },
    addNewOrder: function(model, modelBody) {
        model.create(modelBody, function(err, newOrder) {
            if (err) console.log(err);
            console.log(newOrder.order_ID + " added to database!");
        })
    }
}


