
import { UpdateUserNoteUseCase } from './updateUserNoteUseCase';
import { UpdateUserNoteController } from './updateUserNoteController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const updateUserNoteUseCase = new UpdateUserNoteUseCase(
    sqlGithubInfoRepository
);

const updateUserNoteController = new UpdateUserNoteController(
    updateUserNoteUseCase
);

export { updateUserNoteUseCase, updateUserNoteController }