import { Router } from 'express'
import getExhibits from '../controllers/exhibits/getExhibits.ts'
import incrementVisit from '../controllers/exhibits/incrementVisit.ts'

const exhibitRouter = Router()

exhibitRouter.get('/', getExhibits)

exhibitRouter.post('/:id/visit', incrementVisit)

export default exhibitRouter
