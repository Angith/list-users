'use strict'

const queries = require("./queries");
const constants = require("../constants");

class GetUsersService {
  constructor(db) {
    this.db = db;
  }

  async get() {
    try {
      const query = queries.getusersQuery();
      const { rows } = await this.db.query(query);
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = GetUsersService