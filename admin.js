const express=require("express");

const router= express.Router();
const path=require("path")
const productController=require("../controllers/products")


router.get("/add-product",productController.getProducts)
router.post("/add-product",productController.postProducts)
module.exports=router

