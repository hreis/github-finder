"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserNoteByIdController = exports.getUserNoteByIdUseCase = void 0;
const getUserNoteByIdUseCase_1 = require("./getUserNoteByIdUseCase");
const getUserNoteByIdController_1 = require("./getUserNoteByIdController");
const SqlAlertsRepository_1 = require("../../repositories/implementations/githubInfo/SqlAlertsRepository");
const sqlGithubInfoRepository = new SqlAlertsRepository_1.SqlGithubInfoRepository();
const getUserNoteByIdUseCase = new getUserNoteByIdUseCase_1.GetUserNoteByIdUseCase(sqlGithubInfoRepository);
exports.getUserNoteByIdUseCase = getUserNoteByIdUseCase;
const getUserNoteByIdController = new getUserNoteByIdController_1.GetUserNoteByIdController(getUserNoteByIdUseCase);
exports.getUserNoteByIdController = getUserNoteByIdController;
