const path=require("path")
const rootDir=require("../util/path")

const Product=require("../models/product")
exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-product.html"))
}

exports.postProducts=(req,res,next)=>{
    const product=new Product(req.body.title)
    product.save()
    console.log(req.body);
    res.redirect("/")
}

exports.getDefault=(req,res,next)=>{
    const products=Product.fetchAll()
  
    res.sendFile(path.join(__dirname,"../","views","shop.html"))

}

exports.getContacts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.html"))
}

exports.postContacts=(req,res,next)=>{

    console.log(req.body);
    res.redirect("/thanks")
    
}
exports.getThanks=(req,res,next)=>{
  
    res.sendFile(path.join(__dirname,"../","views","thanks.html"))

}