
import { GetGithubRepositoriesUseCase } from './getGithubRepositoriesUseCase';
import { GetGithubRepositoriesController } from './getGithubRepositoriesController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const getGithubRepositoriesUseCase = new GetGithubRepositoriesUseCase(
    sqlGithubInfoRepository
);

const getGithubRepositoriesController = new GetGithubRepositoriesController(
    getGithubRepositoriesUseCase
);

export { getGithubRepositoriesUseCase, getGithubRepositoriesController }