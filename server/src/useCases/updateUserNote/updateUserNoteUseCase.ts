import { IGithubInfoRepository } from "../../repositories/githubInfo/IGithubInfoRepository";
import { IUpdateUserNoteDTO } from "./updateUserNoteDTO";

export class UpdateUserNoteUseCase {

    constructor(private githubInfoRepository: IGithubInfoRepository) {}

    async execute(data: IUpdateUserNoteDTO): Promise<boolean> {

        const updated = await this.githubInfoRepository.updateUserNote(data.userId, data.note);
        
        if(updated) {
            return updated;
        }
        else {
            throw new Error("Error to update github user note");
        }

    }

}