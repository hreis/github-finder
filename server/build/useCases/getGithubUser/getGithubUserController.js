"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGithubUserController = void 0;
class GetGithubUserController {
    constructor(GetGithubUserUseCase) {
        this.GetGithubUserUseCase = GetGithubUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = request.body;
            try {
                const githubuser = yield this.GetGithubUserUseCase.execute({
                    username
                });
                return response.send(githubuser);
            }
            catch (error) {
                if (error.message.includes('404')) {
                    return response.status(404).json({
                        message: error.message || 'Not Found.'
                    });
                }
                else {
                    return response.status(400).json({
                        message: error.message || 'Unexpected error.'
                    });
                }
            }
        });
    }
}
exports.GetGithubUserController = GetGithubUserController;
