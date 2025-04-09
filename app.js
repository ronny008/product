var express = require(`express`);
require('./db')
var userRoutes = require('./routes/userRouters')
var productRoutes = require('./routes/productRoute')
 var app = express();

 app.use(express.json());
 var port = 4000;
 
app.use('/api',userRoutes)
app.use('/pro',productRoutes)

// hdfrudkthdr

 app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
    
})
