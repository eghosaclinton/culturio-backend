import { type Response, type Request } from 'express'

export default function incrementVisit(req: Request, res: Response) {
    res.send(`this is visitor ${req.params.id}`)
}
