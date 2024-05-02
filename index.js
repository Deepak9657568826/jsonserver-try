const express = require("express")

const app = express();


app.get("/", (req , res)=>{
    res.send("This is home page")
})

app.post("/login", (req , res)=>{
    res.send("This is login page")
})


app.get("/about", (req , res)=>{
    res.send("This is about page")
})


app.get("/conactus", (req , res)=>{
    res.send("This is contact page")
})


app.listen(1234, ()=>{
    console.log("Server is running at port 1234");

})
