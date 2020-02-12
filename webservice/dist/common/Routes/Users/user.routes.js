"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var routes_1 = require("../../routes");
var users_model_1 = require("./users.model");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRouter.prototype.applyRoutes = function (application) {
        application.get('/admin/users', function (req, res, next) {
            users_model_1.User.find().then(function (user) {
                res.json(user);
                return next();
            });
        });
        application.post('/admin/users/addUser', function (req, res, next) {
            var user = new users_model_1.User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.save().then(function (user) {
                res.json(user);
                return next();
            });
        });
    };
    ;
    return UserRouter;
}(routes_1.Router));
exports.userRouter = new UserRouter();
