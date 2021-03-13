import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { GitHubUser } from "../../entities/githubInfo/githubUser";
import { IGetGithubUserDTO } from "./getGithubUserDTO";

export class GetGithubUserUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: IGetGithubUserDTO): Promise<GitHubUser> {

        const githubuser = await this.githubInfoRepository.getGitHubUser(data.username);
        
        if(githubuser) {
            return githubuser;
        }
        else {
            throw new Error("Error to retrieve github user");
        }

    }

}