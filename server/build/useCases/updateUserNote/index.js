"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserNoteController = exports.updateUserNoteUseCase = void 0;
const updateUserNoteUseCase_1 = require("./updateUserNoteUseCase");
const updateUserNoteController_1 = require("./updateUserNoteController");
const SqlAlertsRepository_1 = require("../../repositories/implementations/githubInfo/SqlAlertsRepository");
const sqlGithubInfoRepository = new SqlAlertsRepository_1.SqlGithubInfoRepository();
const updateUserNoteUseCase = new updateUserNoteUseCase_1.UpdateUserNoteUseCase(sqlGithubInfoRepository);
exports.updateUserNoteUseCase = updateUserNoteUseCase;
const updateUserNoteController = new updateUserNoteController_1.UpdateUserNoteController(updateUserNoteUseCase);
exports.updateUserNoteController = updateUserNoteController;
