import { Hono } from 'hono';
import { contactSchema } from './schema';
import { sendContactEmail } from '../../services/email';

const contact = new Hono<{ Bindings: Env }>();

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

  const { company, ...params } = result.data;

  if (Boolean(company)) {
    return c.json({ success: false, error: 'An error occurred' }, 403);
  }

  const emailResult = await sendContactEmail(params, c.env);
  if (!emailResult.success) {
    console.error('Email send failed:', emailResult.error);
    return c.json({ success: false, error: 'Failed to send message' }, 500);
  }

  return c.json({ success: true, message: 'Message received' }, 200);
});

export { contact };
