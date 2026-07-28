import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'menu-drawer',
  content: {
    menu: {
      label: 'Menu',
      open: t({ en: 'Open menu', pt: 'Abrir menu' }),
      close: t({ en: 'Close menu', pt: 'Fechar menu' })
    },
    socials: nest('contact', 'socials'),
    nav: nest('pages', 'main')
  }
} satisfies Dictionary;
