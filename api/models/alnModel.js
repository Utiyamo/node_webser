var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alunoSchema = new Schema({
    name: {
        type: String
    },
    idPerson: {
        type: String
    },
    idProf: {
        type: String
    }
})

module.exports = mongoose.model('Student', alunoSchema);