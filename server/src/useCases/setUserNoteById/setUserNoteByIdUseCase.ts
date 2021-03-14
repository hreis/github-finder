import { GitHubUserNote } from "../../entities/githubInfo/githubUserNote";
import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { ISetUserNoteByIdDTO } from "./setUserNoteByIdDTO";

export class SetUserNoteByIdUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: ISetUserNoteByIdDTO): Promise<boolean> {

        const seted = await this.githubInfoRepository.setUserNote(data.userId, data.note);
        
        if(seted) {
            return seted;
        }
        else {
            throw new Error("Error to set github user note");
        }

    }

}