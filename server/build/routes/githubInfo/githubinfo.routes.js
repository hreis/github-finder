"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getGithubUser_1 = require("../../useCases/getGithubUser");
const getGithubRepositories_1 = require("../../useCases/getGithubRepositories");
const insertUserNote_1 = require("../../useCases/insertUserNote");
const getUserNoteById_1 = require("../../useCases/getUserNoteById");
const router = express_1.Router();
router.post('/getGitHubUser', (request, response) => {
    return getGithubUser_1.getGithubUserController.handle(request, response);
});
router.post('/getGithubRepositories', (request, response) => {
    return getGithubRepositories_1.getGithubRepositoriesController.handle(request, response);
});
router.post('/insertGithubNote', (request, response) => {
    return insertUserNote_1.insertUserNotesController.handle(request, response);
});
router.post('/getUserNoteById', (request, response) => {
    return getUserNoteById_1.getUserNoteByIdController.handle(request, response);
});
router.put('/updateUserNoteById', (request, response) => {
    return getUserNoteById_1.getUserNoteByIdController.handle(request, response);
});
exports.default = router;
