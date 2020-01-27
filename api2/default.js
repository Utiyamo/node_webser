const express = require('express');
app = express();
port = process.env.PORT || 3000;

const mongoose = require('mongoose');
//const password = "a1b2c3d4e5"
//const user = "DanielUtiyama"
const uri = 'mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web'

mongoose.connect(uri, function(err, res){
    if(err)
        throw err;
});

const routes = require('./routes/routes');
routes(app);

app.listen(port);
app.get('/', function(req, res) {
    res.json({hello: 'World'});
});

console.log('RESTful API Server started on http://localhost:' + port);
