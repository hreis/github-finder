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
exports.GetGithubRepositoriesController = void 0;
class GetGithubRepositoriesController {
    constructor(getGithubRepositoriesUseCase) {
        this.getGithubRepositoriesUseCase = getGithubRepositoriesUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = request.body;
            try {
                const repositories = yield this.getGithubRepositoriesUseCase.execute({
                    username
                });
                return response.send(repositories);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || 'Unexpected error.'
                });
            }
        });
    }
}
exports.GetGithubRepositoriesController = GetGithubRepositoriesController;
