import express from 'express'
import content from './content.json' assert { type: 'json' }
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())

app.get('/users', (req, res) => {
  console.log('='.repeat(150))
  console.log('HEADERS:', Math.random().toString(36).slice(2), req.headers)
  console.log('='.repeat(150))

  res.json(content)
})

app.listen(port, () => {
  console.log(`[!] Server started on port: ${port}`)
})