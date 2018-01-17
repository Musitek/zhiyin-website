process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// dependencies
var port            = 80;
var http            = require('http');
var express         = require('express');
var bodyParser      = require('body-parser');
var app             = express();
var server          = http.createServer(app);

// start server when ready
server.listen(port, function(){
    console.log('> NODE_ENV:', process.env.NODE_ENV);
    console.log('Server started on port', port);
});