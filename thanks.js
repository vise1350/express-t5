const express=require("express");

const router=express.Router()
const path=require("path")

const productController=require("../controllers/products")



router.get("/thanks",productController.getThanks)


module.exports=router