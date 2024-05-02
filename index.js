const express = require("express")
const mongoose  = require("mongoose")
const app = express();
app.use(express.json())
try {
    mongoose.connect("mongodb://localhost:27017/jsontry")
    console.log("connectd to db");
    
} catch (error) {
    console.log(error);
}

const userSchema = mongoose.Schema({
    name:String, 
    pass:String
})

const Usermodel = mongoose.model("users", userSchema)







app.get("/", (req , res)=>{
    res.send("This is home page")
})

app.post("/register", async(req , res)=>{
    const payload = req.body

    try {
        const user = new Usermodel(payload)
        await user.save();
        res.send("user added succefully")
        
    } catch (error) {
        res.send("Something went wrong")
    }
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
