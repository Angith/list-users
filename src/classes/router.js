"use strict";

const { request, response } = require("express");

const BASE_PATH = "/listuser";
const users = BASE_PATH + "/users";


class Router {
    constructor(app) {
        this.app = app;
    }

    apply() {
        this.app.route(users)
            .get(function (request, response) {
                // TODO
            })
            .post(function (request, response) {
                // TODO
            });
    }
}

module.exports = Router;