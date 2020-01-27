var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: true;
});		

app.use(bodyParser.json());

app.listen(port);

app.get('/', function(req, res){ 
	res.json({hello :'world'});
})	

console.log('Message RESTful API server started on: ' + port);
