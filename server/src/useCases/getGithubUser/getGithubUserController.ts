import { Request, Response } from "express";
import { GetGithubUserUseCase } from "./getGithubUserUseCase";
import ApiError from '../../utils/error-handling';
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

            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }
    }
}
