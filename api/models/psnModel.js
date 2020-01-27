var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String
    },
    cpf: {
        type: String
    },
    birthday_date: {
        type: Date
    },
    localization: {
        rua: {
            type: String
        },
        numero: {
            type: String
        },
        complemento: {
            type: String
        },
        bairro: {
            type: String
        },
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
        pais: {
            type: String
        },
        cep: {
            type: String
        }
    },
    cargo: {
        type: String,
        default: "Visitante"
    }
})

module.exports = mongoose.model('Person', personSchema);