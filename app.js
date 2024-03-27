const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);

//or we can use like-
//app.use(shopRoutes);
//app.use(adminRoutes);
//sequence doesnt effect our programming here but being a good developer you should always care about what are the sequences are

// app.use((req,res,next) => {
//     res.status(404).send('<h1>page not found</h1>')
// })

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
})


app.listen(4000);