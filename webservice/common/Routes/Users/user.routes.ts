import {Router} from '../../routes';
import * as restify from 'restify';
import {User} from './users.model';

class UserRouter extends Router{
    applyRoutes(application: restify.Server){
        application.get('/admin/users', (req, res, next) => {
            User.find().then(user => {
                res.json(user);
                return next();
            })
        });
        application.post('/admin/users/addUser', (req, res, next) => {
            let user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save().then(user => {
                res.json(user);
                return next();
            })
        })
    };
}

export const userRouter = new UserRouter();