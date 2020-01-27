var restify = require('restify');
var config = require('./Config/config');
const restifyPlugins = require('restify-plugins');
var route_link = require('./Routes/route_index');
var restifyErr = require('restify-errors');

const server = restify.createServer({
    name: config.name,
    version: config.version
});

server.use(restifyPlugins.jsonBodyParser({
    mapParams: true
}));
server.use(restifyPlugins.queryParser({
    mapParams: true
}));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.fullResponse());

route_link(server);

server.listen(config.port, err => {
    if(err)
        console.error(err);

    console.log('%s listening at %s', server.name, config.base_url);
});