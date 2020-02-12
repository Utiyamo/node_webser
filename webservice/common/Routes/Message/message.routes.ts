import {Router} from '../../routes';
import {Message} from './message.model';
import * as restify from 'restify';

class MessageRouter extends Router{
    applyRoutes(application: restify.Server){
        application.get('/admin/message', (req, res, next) => {
            Message.find().then(message => {
                if(message)
                    res.json(message);
                else
                    res.send(404);

                return next();
            });
        });

        application.get('/admin/message/:id', (req, res, next) => {
            Message.findById().then(message => {
                if(message)
                    res.json(message);
                else
                    res.send(404);

                return next();
            });
        });

        application.post('/admin/message', (req, res, next) => {
            let message = new Message(req.body);

            message.save().then(message => {
                res.json(message);
                return next();
            });
        })
    }
}

export const messageRouter = new MessageRouter();