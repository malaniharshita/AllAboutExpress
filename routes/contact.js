const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/contact',(req,res,next) => {
    console.log('in the middleware');
    //res.sendFile(path.join(__dirname, '../', 'views' , 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views' , 'contact.html'));
})

router.post('/success',(req,res,next) => {
    //console.log(req.body);
    //res.redirect('/sucess');
    res.sendFile(path.join(rootDir, 'views' , 'msgForm.html'));
})

module.exports = router;