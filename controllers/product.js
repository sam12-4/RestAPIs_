const Product = require("../models/product");
const getallProducts= async (req, res)=>{
    const company = req.query;
    const queryObj = {}  
    if (company){
        console.log(company);
        queryObj.company ={ $regex :company["company"], $options : "i" }
        console.log(queryObj);
    }
    const data = await Product.find(queryObj); 
    res.status(200).json(data);
}
const getallProductsTesting= async (req, res)=>{
    const data = await Product.find({});
    res.status(200).json(data);
}

module.exports = {getallProducts, getallProductsTesting}