import {Router} from '../../routes';
import * as restify from 'restify';
import {User} from './users.model';

class UserRouter extends Router{
    applyRoutes(application: restify.Server){
        application.get('/users', (req, res, next) => {
            User.find().then(user => {
                res.json(user);
                return next();
            })
        });
        application.post('/users/addUser', (req, res, next) => {
            let user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(user => {
                res.json(user);
                return next();
            })
        });

        application.put('/users/:id', (req, res, next) => {
            let options = {overwrite: true};
            User.update({_id: req.params.id}, req.body, options).exec().then(result => {
                if(result.n){
                    return User.findById(req.params.id)
                }
                else{
                    res.send(404);
                }
            }).then(user => {
                res.json(user);
                return next();
            });
        });
        
    };
}

export const userRouter = new UserRouter();