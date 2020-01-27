var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    rating: {
        type: Number
    },
    releaseYear:{
        type: Number
    }
});

module.exports = mongoose.model('Movie', movieSchema);