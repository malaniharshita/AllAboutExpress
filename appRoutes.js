const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoutes);
app.use(shopRoutes);

//or we can use like-
//app.use(shopRoutes);
//app.use(adminRoutes);
//sequence doesnt effect our programming here but being a good developer you should always care about what are the sequences are

app.listen(4000);