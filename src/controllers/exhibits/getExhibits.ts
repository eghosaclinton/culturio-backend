import { type Response, type Request } from 'express'

export default function getExhibits(_req: Request, res: Response) {
    res.send('this is exhibit')
}
