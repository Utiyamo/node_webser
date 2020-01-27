var application = require('../models/appModel');
var users = require('../models/usrModel');


class appController{
    async getApplications(req, res){
        var a = await retorna_usuario(req);
        
        console.log(a);
        res.json(a);
    }
    async create_new_application(req, res){
        const APName = req.body.name;
        const ApPermission = req.body.permissionLevel;

        var obj = new application({
            name: APName,
            permissionLevel: ApPermission
        });

        await obj.save((err) => {
            if(err)
                throw err;
        });

        res.send("Message: Application created");
    }
    
}

module.exports = new appController();

async function retorna_usuario(req){
    // var listUsers = new Array();

    const {permissionLevel} = await users.findOne({
        user: req.query.sUsername
    })

    return retorna_aplicacao(permissionLevel);
}
async function retorna_aplicacao(permission){

    const listParams = await application.find({
        permissionLevel: {$lt : permission}
    })

    console.log(`permsisao: ${permission} : listParams: ${listParams}`);

    return listParams;
}

