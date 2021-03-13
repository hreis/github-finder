
import { InsertUserNotesUseCase } from './insertUserNoteUseCase';
import { InsertUserNotesController } from './insertUserNoteController';
import { SqlGithubInfoRepository } from '../../repositories/implementations/githubInfo/SqlAlertsRepository';

const sqlGithubInfoRepository = new SqlGithubInfoRepository();

const insertUserNotesUseCase = new InsertUserNotesUseCase(
    sqlGithubInfoRepository
);

const insertUserNotesController = new InsertUserNotesController(
    insertUserNotesUseCase
);

export { insertUserNotesUseCase, insertUserNotesController }