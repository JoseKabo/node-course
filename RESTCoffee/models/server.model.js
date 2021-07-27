const express = require('express');
const cors = require('cors');
const { dbCnn } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // connection
        this.dbConnection();

        // middlewares
        this.middlewares();

        this.routes();
    }

    get customCors() {
        var whitelist = ['http://localhost:4000', 'http://example2.com']
        return {
            origin: function(origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                    console.log(origin);
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }
    }

    async dbConnection() {
        await dbCnn();
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listenerServer() {
        this.app.listen(this.port, () => {
            console.log('RESTServer by josekabo listening in ', this.port);
        });
    }

    middlewares() {
        this.app.unsubscribe(cors(this.customCors));
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

}

module.exports = Server;