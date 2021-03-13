import { Router } from "express";
import { getGithubUserController } from "../../useCases/getGithubUser";
import { getGithubRepositoriesController } from "../../useCases/getGithubRepositories";

const router = Router();

router.post('/getGitHubUser', (request, response) => {
    return getGithubUserController.handle(request, response);
});

router.post('/getGithubRepositories', (request, response) => {
    return getGithubRepositoriesController.handle(request, response);
});

export default router;