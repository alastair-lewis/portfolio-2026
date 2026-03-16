import { cors as honoCors } from 'hono/cors';

export const cors = honoCors({
  origin: ['https://alastairlewis.com', 'https://www.alastairlewis.com'],
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  maxAge: 86400,
});
