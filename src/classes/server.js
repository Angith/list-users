"use strict";
const express = require("express");
const cors = require("cors");
const Router = require("./router");
const app = express();
const port = 3000;

class Server {
    constructor(db) {
        this.db = db;
    }

    startServer() {
        app.use(express.json());
        app.use(cors());

        const router = new Router(app);
        router.apply(this.db);

        app.listen(port, ()=> {
            console.log(`app atarted listening at http://localhost:${port}`);
        });
    }
}

module.exports = Server;