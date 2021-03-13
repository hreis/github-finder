import knex from 'knex';
import { DB } from "../utils/secrets";

const connection = knex({

    client: 'pg',
    connection: {
        host: DB.HOST,
        user: DB.USER,
        password: DB.PASSWORD,
        database: DB.DATABASE,
        requestTimeout: Infinity
    },
    useNullAsDefault: true,

});

export default connection;
