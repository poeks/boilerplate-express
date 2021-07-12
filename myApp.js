var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(req);
    console.log(res);
    res.send('Response String');
})

module.exports = app;
