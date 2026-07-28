import { Dictionary, t } from 'intlayer';

export default {
  key: 'email-clipboard',
  content: {
    label: t({ en: 'Copy email', pt: 'Copiar email' }),
    copied: t({ en: 'Email copied', pt: 'Email copiado' })
  }
} satisfies Dictionary;
