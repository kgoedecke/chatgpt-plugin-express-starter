import express from 'express';

const router = express.Router();

// In-memory data store for the TODOs
const TODOS = {};

router.post('/:username', (req, res) => {
  const { username } = req.params;
  if (!TODOS[username]) {
    TODOS[username] = [];
  }
  TODOS[username].push(req.body.todo);
  res.status(200).send('OK');
});

router.get('/:username', (req, res) => {
  const { username } = req.params;
  res.status(200).json(TODOS[username] || []);
});

router.delete('/:username', (req, res) => {
  const { username } = req.params;
  const { todo_idx: todoIdx } = req.body;
  if (todoIdx >= 0 && todoIdx < TODOS[username].length) {
    TODOS[username].splice(todoIdx, 1);
  }
  res.status(200).send('OK');
});

export default router;
