import {RESEND_API_URL, SENDER_EMAIL} from './const';

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

interface ResendSuccessResponse {
  id: string;
}

interface ResendErrorResponse {
  statusCode: number;
  message: string;
  name: string;
}

type SendEmailResult =
  | { success: true; id: string }
  | { success: false; error: string };

export async function sendContactEmail(
  params: SendEmailParams,
  env: Env
): Promise<SendEmailResult> {
  const { name, email, message } = params;
  const apiKey = env.RESEND_API_KEY;
  const to = env.PERSONAL_EMAIL;

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Contact Form <${SENDER_EMAIL}>`,
      to,
      subject: `Portfolio contact: ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data as ResendErrorResponse;
    console.error('Resend API error:', JSON.stringify(error));
    return { success: false, error: error.message };
  }

  return { success: true, id: (data as ResendSuccessResponse).id };
}
