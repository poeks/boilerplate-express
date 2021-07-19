require('dotenv').config();
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use(function logger(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
    }
)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res) {
    let message = 'Hello json';
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase();
    }
    res.send({'message': message})
})

module.exports = app;
