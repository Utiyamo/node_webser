"use strict";
exports.__esModule = true;
exports.enviroment = {
    server: {
        port: process.env.SERVER_PORT || 3001
    },
    db: {
        url: process.env.DB_URL || 'mongodb+srv://DanielUtiyama:a1b2c3d4e5@dcclustersp-exlfo.gcp.mongodb.net/Portfolio'
    }
};
