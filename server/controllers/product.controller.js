const Product = require("../models/product.model");

module.exports = {
    findAllProducts: (req, res) => {
        //console.log(`findAllProducts in data: ${req.body}`);
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },
    findOneProduct: (req, res) => {
        //console.log(`findOneProduct in data: ${req.body}`);
        Product.find({_id: req.params.id})
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },
    createProduct: (req, res) => {
        //console.log(`createProduct in data: ${req.body}`);
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },
};
