var User = require('../Config/Models/user');
var dao = require('../Config/Models/dao');

module.exports = function(server){
    var mInitAuth = require('./authentication');
    var mHome = require('./home');
    var mApplication = require('./Application');
    
    //Authentication call
    server.get('/', (req, res, err) => {
        res.send('inital page here');
    });
    server.post('/', mInitAuth);

    //Home call
    server.post('/Home/Create_User', mHome.create_User);
    server.get('/Home', mHome.getApplications);

    //Application call
    server.get('/Home/Application', mApplication.getApplications);
    server.post('/Home/Application/Create_Application', mApplication.create_new_application);
}