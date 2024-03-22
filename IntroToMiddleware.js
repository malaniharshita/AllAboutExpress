const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next) => {
    console.log('This always runn');
    next();
})

app.use('/add-product',(req,res,next) => {
    //console.log('in the middleware');
    res.send('<form action = "/product" method = "POST">Name:<input type = "text" name = "title">Size:<input type = "text" name = "size"><button type = "submit">Add Product</button></form>');
})

app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next) => {
    //console.log('in another middleware');
    res.send('<h1>hello from express</h1>');
})

app.listen(4000);