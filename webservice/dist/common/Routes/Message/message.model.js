"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    message: {
        type: String,
        select: false
    },
    date_created: {
        type: Date,
        "default": Date.now
    }
});
exports.Message = mongoose.model('Message', messageSchema);
