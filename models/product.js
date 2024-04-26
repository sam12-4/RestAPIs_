const mongoose = require("mongoose")

const productSchema =  new mongoose.Schema({
    name: { type : String , required : true },
    price: { type : Number , required : true },
    feature : {type : Boolean, default: false},
    rating : {type:  Number, default : 1.0},
    createdAt : {type: Date, default:Date.now()},
    company : {
        enum : {
            value: ["apple", "samsung","huawei"],
            message: "{VALUE} is not supported"
        }
    }
})

module.exports = mongoose.Model('Product',productSchema) ;
