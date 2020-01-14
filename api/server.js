const express = require('express')

const postsRouter = require('../postsRouter/postsRouter');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('If you see this, it is working!');
});

server.use('/api/posts', postsRouter);

module.exports = server;