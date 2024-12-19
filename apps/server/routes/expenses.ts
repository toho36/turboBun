import { Hono } from 'hono';

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
export const expensesRoute = new Hono()
  .get('/', async (c) => {
    return c.json({ expenses: [] });
  })
  .post('/', async (c) => {
    const expense = await c.req.json();
    console.log({ expense });
    return c.json(expense);
  });
