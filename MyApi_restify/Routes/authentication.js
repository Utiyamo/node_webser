var mHome = require('./home');
var mWelcome = require('./welcome');
var dao = require('../Config/Models/dao');

var init = function(request, result, next){
    dao.auth(request, result, function(err, rows, fields){
        if(err){
            result.send("Welcome Page here");
        }
        else{
            result.send("Home Page here");
        }
    })
};

module.exports = init;