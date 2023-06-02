import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({ msg: 'hello world!' });
});

export default router;
