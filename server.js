var express = require('express');
var app = express();
var http = require('http');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080); //testing
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'); //testing

 
// server listens in on port
http.createServer(app).listen(app.get('port'), app.get('ip'), function(){ //testing
  console.log('Express server listening on port ' + app.get('port'));
});


app.get('/tryme', function(req, res) {

	res.end('Hello YouTube!');

});