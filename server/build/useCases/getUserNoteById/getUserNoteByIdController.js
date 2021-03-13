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
exports.GetUserNoteByIdController = void 0;
class GetUserNoteByIdController {
    constructor(getUserNoteByIdUseCase) {
        this.getUserNoteByIdUseCase = getUserNoteByIdUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.body;
            try {
                const note = yield this.getUserNoteByIdUseCase.execute({
                    userId
                });
                return response.send(note);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message || 'Unexpected error.'
                });
            }
        });
    }
}
exports.GetUserNoteByIdController = GetUserNoteByIdController;
