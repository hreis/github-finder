import { Request, Response } from "express";
import { UpdateUserNoteUseCase } from "./updateUserNoteUseCase";

export class UpdateUserNoteController {

    constructor(private updateUserNoteUseCase: UpdateUserNoteUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { userId, note } = request.body;

        try {

            const repositories = await this.updateUserNoteUseCase.execute({
                userId,
                note
            });

            return response.send(repositories);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}