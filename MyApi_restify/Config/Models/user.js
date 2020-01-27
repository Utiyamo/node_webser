var dao = require('./dao');
var mongoose = dao.mongodb;

var userSchema = new mongoose.Schema({
    user: {
        type: String
    },
    pwd: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    blocked: {
        type: Boolean,
        default: false
    },
    permissionLevel: {
        type: Number,
        default: 0
    },
    id_person: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);