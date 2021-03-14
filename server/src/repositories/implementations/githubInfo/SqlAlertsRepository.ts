import logger from "../../../utils/logger";
import { IGithubInfoRepository } from '../../../repositories/githubInfo/IGithubInfoRepository';
import { GitHubUser } from '../../../entities/githubInfo/githubUser';
import * as axios from 'axios';
import { GitHubRepository } from "../../../entities/githubInfo/githubRepository";
import * as pg from '../../../database/index';
import { GitHubUserNote } from "../../../entities/githubInfo/githubUserNote";

export class SqlGithubInfoRepository implements IGithubInfoRepository {

    baseUrl: string = 'https://api.github.com';

    async getGitHubUser(username: string): Promise<GitHubUser> {

        try {
            let githubuser: GitHubUser;

            await axios.default.get(`${this.baseUrl}/users/${username}`)
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
            let page = 1;
            let another_page: boolean = true;

            let query = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=100`;

            while (another_page) {
                await axios.default.get(query)
                    .then((data) => {
                        if (data.headers.link) {
                            if (!data.headers.link.includes('next')) another_page = false;

                            page++;
                            query = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=100`;
                        }
                        else another_page = false;

                        githubrepositories = githubrepositories.concat(data.data);

                    }).catch(err => {
                        throw new Error(err);
                    });
            }

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

    async setUserNote(userId: number, note: string): Promise<boolean> {

        try {

            let seted: boolean = false;

            await this.getUserNoteById(userId).then(async (data) => {
                if (data.userId) {
                    await this.updateUserNote(userId, note)
                        .then(() => {
                            seted = true
                        })
                        .catch(err => {
                            seted = false;
                            logger.error(err);
                            throw new Error(err);
                        });
                }
                else {
                    await this.insertUserNote(userId, note)
                        .then(() => {
                            seted = true
                        })
                        .catch(err => {
                            seted = false;
                            logger.error(err);
                            throw new Error(err);
                        });
                }
            });

            return seted;

        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to set github user note');
        }
    }

    async updateUserNote(userId: number, note: string): Promise<boolean> {

        try {

            let updated: boolean = false;

            await this.getUserNoteById(userId).then((data) => {
                if (data.userId) {

                }
            })

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

            await pg.default('user_notes').select('*')
                .where('user_id', userId)
                .first()
                .then((data) => {
                    if (data) {
                        usernote = {
                            note: data.note,
                            userId: data.user_id
                        };
                    }

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

    async getNumberOfContributors(username: string, repository: string): Promise<number> {

        try {

            let githubrepositories: any[] = [];
            let page = 1;
            let another_page: boolean = true;

            let query = `${this.baseUrl}/repos/${username}/${repository}/contributors?page=${page}&per_page=100`;

            while (another_page) {
                await axios.default.get(query)
                    .then((data) => {
                        if (data.headers.link) {
                            if (!data.headers.link.includes('next')) another_page = false;

                            page++;
                            query = `${this.baseUrl}/users/${username}/repos?page=${page}&per_page=100`;
                        }
                        else another_page = false;

                        githubrepositories = githubrepositories.concat(data.data);

                    }).catch(err => {
                        throw new Error(err);
                    });
            }

            return githubrepositories.length;
        }
        catch (err) {
            logger.error(err);
            throw new Error('Error to retrieve contributors of this repository');
        }
    }

}