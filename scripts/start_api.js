"use strict";

const Server = require("../src/classes/server");

function start() {
    const server = new Server();
    server.startServer();
}

start();