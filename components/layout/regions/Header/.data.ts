import { type Dictionary, t } from 'intlayer';

const Content = {
  key: 'header',
  content: {
    menu: {
      title: t({
        en: 'The Menu',
        pt: 'O menu'
      }),
      label: 'Menu',
      open: {
        label: t({ en: 'Open menu', pt: 'Abrir' })
      },
      close: {
        label: t({ en: 'Close menu', pt: 'Fechar menu' })
      }
    },
    locale: {
      label: t({ en: 'Your locale', pt: 'Sua localidade' })
    },
    navItems: [
      { url: '/', label: t({ en: 'Home', pt: 'Início' }) },
      { url: '/about', label: t({ en: 'About', pt: 'Sobre' }) },
      { url: '/contact', label: t({ en: 'Contact', pt: 'Contato' }) }
    ]
  }
} satisfies Dictionary;

export default Content;
