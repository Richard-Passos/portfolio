import { Dictionary, t } from 'intlayer';

export default {
  key: 'pages',
  content: {
    main: [
      {
        url: '/#work',
        label: t({ en: 'Work', pt: 'Carreira' })
      },
      {
        url: '/#about',
        label: t({ en: 'About', pt: 'Sobre' })
      },
      {
        url: '/#contact',
        label: t({ en: 'Contact', pt: 'Contato' })
      }
    ]
  }
} satisfies Dictionary;
