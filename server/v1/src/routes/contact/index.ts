import { Hono } from 'hono';
import { contactSchema } from './schema';

const contact = new Hono();

contact.post('/', async (c) => {
  let body: unknown;

  try {
    body = await c.req.json();
  } catch {
    return c.json({ success: false, error: 'Invalid JSON' }, 400);
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const firstError = result.error.issues[0];
    return c.json({ success: false, error: firstError.message }, 400);
  }

  // TODO: integrate with email/storage service
  return c.json({ success: true, message: 'Message received' }, 200);
});

export { contact };
