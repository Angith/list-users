"use strict";

const Controller = require("./controller");
const constants = require("../constants");
const Service = require("../service/add_users_service");

class AddUsersController extends Controller {
    constructor(db, request, response) {
        super(db, request, response);
        this.service = new Service(db);
    }

    async add() {
        try {
            const fn = this.getParam(constants.FIRST_NAME);
            const ln = this.getParam(constants.LAST_NAME);
            const pw = this.getParam(constants.PASSWORD);
            const email = this.getParam(constants.EMAIL);
            const intro = this.getParam(constants.INTRODUCTION);
            const phone = this.getParam(constants.PHONE);
            const experience = this.getParam(constants.EXPERIENCE);
            const achievements = this.getParam(constants.ACHIEVEMENTS);


            if (!fn || !ln || !pw || !email || !intro || !phone
        || !experience || !achievements) {
                return this.response.status(400).send({ message: "Some values are missing" });
            }

            const values = [
                fn,
                ln,
                email,
                pw,
                intro,
                phone,
                experience,
                achievements,
            ];

            const info = await this.service.add(values);
            return this.response.status(200).send(info);
        } catch (err) {
            return this.response.status(500).send({
                status: 500,
                message: "Internal server error",
                error: err
            });
        }
    }
}

module.exports = AddUsersController;