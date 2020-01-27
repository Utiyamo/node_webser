var users = require('../models/usrModel');

class HmController{
    getApplications(req, res){
        const username = req.query.sUsername;

        try{
            const listusers = users.findOne({
                user: username
            }, (err, data) => {
                if(err)
                    res.send(err);

                if(data){
                    if(data.blocked == true)
                        res.send("Message: User are blocked by ADM");

                    res.json(data);
                }
                else
                    res.send("Message: User not found");
            })
        }
        catch(err){
            res.send(err);
        }
    }
    create_user(req, res){
        res.send(create_new_user(req));
    }
}

module.exports = new HmController();

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