import { SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
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

describe('POST /contact', () => {
  it('returns success for a valid payload', async () => {
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
});
