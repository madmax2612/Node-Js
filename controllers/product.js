const Product =require('../Models/index');


// exports.test=(req,res)=>{
// res.send("Hello Here I am")
// }

exports.product_create=(req,res)=>{
let product= new Product(
    {
    name: req.body.name,
    price: req.body.price,
}
);
product.save(function (err) {
    if (err) {
        return next(err);
    }
    res.send('Product Created successfully')
})
}

exports.product_Details=(req,res)=>{
Product.findById(req.params.id,(err,product)=>{
if(err)
return next(err)
else
res.send(product);
})

}
exports.product_Update=(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},(err,product)=>{
        if(err)
        return next(err)
        else
        res.send("product Updated")
    })
}

exports.product_Delete=(req,res)=>{
    Product.findByIdAndDelete(req.params.id,{$set:req.body},(err,product)=>{
        if(err)
        return next (err)
        else
        res.send("product Deleted Successfully")

    })
}