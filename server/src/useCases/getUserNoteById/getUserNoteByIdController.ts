import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { GetUserNoteByIdUseCase } from "./getUserNoteByIdUseCase";

export class GetUserNoteByIdController {

    constructor(private getUserNoteByIdUseCase: GetUserNoteByIdUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { userId } = request.body;

        try {

            const note = await this.getUserNoteByIdUseCase.execute({
                userId
            });

            return response.send(note);

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}