var dao = require('./dao');
var mongoose = dao.mongodb;

var applicationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    permissionLevel: {
        type: Number,
        default: 0
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Application', applicationSchema);