const restify = require('restify');
const server = restify.createServer();

const mongoose = require('mongoose');
const uri = 'mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Web'

mongoose.connect(uri, function(err, res){
    if(err)
        throw err;
});


server.get('/', (req, res) => {
    res.send({
        message: "Hello World"
    })
}); 

server.get('/Messagem/:nome', (req, res) => {
    var name = 'Hello World, ' +  req.params.nome
    res.send({
        message: name
    });
});

server.listen(3000, () => {
    console.log("Servidor em pé");
})