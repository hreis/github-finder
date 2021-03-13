import { GitHubUserNote } from "../../entities/githubInfo/githubUserNote";
import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { IGetUserNoteByIdDTO } from "./getUserNoteByIdDTO";

export class GetUserNoteByIdUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: IGetUserNoteByIdDTO): Promise<GitHubUserNote> {

        const usernote = await this.githubInfoRepository.getUserNoteById(data.userId);
        
        if(usernote) {
            return usernote;
        }
        else {
            throw new Error("Error to get github user note");
        }

    }

}