const mongoose = require('mongoose');
const uri = 'mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web'

mongoose.connect(uri, function(err, res){
    if(err)
        throw err;
});

exports.mongodb = mongoose;

exports.auth = function(request, result, callback){
    mongoose.connect(uri, err => {
        if(err){
            console.error(err);
            callback(1, 0);
        }
        console.log('connected as id auth');
        callback(0, 1);
    });
}