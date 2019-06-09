import { Router } from 'express';
import { getPrimesMedian } from '../../src/util/primeslist.util'

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ ok: 1 });
});

routes.get('/primes-median', async (req, res) => {
  if (!req.query.limit) {
    return res.status(400).send('Invalid `limit` query paramter')
  }

  return res.json({
    median: await getPrimesMedian(parseInt(req.query.limit))
  })
});

export default routes;
