const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: [true, "Need a title inorder to save the product!"],
        //minlength: [2, "Title needs to be at least 2 characters!"]
    },
    price: {
        type: Number,
        //required: [true, "Price needs a number inorder to save the product!"],
        //min: [0.01, "Needs to be more than 1 penny ($0.01)!"]
    },
    description: {
        type: String,
        //required: [true, "Need a description inorder to save the product!"],
        //minlength: [8, "Description needs to be at least 8 characters!"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
