import {vi} from 'vitest';

export const mockReset = vi.fn();

export function createMockUseForm(defaultValues: Record<string, unknown> = {}) {
  return () => ({
    register: vi.fn(() => ({onChange: vi.fn(), onBlur: vi.fn(), ref: vi.fn(), name: ''})),
    handleSubmit: (cb: Function) => async (e: {preventDefault?: () => void}) => {
      e?.preventDefault?.();
      await cb(defaultValues);
    },
    formState: {errors: {}},
    reset: mockReset,
  });
}
