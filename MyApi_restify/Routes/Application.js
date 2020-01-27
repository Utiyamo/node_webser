var dao = require('../Config/Models/dao');
var application = require('../Config/Models/application');
var users = require('../Config/Models/user');

//GET Method with params
exports.getApplications = function(req, res){
    res.json(retorna_usuario(req));
}

//POST Method with body
exports.create_new_application = function(req, res){
    var APName = req.body.apName;
    var APPermission = req.body.apPermission;

    var obj = new application({
        name: APName,
        permissionLevel: APPermission
    });

    obj.save(function(err, objUser){
        if(err)
            throw err;
    });

    res.send("Message: 'Application created.'")
}

async function retorna_usuario(req){
    // var listUsers = new Array();

    const {permissionLevel} = await users.findOne({
        user: req.params.sUsername
    })

    
    return retorna_aplicacao(permissionLevel);


    // try{
    //     const listUsers = await users.find({
    //         user: req.params.sUsername
    //     }, (err, data) => {
    //         if(err)
    //             throw err;

    //         //console.log(JSON.parse(JSON.stringify(data)));
    //         var jsonUser =  JSON.parse(JSON.stringify(data));
    //         console.log(jsonUser);
    //         return retorna_aplicacao(jsonUser);
    //     });
    // }catch(err){
    //     throw err;
    // }
}

async function retorna_aplicacao(permission){

    const listParams = await application.find({
        permissionLevel: {$lt : permission}
    })

    console.log(JSON.parse(JSON.stringify(listParams)));

    return JSON.parse(JSON.stringify(listParams));
    // var listParams = new Array();

    // console.log(json);

    // try{
    //     listParams = application.find({permissionLevel: {$lte: json.permissionLevel}}, (err, data) => {
    //         if(err)
    //             throw err;

    //         return JSON.parse(JSON.stringify(data));
    //     });
    // }catch(err){
    //     throw err;
    // }
}