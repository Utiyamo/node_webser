var mongoose = require('mongoose');

var Movie = require('../models/Movie');
exports.list_all_movies = function(req, res){
    Movie.find({}, function(err, msg) {
        if(err)
            res.send(err);

        res.json(msg);
    });
};

exports.create_a_movie = function(req, res){
    var new_mve = new Movie(req.body);

    new_mve.save(function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
};

exports.find_a_movie = function(req, res){
    Movie.findById(req.params.mveId, function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
};

exports.update_a_movie = function(req, res){
    Movie.findOneAndUpdate(req.params.mveId, req.body, {new: true}, function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
};

exports.remove_a_movie = function(req, res){
    Movie.findByIdAndRemove(req.params.mveId, function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    });
    /*
    Movie.remove({
        _id: req.params.mveId
    }, function(err, msg){
        if(err)
            res.send(err);

        res.json(msg);
    })
    */
};  