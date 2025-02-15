import express, { type Request, type Response } from 'express'
import cookieParser from "cookie-parser"
import exhibitRouter from './routes/exhibits.ts'

const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())

app.post('/', (_req: Request, res: Response) => {
    console.log('someone sent a request')
    res.send('Hello, world!')
})

app.use('/api/exhibit', exhibitRouter)

app.listen(port, () => {
    console.log(`App listening to port: ${port}`)
})
