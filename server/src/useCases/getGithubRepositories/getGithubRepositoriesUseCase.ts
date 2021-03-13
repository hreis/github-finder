import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { GitHubUser } from "../../entities/githubInfo/githubUser";
import { IGetGithubRepositoriesDTO } from "./getGithubRepositoriesDTO";
import { GitHubRepository } from "../../entities/githubInfo/githubRepository";

export class GetGithubRepositoriesUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: IGetGithubRepositoriesDTO): Promise<GitHubRepository[]> {

        const githubuser = await this.githubInfoRepository.getRepositories(data.username);
        
        if(githubuser) {
            return githubuser;
        }
        else {
            throw new Error("Error to retrieve github repositories");
        }

    }

}