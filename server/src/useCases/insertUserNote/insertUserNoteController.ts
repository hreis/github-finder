import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
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
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}