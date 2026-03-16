import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .trim()
    .min(1, { error: 'Name is required' }),
  email: z
    .string({ error: 'A valid email is required' })
    .email({ error: 'A valid email is required' }),
  message: z
    .string({ error: 'Message is required' })
    .trim()
    .min(1, { error: 'Message is required' }),
});

export type ContactBody = z.infer<typeof contactSchema>;
