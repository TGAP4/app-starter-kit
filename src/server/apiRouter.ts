import { NextFunction, Request, Response, Router } from "express";

const apiRouter = Router();

const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Do middleware stuff
  console.log(req);
  next();
};
apiRouter.use(myMiddleware);

apiRouter
  .route("/user")
  .get((_, res) => {
    res.send("Get a user");
  })
  .post((_, res) => {
    res.send("Create a user");
  });

export default apiRouter;
