import express, { type Request, type Response } from 'express'
import exhibitRouter from './routes/exhibits.ts'

const app = express()
const port = 3000

app.get('/', (_req: Request, res: Response) => {
    console.log('someone requested')
    res.send('hello world')
})

app.use('/api/exhibit', exhibitRouter)

app.listen(port, () => {
    console.log(`App listening to port: ${port}`)
})
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//     console.log('Add 2 + 3 =', add(2, 3))
// }
