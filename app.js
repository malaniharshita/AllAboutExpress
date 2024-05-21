const express = require('express');
const path = require('path');
var cons = require('consolidate');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const sequelize = require('./util/database');
var cors = require('cors');
const app = express();

app.use(cors());
//app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');


app.use(bodyParser.json());
app.use(userRoutes);

sequelize
      .sync()
      .then(() => app.listen(5000), ()=> console.log('server running'))
      .catch(err => {
        console.log(err);
      })