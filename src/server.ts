import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.get('/', (request, response) => {
  return response.json({ message: 'Funcionando' })
});

app.listen(3333, () => {
  console.log('Server run on port 3333')
});
