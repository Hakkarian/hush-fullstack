"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    host: process.env.POSTGRE_HOST,
    database: "postgres",
    password: process.env.POSTGRE_PASSWORD,
    port: 5433,
});
exports.default = pool;
