import { Request, Response } from "express";
import { InsertUserNotesUseCase } from "./insertUserNoteUseCase";

export class InsertUserNotesController {

    constructor(private insertUserNotesUseCase: InsertUserNotesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { userId, note } = request.body;

        try {

            const repositories = await this.insertUserNotesUseCase.execute({
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