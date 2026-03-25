import {describe, it, expect, vi, beforeEach} from 'vitest';
import {renderHook, act} from '@testing-library/react';
import {createMockUseForm, mockReset} from '../../tests/mock-react-hook-form';

import {useContactForm} from '../useContactForm';

vi.mock('react-hook-form', () => ({
  useForm: createMockUseForm({
    name: 'Alastair',
    email: 'test@example.com',
    message: 'Hello there',
    company: '',
  }),
}));

vi.mock('../../utils/api', () => ({
  api: vi.fn(),
}));

import {api} from '../../utils/api';

const mockApi = vi.mocked(api);

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('starts with idle status and no errors', () => {
    const {result} = renderHook(() => useContactForm());

    expect(result.current.status).toBe('idle');
    expect(result.current.errors).toEqual({});
  });

  it('exposes register and onSubmit', () => {
    const {result} = renderHook(() => useContactForm());

    expect(result.current.register).toBeTypeOf('function');
    expect(result.current.onSubmit).toBeTypeOf('function');
  });

  describe('submission', () => {
    async function submit(result: {current: ReturnType<typeof useContactForm>}) {
      await act(() => result.current.onSubmit({preventDefault: vi.fn()} as never));
    }

    it('calls api with correct path and body', async () => {
      mockApi.mockResolvedValue({ok: true, status: 200, data: {success: true}});
      const {result} = renderHook(() => useContactForm());

      await submit(result);

      expect(mockApi).toHaveBeenCalledWith('/v1/contact', {
        method: 'POST',
        body: {name: 'Alastair', email: 'test@example.com', message: 'Hello there', company: ''},
      });
    });

    it('sets success status and resets form on ok response', async () => {
      mockApi.mockResolvedValue({ok: true, status: 200, data: {success: true}});
      const {result} = renderHook(() => useContactForm());

      await submit(result);

      expect(result.current.status).toBe('success');
      expect(mockReset).toHaveBeenCalled();
    });

    it('sets error status on non-ok response', async () => {
      mockApi.mockResolvedValue({ok: false, status: 500, data: {error: 'fail'}});
      const {result} = renderHook(() => useContactForm());

      await submit(result);

      expect(result.current.status).toBe('error');
      expect(mockReset).not.toHaveBeenCalled();
    });

    it('sets error status on network failure', async () => {
      mockApi.mockRejectedValue(new Error('Network error'));
      const {result} = renderHook(() => useContactForm());

      await submit(result);

      expect(result.current.status).toBe('error');
      expect(mockReset).not.toHaveBeenCalled();
    });
  });
});
