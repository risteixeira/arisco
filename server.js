var http = require('http');
const express = require('express');

var port = process.env.PORT || 8080;
const app = express();


app.listen(port, () => {
	console.log('Server started on port 3000');
});

console.log("Server running on port " + port);
