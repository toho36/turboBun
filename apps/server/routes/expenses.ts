import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

type Expense = {
  id: number;
  title: string;
  amount: number;
};
const fakeExpenses: Expense[] = [
  { id: 1, title: 'Coffee', amount: 3.5 },
  { id: 2, title: 'Lunch', amount: 12.0 },
  { id: 3, title: 'Groceries', amount: 45.0 },
];

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

export const expensesRoute = new Hono()
  .get('/', async (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post('/', zValidator('json', createPostSchema), async (c) => {
    const expense = await c.req.valid('json');
    fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 });
    return c.json(expense);
  });
