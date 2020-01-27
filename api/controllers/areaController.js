const user = require('../models/usrModel')
const person = require('../models/psnModel')

class areaController{
    async criarClasse(req, res){
        let professor = person.findOne({
            _id: req.query.idPerson
        });
        
        if(professor.cargo == "Professor"){
            
        }
        else
            res.send("Message: User don't have permission.");
    }
}