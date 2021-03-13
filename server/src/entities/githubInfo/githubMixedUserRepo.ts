import { GitHubRepository } from "./githubRepository";
import { GitHubUser } from "./githubUser";

export interface GithubMixedUserRepo {
    githubuser: GitHubUser;
    repositories: GitHubRepository[];
}