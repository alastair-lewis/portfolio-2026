import {useTranslation} from 'react-i18next';

import {useContactForm} from '../../hooks/useContactForm';
import {classNames} from '../../utils/classNames';
import {Button} from '../ui/Button/Button';
import styles from './ContactForm.module.css';

const visibleFields = ['name', 'email', 'message'] as const;

export function ContactForm() {
  const {t} = useTranslation();
  const {register, errors, status, onSubmit} = useContactForm();
  const isSubmitting = status === 'submitting';

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <fieldset className={styles.fieldset} disabled={isSubmitting}>
        {visibleFields.map((field) => {
          const error = errors[field];
          const id = `contact-${field}`;
          const errorId = `${id}-error`;

          return (
            <div key={field} className={styles.field}>
              <label htmlFor={id} className={styles.label}>
                {t(`contact.form.${field}_label`)}
              </label>
              {field === 'message' ? (
                <textarea
                  id={id}
                  className={classNames(styles.textarea, error && styles.inputError)}
                  placeholder={t(`contact.form.${field}_placeholder`)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                  {...register(field)}
                />
              ) : (
                <input
                  id={id}
                  type={field === 'email' ? 'email' : 'text'}
                  className={classNames(styles.input, error && styles.inputError)}
                  placeholder={t(`contact.form.${field}_placeholder`)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                  {...register(field)}
                />
              )}
              {error && (
                <span id={errorId} className={styles.errorText} role="alert">
                  {error.message}
                </span>
              )}
            </div>
          );
        })}

        <div className={styles.honeypot}>
          <label htmlFor="contact-company">Company</label>
          <input
            id="contact-company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register('company')}
          />
        </div>

        <div className={styles.actions}>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
          </Button>
        </div>
      </fieldset>

      {status === 'success' && (
        <p className={styles.successText} role="status">
          {t('contact.form.success')}
        </p>
      )}
      {status === 'error' && (
        <p className={styles.errorBanner} role="alert">
          {t('contact.form.error')}
        </p>
      )}
    </form>
  );
}
