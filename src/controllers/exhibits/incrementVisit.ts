import { type Response, type Request } from 'express'
import { recordVisit } from '../../services/recordVisit.ts'

export default async function incrementVisit(req: Request, res: Response) {
    const exhibitId = req.params.id
    const visitorId = req.cookies.visitorId;
    await recordVisit(exhibitId, visitorId)
    res.send(`Successfully recorded visit`)
}
