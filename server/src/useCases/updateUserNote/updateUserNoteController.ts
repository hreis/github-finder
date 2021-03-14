import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
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
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}