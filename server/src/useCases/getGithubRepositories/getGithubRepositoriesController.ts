import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
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
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}