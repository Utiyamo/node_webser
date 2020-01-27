const person = require('../models/psnModel');
const users = require('../models/usrModel');
const application = require('../models/appModel');

class cadastroController{
    async cadastroPerson(req, res){
        let novaPerson = new person(req.body);
        await novaPerson.save((err) => {
            if(err)
                throw err;
        });
        res.send("Message: Person created.");
    }
    async cadastroUser(req, res){
        let novoUser = new users(req.body);
        await novoUser.save(err => {
            if(err)
                throw err;
        });
        res.send("Message: User created.");
    }
    async cadastroApplication(req, res){
        let novaApplication = new application(req.body);
        await novaApplication.save(err => {
            if(err)
                throw err;
        });
    }
}

module.exports = new cadastroController();