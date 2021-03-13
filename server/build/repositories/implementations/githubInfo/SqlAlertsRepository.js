"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlGithubInfoRepository = void 0;
const logger_1 = __importDefault(require("../../../utils/logger"));
const axios = __importStar(require("axios"));
const pg = __importStar(require("../../../database/index"));
const githubUserNote_1 = require("../../../entities/githubInfo/githubUserNote");
class SqlGithubInfoRepository {
    getGitHubUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let githubuser;
                yield axios.default.get(`https://api.github.com/users/${username}`)
                    .then((user) => {
                    githubuser = user.data;
                })
                    .catch(err => {
                    logger_1.default.error(err);
                    throw new Error(err);
                });
                return githubuser;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error('Error to retrieve github user');
            }
        });
    }
    getRepositories(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let githubrepositories = [];
                yield axios.default.get(`https://api.github.com/users/${username}/repos`)
                    .then((data) => {
                    if (data.data) {
                        githubrepositories = data.data.filter(x => x.language != null);
                    }
                })
                    .catch(err => {
                    logger_1.default.error(err);
                    throw new Error(err);
                });
                return githubrepositories;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error('Error to retrieve github repositories');
            }
        });
    }
    insertUserNote(userId, note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let inserted = false;
                yield pg.default('user_notes').insert({
                    user_id: userId,
                    note: note
                }).then(() => {
                    inserted = true;
                }).catch(err => {
                    inserted = false;
                    throw new Error(err);
                });
                return inserted;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error('Error to insert github user note');
            }
        });
    }
    updateUserNote(userId, note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let updated = false;
                yield pg.default('user_notes').update({
                    note: note
                }).where('user_id', userId)
                    .then(() => {
                    updated = true;
                }).catch(err => {
                    updated = false;
                    throw new Error(err);
                });
                return updated;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error('Error to update github user note');
            }
        });
    }
    getUserNoteById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let usernote = new githubUserNote_1.GitHubUserNote(null);
                yield pg.default('user_notes').select('note')
                    .where('user_id', userId)
                    .first()
                    .then((data) => {
                    usernote = data.note;
                }).catch(err => {
                    logger_1.default.error(err);
                    throw new Error(err);
                });
                return usernote;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error('Error to get github user note');
            }
        });
    }
}
exports.SqlGithubInfoRepository = SqlGithubInfoRepository;
