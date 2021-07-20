require('dotenv').config();
var express = require('express');
var app = express();

app.use(express.urlencoded(extended=false));

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

function addTime(req, res, next) {
    req.time = new Date().toString();
    next();
}


app.get('/now', addTime, function(req, res) {
    res.send({'time': req.time})
})


app.get('/:word/echo', function(req, res) {
    res.send({'echo': req.params.word});
})

app.get('/name', function(req, res) {
    const {first, last} = req.query;
    res.send({'name': `${first} ${last}`});
})

module.exports = app;
