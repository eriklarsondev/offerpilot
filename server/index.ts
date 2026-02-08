import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'offerpilot' })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
