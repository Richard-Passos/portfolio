import { type Dictionary, t } from 'intlayer';

export default {
  key: 'footer',
  content: {
    action: {
      label: t({ en: 'Get in touch', pt: 'Entre em contato' })
    },
    locationSeparator: '—',
    description: t({
      en: 'The dev — who cares building solid and scalable products with a great user experience.',
      pt: 'O dev — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.'
    }),
    madeBy: t({
      en: 'Made with ❤️ by <a href="https://github.com/Richard-Passos">Richard</a>.',
      pt: 'Feito com ❤️ por <a href="https://github.com/Richard-Passos">Richard</a>.'
    }),
    copyright: '© 2026 <a href="https://github.com/Richard-Passos">Richard</a>.',
    personal: nest('personal'),
    legalPages: {}
  }
} satisfies Dictionary;
