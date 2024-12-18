import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(logger());

app.get('/test', (c) => {
  return c.json({ message: 'server is running' });
});

export default app;
