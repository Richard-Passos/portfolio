import { Dictionary, html, insert, nest, t } from 'intlayer';

export default {
  key: 'footer',
  content: {
    action: {
      email: nest('contact', 'email'),
      label: 'Email'
    },
    description: t({
      en: 'The dev — between algorithms, interfaces, and the pursuit of building something truly great.',
      pt: 'O dev — entre algoritmos, interfaces e a busca por construir algo realmente bom.'
    }),
    madeBy: t({
      en: insert('Made with ❤️ by {{link}}'),
      pt: insert('Feito com ❤️ por {{link}}')
    }),
    copyright: insert('© {{year}} {{link}}'),
    location: nest('location'),
    socials: nest('contact', 'socials')
  }
} satisfies Dictionary;
