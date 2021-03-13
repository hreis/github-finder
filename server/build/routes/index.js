"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const githubinfo_routes_1 = __importDefault(require("./githubInfo/githubinfo.routes"));
const routes = express_1.Router();
routes.use("/githubinfo", githubinfo_routes_1.default);
exports.default = routes;
