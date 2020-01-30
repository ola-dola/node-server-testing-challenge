const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json("The reports of my death have been greatly exaggerated");
})

module.exports = server;