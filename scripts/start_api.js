"use strict";

const { Pool } = require("pg");
const Server = require("../src/classes/server");

async function start() {
    const pool = await connectToDatabase();
    await createTables(pool);
    const server = new Server();
    server.startServer();
}

async function connectToDatabase() {
    const credentials = {
        user: "admin",
        host: "localhost",
        database: "listusers",
        password: "dbadmin",
        port: 5440,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    };

    const pool = new Pool(credentials);
    return pool;
}

async function createTables(pool) {
    try {
        const query = `
    CREATE TABLE IF NOT EXISTS users (
      id BIGINT GENERATED ALWAYS AS IDENTITY,
      firstname VARCHAR (100) NOT NULL,
      lastname VARCHAR (100) NOT NULL,
      introduction VARCHAR (1000),
      email VARCHAR (255) UNIQUE NOT NULL,
      phone VARCHAR (20) UNIQUE NOT NULL,
      experience TEXT,
      achievements TEXT,
      password VARCHAR (500 ) NOT NULL,
      PRIMARY KEY (id)
    )`;
        await pool.query(query);
    } catch (error) {
        throw error;
    }
}

start();