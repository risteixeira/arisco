http = require('http');
fs = require('fs');
port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
process.env.BABEL_DISABLE_CACHE = 1;


const express = require('express');
const favicon = require('express-favicon');
 
const app = express();
 
//app.use(favicon(__dirname + '/public/favicon.png'));
 
// Add your routes here, etc.
 
const server = app.listen(port, function(){
    console.log('server is running at %s .', server.address().port);
});

app.get('/', function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
 	res.end("Hello from OpenShift\n");
});