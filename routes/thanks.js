const express=require("express");

const router=express.Router()
const path=require("path")



router.get("/thanks",(req,res,next)=>{
  
    res.sendFile(path.join(__dirname,"../","views","thanks.html"))

})


module.exports=router