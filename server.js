var express = require('express');
var app = express();
var http = require('http');

// setup ports
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello from OpenShift\n");
}).listen(port);
