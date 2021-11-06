"use strict";

function addUserQuery() {
    return `
  INSERT INTO users
    (firstname, lastname, email, password, 
    introduction, phone, experience, achievements)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
  `;
}

module.exports = {
    addUserQuery
};