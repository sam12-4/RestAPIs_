require("dotenv").config()
const connectToDB = require("./db/connect")
const Product = require("./models/product")
const ProductJson = require("./products.json")

connectToDB(process.env.MONGODB_URL)
    .then(() => {
        try {
            Product.create(ProductJson)
            console.log("connected");
            
        } catch (error) {
            console.log(error);
        }  
    })
 
