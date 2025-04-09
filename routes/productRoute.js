var express = require(`express`);
var router = express.Router();
var productModel = require('../model/product');

router.post('/product',(req,res)=>{
    try {
        productModel(req.body).save();
        res.send("product added")
    } catch (error) {
        res.send(error)
    }
    })
    // get
    router.get('/product',async(req,res)=>{
            try {
                var data = await productModel.find();
                res.send(data)  
            } catch (error) {
                res.send(error)    
            }
        })
    router.get('/product/:id',async(req,res)=>{
            try {
                var data = await productModel.findById(req.params.id);
                res.send(data)  
            } catch (error) {
                res.send(error)    
            } 
        })
        // delete
    router.delete('/product/:id',async(req,res)=>{
            try {
               console.log(req.params.id)
               await productModel.findByIdAndDelete(req.params.id);
             res.send("data deleted")
        // res.send(id)
            } catch (error) {
             res.send(error)
         
            }
        })
    router.put('/product/:id',async(req,res)=>{
            try {
                await productModel.findByIdAndUpdate(req.params.id,req.body);
                res.send(" data edited")
            } catch (error) {
                res.send(error)
                
            }
        })

        

module.exports = router