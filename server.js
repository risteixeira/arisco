http = require('http');
fs = require('fs');
port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var datahost = process.env.OPENSHIFT__DB_HOST ;
process.env.BABEL_DISABLE_CACHE = 1;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.OPENSHIFT_MYSQL_DB_HOST,
  user: 'userQAX',
  password: 'dFlglsN0cPaAiTji',
  database: 'sampledb',
  port: process.env.OPENSHIFT_MYSQL_DB_PORT
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



const express = require('express');
const favicon = require('express-favicon');
 
const app = express();
app.use('/favicon.ico', express.static('images/favicon.ico'));
 
// Add your routes here, etc.
 
const server = app.listen(port, function(){
    console.log('server is running at %s .', server.address().port);
});

app.get('/', function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
 	res.end("Hello from OpenShift\n");
});

app.get('/rita', function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
 	res.end("Ola eu sou a Rita yey miga\n");
});
