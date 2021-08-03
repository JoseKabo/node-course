const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        // middlewares
        this.middlewares();

        // this.routes();

        // sockets
        this.sockets();
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


    routes() {
        // this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listenerServer() {
        this.server.listen(this.port, () => {
            console.log('SocketServer by josekabo listening in ', this.port);
        });
    }

    middlewares() {
        // this.app.unsubscribe(cors(this.customCors));
        this.app.use(express.static('public'));
    }

    sockets() {
        this.io.on('connection', socket => {
            console.log('client connected', socket.id);
        });
    }

}

module.exports = Server;