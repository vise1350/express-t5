const express=require("express")

const app=express()

const bodyParser=require("body-parser")

const adminRoute=require("./routes/admin")

const shopRoute=require("./routes/shop")
const contactRoute=require("./routes/contact")
const thanksRoute=require("./routes/thanks")
const path=require("path")

app.use(bodyParser.urlencoded({extended:true}))

app.use(adminRoute)

app.use(shopRoute)

app.use(contactRoute)
app.use(thanksRoute)
app.use(express.static(path.join(__dirname,"public")))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})





app.listen(3000)
console.log("server is running successfully")
    