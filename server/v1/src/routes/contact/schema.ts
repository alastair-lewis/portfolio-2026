import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .trim()
    .min(1, { error: 'Name is required' }),
  email: z
    .email({ error: 'A valid email is required' }),
  message: z
    .string({ error: 'Message is required' })
    .trim()
    .min(1, { error: 'Message is required' }),
  company: z.string().optional()
});

export type ContactBody = z.infer<typeof contactSchema>;
