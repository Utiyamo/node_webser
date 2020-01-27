var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    idProf: {
        type: String
    },
    idClass: {
        type: String
    },
    material: {
        type: BSON
    },
    title: {
        type: String,
        default: ('title' + _id)
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Material', materialSchema);