'use strict'

const Controller = require("./controller");
const Service = require("../service/get_users_service");

class GetUserController extends Controller {
  constructor(db, request, response) {
    super(db, request, response);
    this.service = new Service(db);
  }

  async get() {
    try{
      const info = await this.service.get();
      return this.response.status(200).send({
        status: 200,
        users:info
      });
    } catch (err) {
      return this.response.status(500).send({
        status: 500,
        message: "Internal server error",
        error: err
    });
    }
  }
}

module.exports = GetUserController;