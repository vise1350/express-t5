const express=require("express");

const router=express.Router()
const path=require("path")
const productController=require("../controllers/products")



router.get("/",productController.getDefault)


module.exports=router