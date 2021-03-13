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
exports.UpdateUserNoteController = void 0;
class UpdateUserNoteController {
    constructor(updateUserNoteUseCase) {
        this.updateUserNoteUseCase = updateUserNoteUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, note } = request.body;
            try {
                const repositories = yield this.updateUserNoteUseCase.execute({
                    userId,
                    note
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
exports.UpdateUserNoteController = UpdateUserNoteController;
