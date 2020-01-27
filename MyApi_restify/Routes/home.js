var dao = require('../Config/Models/dao');
var users = require('../Config/Models/user');
var mongoose = dao.mongodb;

//GET Method with params
exports.getApplications = function(req, res){
    var listUsers = new Array();
    try{
        listUsers = users.find({
            user: req.params.sUsername
        }, (err, data) => {
            if(err)
                res.send(err);

            if(data.blocked){
                if(data.blocked != false)
                    res.send("Message: User are blocked by Adm");
            }    

            res.json(data);
        });
    }catch(err){
        res.send(err);
    }
}
//POST Method with body
exports.create_User = function(req, res){
    res.send(create_new_user(req));
}

//PRIVATE METHODS
function create_new_user(req){
    var username = req.body.sUsuario;
    var password = req.body.sPassowrd;
    var idPerson = req.body.sIdPerson;

    var objUser = new users({
        user: username,
        pwd: password,
        id_person: idPerson
    });

    objUser.save(function(err, objUser){
        if(err)
            throw err;
    });

    return 'Message: "User created."';
}