import logger from "../../../utils/logger";
import { IGithubInfoRepository } from '../../../repositories/githubInfo/IGithubInfoRepository';
import { GitHubUser } from '../../../entities/githubInfo/githubUser';
import * as axios from 'axios';
import { GitHubRepository } from "../../../entities/githubInfo/githubRepository";

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
                    if(data.data) {
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

}