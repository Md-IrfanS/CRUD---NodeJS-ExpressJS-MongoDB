const ProductModel = require('../models/product.model');

const postProducts = async (req, res) => {
    try{
        const newProduct = new ProductModel(req.body);
        const data = await newProduct.save()
        console.log(data,'new data')
        res.status(201).json(newProduct);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const getProducts = async (req, res) => {
    try{
        res.send('List of products');
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    postProducts,
    getProducts,
}

