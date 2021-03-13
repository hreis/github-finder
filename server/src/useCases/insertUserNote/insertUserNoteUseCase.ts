import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { IInsertUserNotesControllerDTO } from "./insertUserNoteDTO";
import { GitHubRepository } from "../../entities/githubInfo/githubRepository";

export class InsertUserNotesUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: IInsertUserNotesControllerDTO): Promise<boolean> {

        const inserted = await this.githubInfoRepository.insertUserNote(data.userId, data.note);
        
        if(inserted) {
            return inserted;
        }
        else {
            throw new Error("Error to insert github user note");
        }

    }

}