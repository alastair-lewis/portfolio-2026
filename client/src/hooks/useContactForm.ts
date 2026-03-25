import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {contactSchema, type ContactBody} from '@portfolio/shared';

import {api} from '../utils/api';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ContactBody>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {name: '', email: '', message: '', company: ''},
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus('submitting');

    try {
      const {ok} = await api('/v1/contact', {method: 'POST', body: data});

      if (!ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  });

  return {register, errors, status, onSubmit};
}
