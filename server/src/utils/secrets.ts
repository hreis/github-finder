import * as dotenv from "dotenv";
import * as _ from "lodash";
import * as path from "path";
//import { getHost, getUser, getPassword, getDatabase } from './encryption';

dotenv.config({ path: ".env" });

export const ENVIRONMENT = _.defaultTo(process.env.APP_ENV, "dev");
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const APP_PORT = _.defaultTo(process.env.APP_PORT, 3333);
export const LOG_DIRECTORY = _.defaultTo(process.env.LOG_DIRECTORY, path.resolve('logs'));
export const JWT_SECRET = _.defaultTo(process.env.JWT_SECRET, "secret");
export const SESSION_SECRET = _.defaultTo(process.env.SESSION_SECRET, "secret");
export const BING_SEARCH_V7_SUBSCRIPTION_KEY = _.defaultTo(process.env.BING_SEARCH_V7_SUBSCRIPTION_KEY, "secretKey");
// export const DB             = {
//   USER    : getUser(),
//   PASSWORD: getPassword(),
//   HOST    : getHost(),
//   DATABASE    : getDatabase()
// }

// export const DB = {
//   USER: _.defaultTo(process.env.DB_USER, "fira"),
//   PASSWORD: _.defaultTo(process.env.DB_USER_PWD, "PLD@2020"),
//   HOST: _.defaultTo(process.env.DB_HOST, "fira.database.windows.net"),
//   DATABASE: _.defaultTo(process.env.DB_DATABASE, "MD_DB_FIRA")
// }

export const DB = {
  USER: _.defaultTo(process.env.DB_USER, "sis_fira"),
  PASSWORD: _.defaultTo(process.env.DB_USER_PWD, "#M0dA1_f12a#0286"),
  HOST: _.defaultTo(process.env.DB_HOST, "sqlprd19-sp01.modal.net.br"),
  DATABASE: _.defaultTo(process.env.DB_DATABASE, "MD_DB_FIRA")
}


// TODO:
// export const PW_SALT        = _.defaultTo(process.env.PW_SALT, ?);
export const ACTIVATION_KEY = '3ebbc52bab63b38fe3069ecc0201c700dd05cf7fa84f18f76e861bbe56aed76139b14bf0468c87a1a999d32704ae1817de57998eb4554c2ba98a329e9223d429';