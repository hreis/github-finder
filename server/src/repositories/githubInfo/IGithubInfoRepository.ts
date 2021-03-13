import { GitHubRepository } from "../../entities/githubInfo/githubRepository";
import { GitHubUser } from "../../entities/githubInfo/githubUser";

export interface IGithubInfoRepository {
    getGitHubUser(username: string): Promise<GitHubUser>;
    getRepositories(username: string): Promise<GitHubRepository[]>
}