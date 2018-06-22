const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Create connection
const db = mysql.createConnection({
	host : 'localhost',
	user: 'root',
	password : '',
	database : 'ariscodatabase'
});

//Connect
db.connect((err) => {
	if(err){
		throw err;
	}
	console.log("mySQL connect");

});


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
 

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/endpoint', function(req, res){
	var dataReceived = req.body;
	console.log("received: " + dataReceived.patientId);
	console.log(dataReceived.Quest1);
	console.log(dataReceived.Quest3);
	res.send(req.body);
});

app.get('/questions', function(req, res){
	var infoToSend;
	var coisa = ["Rita", "Maria"];
	var received = false;
	console.log('GET received');
	db.query("SELECT * FROM questions", function(err, result, fields){
		if(err) throw err;
		infoToSend = result;
		console.log("Questions sended :)")
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(infoToSend));
	});
});

app.listen('3000', () => {
	console.log('Server started on port 3000');
});

