var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

mongoose = require('mongoose'),
Message = require('./models/msgModel'),
bodyParser = require('body-parser');
var routes = require('./routes/msgRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web', { useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded(
	{ extended: true 
}));
app.use(bodyParser.json());

app.use(routes);

app.listen(port);
console.log('Message RESTful API server started on: ' + port);
