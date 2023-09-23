const path=require("path")
const rootDir=require("../util/path")

exports.getProducts=(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","add-product.html"))
}

exports.postProducts=(req,res,next)=>{

    console.log(req.body);
    res.redirect("/")
}

exports.getDefault=(req,res,next)=>{
  
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