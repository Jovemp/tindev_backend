const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Nova conexao', socket.id);
})

mongoose.connect('mongodb+srv://psousa:P@ssw0rd@cluster0-8qtex.mongodb.net/omnistack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    });

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);