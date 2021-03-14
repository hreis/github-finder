
import { SetUserNoteByIdUseCase } from './setUserNoteByIdUseCase';
import { SetUserNoteByIdController } from './setUserNoteByIdController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const setUserNoteByIdUseCase = new SetUserNoteByIdUseCase(
    sqlGithubInfoRepository
);

const setUserNoteByIdController = new SetUserNoteByIdController(
    setUserNoteByIdUseCase
);

export { setUserNoteByIdUseCase, setUserNoteByIdController }