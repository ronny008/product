var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    pName:String,
    pQuantity:String,
    pPrice:Number,
    pBrand:String
    
    
})
const productModel = mongoose.model("product",productSchema);
module.exports= productModel;

