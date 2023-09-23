const express=require("express");
const rootDir=require("../util/path")
const router=express.Router()
const path=require("path")
const productController=require("../controllers/products")
router.get("/contact",productController.getContacts)
router.post("/contact",productController.postContacts)



module.exports=router