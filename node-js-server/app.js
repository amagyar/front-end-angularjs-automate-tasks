var app = require('./config/express')();
var http = require('http').Server(app);

var port = process.env.port || 8090;

http.listen(port, function() {
    console.log("Servidor rodando");
});