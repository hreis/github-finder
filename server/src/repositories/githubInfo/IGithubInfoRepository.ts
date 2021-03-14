import { GitHubUserNote } from "../../entities/githubInfo/githubUserNote";
import { GitHubRepository } from "../../entities/githubInfo/githubRepository";
import { GitHubUser } from "../../entities/githubInfo/githubUser";

export interface IGithubInfoRepository {
    getGitHubUser(username: string): Promise<GitHubUser>;
    getRepositories(username: string): Promise<GitHubRepository[]>;
    insertUserNote(userId: number, note: string): Promise<boolean>;
    getUserNoteById(userId: number): Promise<GitHubUserNote>;
    updateUserNote(userId: number, note: string): Promise<boolean>;
    setUserNote(userId: number, note: string): Promise<boolean>;
}