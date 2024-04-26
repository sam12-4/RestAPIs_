const mongoose = require("mongoose")

uri = "mongodb+srv://sameerh64h:5Xl5sRPVlFG1YPbM@gofoodmern.l6edmlb.mongodb.net/?retryWrites=true&w=majority&appName=goFooDMern"

const connectToDB = () =>{
    return mongoose.connect(uri)
}

module.exports = connectToDB;