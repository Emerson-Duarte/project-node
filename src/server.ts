import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Funcionando' })
})

app.listen(3333, () => {
  console.log('Server run on port 3333')
})