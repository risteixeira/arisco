http = require('http');
fs = require('fs');

server = http.createServer( function(req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});

    if (req.method == 'POST') {
        console.log("POST");
    }
    else
    {
        console.log("GET");
		console.log('GET received');
		res.end("Hello from from GEEET\n");
    }

});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);