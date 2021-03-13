import logger from "../../../utils/logger";
import { IGithubInfoRepository } from '../../../repositories/githubInfo/IGithubInfoRepository';
import { GitHubUser } from '../../../entities/githubInfo/githubUser';
import * as axios from 'axios';
import { GitHubRepository } from "../../../entities/githubInfo/githubRepository";
import * as pg from '../../../database/index';
import { GitHubUserNote } from "../../../entities/githubInfo/githubUserNote";
export class SqlGithubInfoRepository implements IGithubInfoRepository {

    async getGitHubUser(username: string): Promise<GitHubUser> {

        try {
            let githubuser: GitHubUser;

            await axios.default.get(`https://api.github.com/users/${username}`)
                .then((user) => {
                    githubuser = user.data as GitHubUser;
                })
                .catch(err => {
                    logger.error(err);
                    throw new Error(err);
                });

            return githubuser;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to retrieve github user');
        }

    }

    async getRepositories(username: string): Promise<GitHubRepository[]> {

        try {

            let githubrepositories: GitHubRepository[] = [];

            await axios.default.get(`https://api.github.com/users/${username}/repos`)
                .then((data) => {
                    if (data.data) {
                        githubrepositories = data.data.filter(x => x.language != null) as GitHubRepository[];
                    }
                })
                .catch(err => {
                    logger.error(err);
                    throw new Error(err);
                });

            return githubrepositories;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to retrieve github repositories');
        }
    }

    async insertUserNote(userId: number, note: string): Promise<boolean> {

        try {

            let inserted: boolean = false;

            await pg.default('user_notes').insert({
                user_id: userId,
                note: note
            }).then(() => {
                inserted = true;
            }).catch(err => {
                inserted = false;
                throw new Error(err);
            });

            return inserted;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to insert github user note');
        }
    }

    async updateUserNote(userId: number, note: string): Promise<boolean> {

        try {

            let updated: boolean = false;

            await pg.default('user_notes').update({
                note: note
            }).where('user_id', userId)
            .then(() => {
                updated = true;
            }).catch(err => {
                updated = false;
                throw new Error(err);
            });

            return updated;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to update github user note');
        }
    }

    async getUserNoteById(userId: number): Promise<GitHubUserNote> {

        try {

            let usernote: GitHubUserNote = new GitHubUserNote(null);

            await pg.default('user_notes').select('note')
                .where('user_id', userId)
                .first()
                .then((data) => {
                    usernote = data.note;
                }).catch(err => {
                    logger.error(err);
                    throw new Error(err);
                });

            return usernote;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to get github user note');
        }
    }

}