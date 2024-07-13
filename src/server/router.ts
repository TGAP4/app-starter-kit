import {NextFunction, Request, Response, Router} from 'express'

const router = Router()

const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Do middleware stuff 
  next()
}
router.use(myMiddleware)

router.route('/user')
  .get((_, res) => {
    res.send('Get an user')
  })
  .post((_, res) => {
    res.send('Create an user')
  })

export default router