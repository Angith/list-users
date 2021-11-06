"use strict";

const queries = require("./queries");
const constants = require("../constants");


class AddUserService {
    constructor(db) {
        this.db = db;
    }
  
    async add (values) {
        try {
            const query = queries.addUserQuery();
            const { rows } = await this.db.query(query, values);
            const response = rows[0];
            delete response[constants.PASSWORD];
            return response;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = AddUserService;