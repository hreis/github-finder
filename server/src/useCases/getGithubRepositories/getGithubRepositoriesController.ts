import { Request, Response } from "express";
import { GetGithubRepositoriesUseCase } from "./getGithubRepositoriesUseCase";

export class GetGithubRepositoriesController {

    constructor(private getGithubRepositoriesUseCase: GetGithubRepositoriesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.body;

        try {

            const repositories = await this.getGithubRepositoriesUseCase.execute({
                username
            });

            return response.send(repositories);

        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}