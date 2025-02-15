import { type Response, type Request } from 'express'
import { fetchExhibits } from '../../services/fetchExhibits.ts'

export default async function getExhibits(_req: Request, res: Response) {
    const data = await fetchExhibits()
    res.json({
        data,
    })
}
