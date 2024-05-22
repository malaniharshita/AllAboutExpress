const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const path = require('path')
const app = express();
const expenseRouter = require('./router/expense');
const cors = require('cors');


app.set('views', path.join(__dirname, 'views'));

app.use(cors())
app.use(bodyParser.json());
app.use(expenseRouter);

sequelize
      .sync()
      .then(() => app.listen(5000), ()=> console.log('server running'))
      .catch(err => {
        console.log(err);
      })