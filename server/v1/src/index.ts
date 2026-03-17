import { Hono } from 'hono';
import { cors } from './middleware/cors';
import { contact } from './routes/contact';

const app = new Hono<{ Bindings: Env }>().basePath('/v1');

app.use('*', cors);
app.route('/contact', contact);

export default app;
