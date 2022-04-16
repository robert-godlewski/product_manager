const Product = require("../models/product.model");

module.exports = {
    findAllProducts: (req, res) => {
        console.log(`findAllProducts in data: ${req.body}`);
        Product.find()
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log(`findAllProducts failed: ${err}`);
                res.json({
                    message: "Something went wrong in findAllProducts", 
                    error: err
                });
            });
    },
    findOneProduct: (req, res) => {
        console.log(`findOneProduct in data: ${req.body}`);
        Product.find({_id: req.params.id})
            .then((oneProduct) => {
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => {
                console.log(`findOneProduct failed: ${err}`);
                res.json({
                    message: "Something went wrong in findOneProduct", 
                    error: err
                });
            });
    },
    createProduct: (req, res) => {
        console.log(`createProduct in data: ${req.body}`);
        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log(`createProduct failed: ${err}`);
                /* 400 status means that the client is talking 
                to the server but not giving in good data. 
                Returns all of the validation errors.*/
                res.status(400).json(err);
            });
    },
};
