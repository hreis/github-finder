import knex from 'knex';
import * as attachPaginate from 'knex-paginate';
import { getJobs } from '../utils/getJobs';
import logger from "../utils/logger";
import { DB } from "../utils/secrets";

const connection = knex({

    client: 'mssql',
    connection: {
        host: DB.HOST,
        user: DB.USER,
        password: DB.PASSWORD,
        database: DB.DATABASE,
        requestTimeout: Infinity
    },
    useNullAsDefault: true,

});

attachPaginate.attachPaginate();

export default connection;

// try {
//     getJobs();
// } catch (error) {
//     logger.error(`getJobs err - ${error}`);
//     throw new Error(error);
// }