
import { GetGithubUserUseCase } from './getGithubUserUseCase';
import { GetGithubUserController } from './getGithubUserController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const getGithubUserUseCase = new GetGithubUserUseCase(
    sqlGithubInfoRepository
);

const getGithubUserController = new GetGithubUserController(
    getGithubUserUseCase
);

export { getGithubUserUseCase, getGithubUserController }