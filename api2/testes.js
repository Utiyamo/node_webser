const mongoose = require('mongoose');
const password = "a1b2c3d4e5"
const user = "DanielUtiyama"
const uri = 'mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web'

mongoose.connect(uri, function(err, res){
    if(err)
        throw err;
});

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

var Movie = mongoose.model('Movie', movieSchema);

var thor = new Movie({
    title: 'Thor',  
    rating: 75,
    releaseYear: 2011
});

thor.save(err =>{
    if(err)
        return console.error(err);

    console.dir(thor);
})