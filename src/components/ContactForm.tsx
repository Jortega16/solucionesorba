'use client';

import { Icon } from '@/components/Icon';
import { PrivacyPolicyModal } from '@/components/PrivacyPolicyModal';
import { SITE } from '@/lib/site';
import Script from 'next/script';
import { type FormEvent, useEffect, useRef, useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdFd7wtAAAAAPeeWLfccpVO5so_mFUd4dJbsa8B';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const formMountTime = useRef<number>(Date.now());

  useEffect(() => {
    formMountTime.current = Date.now();
  }, []);

  async function getRecaptchaToken(): Promise<string> {
    if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') {
      return '';
    }

    // Esperar a que el script esté disponible (hasta 3 segundos)
    const waitForGrecaptcha = async (): Promise<boolean> => {
      for (let i = 0; i < 30; i++) {
        if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
          return true;
        }
        await new Promise((r) => setTimeout(r, 100));
      }
      return false;
    };

    const isReady = await waitForGrecaptcha();
    if (!isReady || !window.grecaptcha) {
      console.warn('Google reCAPTCHA no pudo cargarse a tiempo');
      return '';
    }

    return new Promise<string>((resolve) => {
      try {
        const grecaptcha = window.grecaptcha;
        if (!grecaptcha) {
          resolve('');
          return;
        }

        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, {
              action: 'contact_form',
            });
            resolve(token || '');
          } catch (err) {
            console.warn('reCAPTCHA execution error:', err);
            resolve('');
          }
        });
      } catch (err) {
        console.warn('reCAPTCHA ready error:', err);
        resolve('');
      }
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          phone: data.get('phone'),
          projectType: data.get('project-type'),
          budget: data.get('budget'),
          startDate: data.get('start-date'),
          message: data.get('message'),
          // Campos anti-spam
          fax_number: data.get('fax_number'),
          formLoadedAt: formMountTime.current,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'No se pudo enviar el mensaje.');
      }

      setStatus('success');
      form.reset();
      formMountTime.current = Date.now();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'No se pudo enviar el mensaje.'
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-xl space-y-md">
        <Icon name="check_circle" className="text-verde text-5xl" />
        <h2 className="font-headline-md text-headline-md text-primary">Mensaje enviado</h2>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
          Gracias por contactarnos. Responderemos en un plazo máximo de un día hábil a la dirección indicada.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-label-md text-label-md text-secondary hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form className="space-y-md" onSubmit={handleSubmit}>
        {/* Honeypot anti-spam para bots (invisible para humanos) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1,
            height: 0,
            overflow: 'hidden',
          }}
        >
          <label htmlFor="fax_number">No completar este campo</label>
          <input
            type="text"
            id="fax_number"
            name="fax_number"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {status === 'error' ? (
        <div
          role="alert"
          className="rounded-lg border border-rojo/30 bg-error-container px-md py-sm font-body-md text-on-error-container"
        >
          {errorMessage}
          {errorMessage.includes('no está configurado') ? (
            <p className="mt-sm text-sm">
              Mientras tanto, escríbenos a{' '}
              <a href={`mailto:${SITE.email}`} className="text-secondary underline">
                {SITE.email}
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
            id="name"
            name="name"
            placeholder="Su nombre completo"
            required
            disabled={status === 'loading'}
            type="text"
          />
        </div>
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="company">
            Empresa
          </label>
          <input
            className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
            id="company"
            name="company"
            placeholder="Nombre de la empresa"
            disabled={status === 'loading'}
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">
            Correo
          </label>
          <input
            className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
            id="email"
            name="email"
            placeholder="correo@ejemplo.com"
            required
            disabled={status === 'loading'}
            type="email"
          />
        </div>
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone">
            Teléfono
          </label>
          <input
            className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
            id="phone"
            name="phone"
            placeholder="+506 8000-0000"
            disabled={status === 'loading'}
            type="tel"
          />
        </div>
      </div>
      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="project-type">
          Tipo de proyecto
        </label>
        <select
          className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
          id="project-type"
          name="project-type"
          defaultValue=""
          disabled={status === 'loading'}
        >
          <option disabled value="">
            Seleccione una opción
          </option>
          <option value="web">Desarrollo web</option>
          <option value="software">Software a medida</option>
          <option value="ai">IA y análisis de datos</option>
          <option value="iot">Sistemas ciberfísicos</option>
          <option value="other">Otro / Consultoría</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="budget">Presupuesto aproximado</label>
          <select className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all" id="budget" name="budget" defaultValue="" disabled={status === 'loading'}>
            <option value="">Por definir</option>
            <option value="Menos de $2,500">Menos de $2,500</option>
            <option value="$2,500 a $7,500">$2,500 a $7,500</option>
            <option value="$7,500 a $20,000">$7,500 a $20,000</option>
            <option value="Más de $20,000">Más de $20,000</option>
          </select>
        </div>
        <div className="space-y-xs">
          <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="start-date">Inicio estimado</label>
          <select className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all" id="start-date" name="start-date" defaultValue="" disabled={status === 'loading'}>
            <option value="">Por definir</option>
            <option value="Lo antes posible">Lo antes posible</option>
            <option value="En 1 a 3 meses">En 1 a 3 meses</option>
            <option value="En 3 a 6 meses">En 3 a 6 meses</option>
            <option value="Más adelante">Más adelante</option>
          </select>
        </div>
      </div>
      <div className="space-y-xs">
        <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="w-full bg-surface border border-outline rounded-lg px-md py-sm font-body-md text-body-md input-focus-ring transition-all"
          id="message"
          name="message"
          placeholder="Describa brevemente su necesidad, objetivo o proceso actual..."
          required
          rows={5}
          disabled={status === 'loading'}
        />
      </div>
      <div className="flex items-center gap-sm pt-sm">
        <input
          className="w-5 h-5 rounded border-outline text-secondary focus:ring-secondary transition-all"
          id="terms"
          name="terms"
          required
          disabled={status === 'loading'}
          type="checkbox"
        />
        <label className="font-caption text-caption text-on-surface-variant" htmlFor="terms">
          Acepto la{' '}
          <button
            type="button"
            onClick={() => setPrivacyOpen(true)}
            className="text-secondary underline hover:text-primary transition-colors"
          >
            Política de Privacidad
          </button>{' '}
          y el tratamiento de mis datos.
        </label>
      </div>
      <button
        className="w-full bg-primary text-on-primary py-md rounded-lg font-headline-md text-headline-md hover:bg-neutral-800 active:scale-[0.99] transition-all flex justify-center items-center gap-sm disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar solicitud'}
        <Icon name={status === 'loading' ? 'hourglass_empty' : 'send'} />
      </button>
      </form>

      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
