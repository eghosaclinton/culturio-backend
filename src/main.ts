import express, { type Request, type Response } from 'express'
import redis from "redis"
import cors from "cors"
import cookieParser from "cookie-parser"
import exhibitRouter from './routes/exhibits.ts'

const app = express()
const port = 3001

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
    credentials: true
}))

// const client = redis.createClient()

// client.on('error', (err)=>{
//     console.error('Redis Error: ' + err)
// })



app.use(express.json())
app.use(cookieParser())

app.post('/', (_req: Request, res: Response) => {
    console.log('someone sent a request')
    res.json({
       message : 'Hello, world!'
    })
})

// app.get('/seed', async (_req: Request, res:Response)=>{
//     await db.insert(exhibitsTable).values(exhibits)

//     res.send("db seeded successfully")
// })

app.use('/api/exhibit', exhibitRouter)

app.listen(port, () => {
    console.log(`App listening to port: ${port}`)
})
