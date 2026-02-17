import { ErrorPage } from '@/types';

import pages from './root';

const hero: ErrorPage['hero'] = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Não Encontrado'
      },
      {
        text: '!',
        emphasize: true
      }
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Desculpe, pagina não encontrada!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Voltar ao início'
          }
        ],
        href: '/'
      }
    }
  }
};

const notFoundPage: ErrorPage = {
  ...(pages['not-found'] as ErrorPage),
  hero
};

export default notFoundPage;
