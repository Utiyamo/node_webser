'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var msgSchema = new Schema({
	title: {
		type: String
	},
	body: {
		type: String
	},
	created_data: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Messages', msgSchema);


