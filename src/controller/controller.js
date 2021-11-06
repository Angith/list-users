"use strict";

class Controller {
    constructor(db, request, response) {
        this.db = db;
        this.request = request;
        this.response = response;
    }

    getParam(name) {
        if (name in this.request.params) {
            return this.request.params[name];
        } else if (name in this.request.query) {
            return this.request.query[name];
        } else if (name in this.request.body) {
            return this.request.body[name];
        } else if (name in this.request.headers) {
            return this.request.headers[name];
        }
        return undefined;
    }
}

module.exports = Controller;