const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');

const server = express();

mongoose.connect('mongodb+srv://psousa:P@ssw0rd@cluster0-8qtex.mongodb.net/omnistack?retryWrites=true&w=majority',
    { 
        useNewUrlParser: true
    });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);