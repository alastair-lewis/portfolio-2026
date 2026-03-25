import {describe, it, expect, vi, beforeEach} from 'vitest';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '../../../tests/i18n-test-utils';

import {ContactForm} from '../ContactForm';

describe('ContactForm', () => {
  it('renders all visible fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', {name: /send/i})).toHaveAttribute(
      'type',
      'submit',
    );
  });

  it('renders a hidden honeypot field', () => {
    render(<ContactForm />);
    const honeypot = screen.getByLabelText(/company/i);
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute('tabindex', '-1');
  });

  it('shows validation errors on blur for empty required fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.click(nameInput);
    await user.tab();

    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });

  it('shows all errors when submitting with empty fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', {name: /send/i}));

    const alerts = await screen.findAllByRole('alert');
    expect(alerts.length).toBeGreaterThanOrEqual(3);
  });

  it('clears error when field is corrected', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i);
    await user.click(nameInput);
    await user.tab();

    expect(await screen.findByRole('alert')).toBeInTheDocument();

    await user.type(nameInput, 'Alastair');
    await waitFor(() => {
      expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    });
  });

  it('does not show errors before interaction', () => {
    render(<ContactForm />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  describe('submission', () => {
    beforeEach(() => {
      vi.restoreAllMocks();
    });

    async function fillForm(user: ReturnType<typeof userEvent.setup>) {
      await user.type(screen.getByLabelText(/name/i), 'Alastair');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/message/i), 'Hello there');
    }

    it('sends a POST request with form data on valid submit', async () => {
      const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({success: true}), {status: 200}),
      );
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillForm(user);
      await user.click(screen.getByRole('button', {name: /send/i}));

      expect(fetchSpy).toHaveBeenCalledWith('http://localhost:8787/v1/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: 'Alastair',
          email: 'test@example.com',
          message: 'Hello there',
          company: '',
        }),
      });
    });

    it('shows success message after successful submit', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({success: true}), {status: 200}),
      );
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillForm(user);
      await user.click(screen.getByRole('button', {name: /send/i}));

      expect(await screen.findByRole('status')).toHaveTextContent(/message sent/i);
    });

    it('shows error message when request fails', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({success: false}), {status: 500}),
      );
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillForm(user);
      await user.click(screen.getByRole('button', {name: /send/i}));

      expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });

    it('shows error message on network failure', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillForm(user);
      await user.click(screen.getByRole('button', {name: /send/i}));

      expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    });

    it('disables form fields while submitting', async () => {
      let resolveFetch: (value: Response) => void;
      vi.spyOn(globalThis, 'fetch').mockImplementation(
        () => new Promise((resolve) => { resolveFetch = resolve; }),
      );
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillForm(user);
      await user.click(screen.getByRole('button', {name: /send/i}));

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeDisabled();
      });
      expect(screen.getByLabelText(/email/i)).toBeDisabled();
      expect(screen.getByLabelText(/message/i)).toBeDisabled();
      expect(screen.getByRole('button', {name: /sending/i})).toBeDisabled();

      resolveFetch!(new Response(JSON.stringify({success: true}), {status: 200}));

      await waitFor(() => {
        expect(screen.getByLabelText(/name/i)).toBeEnabled();
      });
    });
  });
});
