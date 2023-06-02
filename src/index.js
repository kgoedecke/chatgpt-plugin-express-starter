import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';
import indexRouter from './routes/index.js';
import todosRouter from './routes/todos.js';

const PORT = process.env.PORT || 5003;

const app = express();

const corsConfig = {
  origin: 'http://chat.openai.com',
};

app.use(cors(corsConfig));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos/', todosRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Example app listening on port ${PORT}`);
});
