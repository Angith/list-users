"use strict";

const BASE_PATH = "/listusers";
const users = BASE_PATH + "/users";

const GetUsersController = require("../controller/get_users_controller");
const AddUserController = require("../controller/add_users_controller");

class Router {
    constructor(app) {
        this.app = app;
    }

    apply(db) {
        this.app.route(users)
            .get(function (request, response) {
                new GetUsersController(db, request, response).get();
            })
            .post( function (request, response) {
                new AddUserController(db, request, response).add();
            });
    }
}

module.exports = Router;