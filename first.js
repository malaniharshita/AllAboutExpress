const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in the Middleware');
    next(); //allow the request to countion to the next middleware in line
});

app.use((req,res,next) => {
    console.log('In another Middleware');
    res.send('{"name" : "harshita"}');
});

app.listen(3000);

// const http = require('http');

// const port=4000;
// const name = 'harshita'
// //const hostname = localhost;
// const server = http.createServer((req,res) => {
//     console.log(name);
//     res.end(name);
//     process.exit();
// });

// server.listen(port);
    





    