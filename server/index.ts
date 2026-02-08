import express, { Request, Response } from 'express'

const app = express()
const port: number = Number(process.env.PORT) || 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`\napp running on port ${port}\n`)
})
