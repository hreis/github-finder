import { Request, Response } from "express";
// import { loadErrorHandlers } from "../../utils/error-handling";
import { GetGithubUserUseCase } from "./getGithubUserUseCase";

export class GetGithubUserController {

    constructor(private GetGithubUserUseCase: GetGithubUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.body;

        try {

            const githubuser = await this.GetGithubUserUseCase.execute({
                username
            });

            return response.send(githubuser);

        } catch (error) {

            if (error.message.includes('404')) {
                return response.status(404).json({
                    message: error.message || 'Not Found.'
                })
            }
            else {
                return response.status(400).json({
                    message: error.message || 'Unexpected error.'
                })
            }

        }

    }
}