import {describe, it, expect, vi, beforeEach} from 'vitest';
import {api} from '../api';

describe('api', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('sends a GET request by default', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ok: true}), {status: 200}),
    );

    await api('/test');

    expect(fetchSpy).toHaveBeenCalledWith('http://localhost:8787/test', {
      method: 'GET',
      headers: {},
      body: undefined,
    });
  });

  it('sends a POST request with JSON body', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({success: true}), {status: 200}),
    );

    await api('/contact', {method: 'POST', body: {name: 'Test'}});

    expect(fetchSpy).toHaveBeenCalledWith('http://localhost:8787/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: '{"name":"Test"}',
    });
  });

  it('returns ok: true for successful responses', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({data: 'value'}), {status: 200}),
    );

    const result = await api('/test');

    expect(result).toEqual({ok: true, status: 200, data: {data: 'value'}});
  });

  it('returns ok: false for error responses', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({error: 'fail'}), {status: 500}),
    );

    const result = await api('/test');

    expect(result).toEqual({ok: false, status: 500, data: {error: 'fail'}});
  });
});
