import { cors as honoCors } from 'hono/cors';

export const cors = honoCors({
  origin: (origin) => {
    const allowed = [
      'https://alastairlewis.com',
      'https://www.alastairlewis.com',
    ];
    if (allowed.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin)) {
      return origin;
    }
    return null;
  },
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  maxAge: 86400,
});
