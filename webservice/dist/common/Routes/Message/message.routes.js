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
var message_model_1 = require("./message.model");
var MessageRouter = /** @class */ (function (_super) {
    __extends(MessageRouter, _super);
    function MessageRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageRouter.prototype.applyRoutes = function (application) {
        application.get('/admin/message', function (req, res, next) {
            message_model_1.Message.find().then(function (message) {
                if (message)
                    res.json(message);
                else
                    res.send(404);
                return next();
            });
        });
        application.get('/admin/message/:id', function (req, res, next) {
            message_model_1.Message.findById().then(function (message) {
                if (message)
                    res.json(message);
                else
                    res.send(404);
                return next();
            });
        });
        application.post('/admin/message', function (req, res, next) {
            var message = new message_model_1.Message(req.body);
            message.save().then(function (message) {
                res.json(message);
                return next();
            });
        });
    };
    return MessageRouter;
}(routes_1.Router));
exports.messageRouter = new MessageRouter();
