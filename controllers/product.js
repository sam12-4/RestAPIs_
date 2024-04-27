const Product = require("../models/product");
const getallProducts= async (req, res)=>{
    const data = await Product.find({});
    res.status(200).json({data});
}
const getallProductsTesting= async (req, res)=>{
    const data = await Product.find({});
    res.status(200).json({data});
}

module.exports = {getallProducts, getallProductsTesting}