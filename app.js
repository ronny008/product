var express = require(`express`);
var userRoutes = require('./routes/userRouters')
var productRoutes = require('./routes/productRoute')
var dotenv = require('dotenv')
 var app = express();
dotenv.config();
require("./db")
var port=process.env.port;
 app.use(express.json());
app.use('/api',userRoutes)
app.use('/pro',productRoutes)



 app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
    
})
