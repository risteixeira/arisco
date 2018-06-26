http = require('http');
fs = require('fs');
port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var hostBD = process.env.OPENSHIFT_MYSQL_DB_HOST;
var portBD = process.env.OPENSHIFT_MYSQL_DB_PORT;
process.env.BABEL_DISABLE_CACHE = 1;

var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'mysql-qqqd.a3c1.starter-us-west-1.openshiftapps.com/',
  port     : '3306',
  user: 'aaaaa',
  password: 'aaaa',
  database: 'sampledb'
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
    console.log("host do openshift bd -> " + hostBD);
    console.log("port do opensfhift bd -> " + portBD);
});

app.get('/', function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
 	res.end("Hello from OpenShift\n");
});

app.get('/rita', function(req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
 	res.end("Ola eu sou a Rita yey miga\n");
});
