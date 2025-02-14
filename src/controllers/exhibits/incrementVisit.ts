import { type Response, type Request } from 'express'
import { recordVisit } from "../../services/recordVisit.ts"

export default async function incrementVisit(req: Request, res: Response) {
    const exhibitId = req.params.id
    await recordVisit(exhibitId)
    res.send(`Successfully added visit`)
}
