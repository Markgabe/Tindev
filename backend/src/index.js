require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;

    socket.on('disconnect', () => {
        delete connectedUsers[user]
        console.log("disconnected", socket.id);
    });
});

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});
app.use(router);


http.listen(3333);