import { Request, Response } from "express";
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
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}