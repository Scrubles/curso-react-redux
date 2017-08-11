'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');

const port = 3000;

const server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors);
server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;