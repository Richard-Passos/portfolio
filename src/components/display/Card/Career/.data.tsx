import { Dictionary, t } from 'intlayer';

export default {
  key: 'career-card',
  content: {
    open: t({ en: 'Open career', pt: 'Abrir carreira' }),
    close: t({ en: 'Close carreira', pt: 'Fechar carreira' }),
    noEnd: t({ en: 'Present', pt: 'Atualmente' })
  }
} satisfies Dictionary;
