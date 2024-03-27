const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) => {
    //console.log('in the middleware');
    res.send('<form action = "/add-product" method = "POST">Name:<input type = "text" name = "title">Size:<input type = "text" name = "size"><button type = "submit">Add Product</button></form>');
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;