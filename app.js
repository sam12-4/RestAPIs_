const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000;


app.get("/", (req, res)=>{
    console.log("Listening to port", PORT);
    res.send("Listening to / endpoint")
})


const start=()=>{
    try{app.listen(PORT, ()=>{
        console.log(`connected to port ${PORT}`)
    })}
    catch(err){
        console.log(err);
    }
}

start()