import { Router, Request, Response } from "express";

import githubInfo from "./githubInfo/githubinfo.routes";

const routes = Router();

routes.use("/githubinfo", githubInfo);

export default routes;