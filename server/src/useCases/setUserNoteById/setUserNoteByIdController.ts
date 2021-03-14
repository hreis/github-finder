import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { SetUserNoteByIdUseCase } from "./setUserNoteByIdUseCase";

export class SetUserNoteByIdController {

    constructor(private setUserNoteByIdUseCase: SetUserNoteByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { userId, note } = request.body;

        try {

            const seted = await this.setUserNoteByIdUseCase.execute({
                userId,
                note
            });

            return response.send(seted);

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}