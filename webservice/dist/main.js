"use strict";
exports.__esModule = true;
var server_1 = require("./server/server");
var user_routes_1 = require("./common/Routes/Users/user.routes");
var message_routes_1 = require("./common/Routes/Message/message.routes");
var server = new server_1.Server();
server.bootstrap([user_routes_1.userRouter, message_routes_1.messageRouter]).then(function (server) {
    console.log('Server is listining on: http://localhot:3001');
})["catch"](function (error) {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
