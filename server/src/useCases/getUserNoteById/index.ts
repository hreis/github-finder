
import { GetUserNoteByIdUseCase } from './getUserNoteByIdUseCase';
import { GetUserNoteByIdController } from './getUserNoteByIdController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const getUserNoteByIdUseCase = new GetUserNoteByIdUseCase(
    sqlGithubInfoRepository
);

const getUserNoteByIdController = new GetUserNoteByIdController(
    getUserNoteByIdUseCase
);

export { getUserNoteByIdUseCase, getUserNoteByIdController }