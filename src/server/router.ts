import {NextFunction, Request, Response, Router} from 'express'

const router = Router()

const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req, res)
  next()
}
router.use(myMiddleware)

router.route('/item')
  .get((_, res) => {
    res.send('Get an item')
  })
  .post((_, res) => {
    res.send('Create an item')
  })

export default router