"use strict";
exports.__esModule = true;
var restify = require("restify");
var mongoose = require("mongoose");
var enviroment_1 = require("../common/enviroment");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initializeDb = function () {
        return mongoose.connect(enviroment_1.enviroment.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    };
    Server.prototype.initRoutes = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.application = restify.createServer({
                    name: 'My Api',
                    version: '1.0.0'
                });
                _this.application.use(restify.plugins.queryParser());
                _this.application.use(restify.plugins.bodyParser());
                //Routes
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.applyRoutes(_this.application);
                }
                _this.application.listen(enviroment_1.enviroment.server.port, function () {
                    resolve(_this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    ;
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initializeDb().then(function () {
            _this.initRoutes(routers).then(function () { return _this; });
        });
    };
    return Server;
}());
exports.Server = Server;
