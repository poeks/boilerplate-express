var express = require('express');
var app = express();

app.get('/', function(req, res) {
    // absolutePath = __dirname + relativePath/file.ext
    res.sendFile(__dirname + '/views/index.html')
})

module.exports = app;
