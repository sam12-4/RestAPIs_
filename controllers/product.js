const getallProducts=(req, res)=>{
    res.status(200).json({msg : "Get all Products"});
}
const getallProductsTesting=(req, res)=>{
    res.status(200).json({msg : "Get all Products Testing"});
}

module.exports = {getallProducts, getallProductsTesting}