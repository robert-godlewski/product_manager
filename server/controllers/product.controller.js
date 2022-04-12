const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    console.log(`findAllProducts in data: ${req.body}`);
    Product.find({})
        .then((allProducts) => {
            res.json({product: allProducts})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.findOneProduct = (req, res) => {
    console.log(`findOneProduct in data: ${req.body}`);
    Product.find({_id: req.params.id})
        .then((oneProduct) => {
            res.json({product: oneProduct})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}

module.exports.createProduct = (req, res) => {
    console.log(`createProduct in data: ${req.body}`);
    Product.create(req.body)
        .then(newProduct => {
            res.json({product: newProduct})
        })
        .catch((err) => {
            res.json({message: "Something went wrong", error: err})
        });
}
