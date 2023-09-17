const express=require("express")



const app=express()

app.use((req,res,next)=>{
    console.log("Middleware added")
    next();

})
app.use((req,res,next)=>{
    console.log("Another Middleware added")
    // res.send({key1:value})
    res.send("<h1>Hello from expressJS </h1>")

})
app.listen(3000)
   