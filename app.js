const express = require("express")
const app = express()
const connectToDB = require("./db/connect")

const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=>{
    console.log("Listening to port", PORT);
    res.send("Listening to / endpoint")
})

const product_routes = require("./routes/product")

// middleware or set router
app.use("/api/products", product_routes)

const start = async ()=>{
    try{
        await connectToDB().then(()=>{
            console.log("connected");
        });
        app.listen(PORT, ()=>{
        console.log(`connected to port ${PORT}`)
    })}
    catch(err){
        console.log(err);
    }
}

start()