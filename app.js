const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next) => {
    fs.readFile('username.txt',(err, data)=>{
        if(err){
            console.log(err);
            data = 'no chat exist'
        }
        res.send(
            `${data}<form action = "/" method = "POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input type = "text" placeholder = "message" id = "message" name = "message">
                <input type = "hidden" name = "username" id = "username">
                <button type = "submit">Send</button>
            </form>`
        )
    })
})
    
app.post('/',(req,res,next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt", ` ${req.body.username}:  ${req.body.message}`, {flag:'a'},(err) => {
        err ? console.log(err) : res.redirect('/');
    })

})

app.get('/login', (req,res,next) => {
    res.send(
        `<form  onsubmit = "localStorage.setItem('username',document.getElementById('username').value)" action = "/">
        <input type = "text name = "username" id = "username">
        <button type = submit>login</button>
        </form>`
    )
})
//you can also apply router functionality here try it.
app.listen(4000);