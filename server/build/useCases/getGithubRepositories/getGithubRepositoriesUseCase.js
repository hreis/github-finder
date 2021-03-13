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
exports.GetGithubRepositoriesUseCase = void 0;
class GetGithubRepositoriesUseCase {
    constructor(githubInfoRepository) {
        this.githubInfoRepository = githubInfoRepository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const githubuser = yield this.githubInfoRepository.getRepositories(data.username);
            if (githubuser) {
                return githubuser;
            }
            else {
                throw new Error("Error to retrieve github repositories");
            }
        });
    }
}
exports.GetGithubRepositoriesUseCase = GetGithubRepositoriesUseCase;
