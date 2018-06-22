const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
 



app.listen('3000', () => {
	console.log('Server started on port 3000');
});

