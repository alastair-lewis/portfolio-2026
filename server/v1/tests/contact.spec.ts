import { SELF, fetchMock } from 'cloudflare:test';
import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import '../src/index';

const CONTACT_URL = 'https://example.com/v1/contact';
const JSON_HEADERS = { 'Content-Type': 'application/json' };

function postContact(body: unknown) {
  return SELF.fetch(CONTACT_URL, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
  });
}

beforeAll(() => {
  fetchMock.activate();
  fetchMock.disableNetConnect();
});

afterEach(() => {
  fetchMock.assertNoPendingInterceptors();
});

function mockResendSuccess() {
  fetchMock
    .get('https://api.resend.com')
    .intercept({ path: '/emails', method: 'POST' })
    .reply(200, JSON.stringify({ id: 'test-email-id' }), {
      headers: { 'Content-Type': 'application/json' },
    });
}

function mockResendFailure() {
  fetchMock
    .get('https://api.resend.com')
    .intercept({ path: '/emails', method: 'POST' })
    .reply(
      422,
      JSON.stringify({
        statusCode: 422,
        message: 'Invalid API key',
        name: 'validation_error',
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
}

describe('POST /contact', () => {
  it('returns success for a valid payload', async () => {
    mockResendSuccess();

    const response = await postContact({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello there',
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      success: true,
      message: 'Message received',
    });
  });

  it('returns 500 when email service fails', async () => {
    mockResendFailure();

    const response = await postContact({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Hello there',
    });

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Failed to send message',
    });
  });

  it('returns 400 when name is missing', async () => {
    const response = await postContact({
      email: 'test@example.com',
      message: 'Hello',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Name is required',
    });
  });

  it('returns 400 when name is empty', async () => {
    const response = await postContact({
      name: '   ',
      email: 'test@example.com',
      message: 'Hello',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Name is required',
    });
  });

  it('returns 400 when email is invalid', async () => {
    const response = await postContact({
      name: 'Test',
      email: 'not-an-email',
      message: 'Hello',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'A valid email is required',
    });
  });

  it('returns 400 when email is missing', async () => {
    const response = await postContact({
      name: 'Test',
      message: 'Hello',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'A valid email is required',
    });
  });

  it('returns 400 when message is missing', async () => {
    const response = await postContact({
      name: 'Test',
      email: 'test@example.com',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Message is required',
    });
  });

  it('returns 400 when message is empty', async () => {
    const response = await postContact({
      name: 'Test',
      email: 'test@example.com',
      message: '',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Message is required',
    });
  });

  it('returns 400 for invalid JSON', async () => {
    const response = await SELF.fetch(CONTACT_URL, {
      method: 'POST',
      headers: JSON_HEADERS,
      body: 'not json',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      success: false,
      error: 'Invalid JSON',
    });
  });

  it('returns 404 for GET requests', async () => {
    const response = await SELF.fetch(CONTACT_URL);
    expect(response.status).toBe(404);
  });

  it('returns 403 when hidden company field is provided', async () => {
    const response = await postContact({
      name: 'Test',
      email: 'test@example.com',
      message: 'test message',
      company: 'test'
    });

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({
      success: false,
      error: 'An error occurred',
    });
  })
});
