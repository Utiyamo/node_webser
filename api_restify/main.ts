import * as restify from 'restify';
import { response } from 'spdy';

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
})

server.use(restify.plugins.queryParser());

server.get('/hello', function(req, res, next){
    res.json({
        message: 'hello world'
    })
    return next();
});

server.get('/info', [function(req, res, next){
    if(req.userAgent() && req.userAgent().includes('MSIE 7.0')){
        res.status(400);
        res.json({
            message: 'Please, update your browser'
        });

        let error: any = new Error();
        error.statusCode = 400;
        error.message = 'Please, update your browser';

        return next(error);
    }
    
    return next();
}, (req, res, next) =>{

    res.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.href(),
        path: req.path(),
        query: req.query
    })

    return next();
}])

server.listen(3000, () => {
    console.log("API is running in http://localhost:3000");
})