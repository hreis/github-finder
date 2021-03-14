import { Router } from "express";
import { getGithubUserController } from "../../useCases/getGithubUser";
import { getGithubRepositoriesController } from "../../useCases/getGithubRepositories";
import { insertUserNotesController } from "../../useCases/insertUserNote";
import { getUserNoteByIdController } from "../../useCases/getUserNoteById";
import { setUserNoteByIdController } from "../../useCases/setUserNoteById";

const router = Router();

router.post('/getGitHubUser', (request, response) => {
    return getGithubUserController.handle(request, response);
});

router.post('/getGithubRepositories', (request, response) => {
    return getGithubRepositoriesController.handle(request, response);
});

router.post('/insertGithubNote', (request, response) => {
    return insertUserNotesController.handle(request, response);
});

router.post('/getUserNoteById', (request, response) => {
    return getUserNoteByIdController.handle(request, response);
});

router.put('/updateUserNoteById', (request, response) => {
    return getUserNoteByIdController.handle(request, response);
});

router.post('/setUserNoteById', (request, response) => {
    return setUserNoteByIdController.handle(request, response);
});

export default router;