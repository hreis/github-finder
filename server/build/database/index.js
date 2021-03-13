"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const secrets_1 = require("../utils/secrets");
const connection = knex_1.default({
    client: 'pg',
    connection: {
        host: secrets_1.DB.HOST,
        user: secrets_1.DB.USER,
        password: secrets_1.DB.PASSWORD,
        database: secrets_1.DB.DATABASE,
        requestTimeout: Infinity
    },
    useNullAsDefault: true,
});
exports.default = connection;
