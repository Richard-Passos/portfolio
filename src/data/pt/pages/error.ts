import { ErrorPage } from '@/types';

import pages from './root';

const hero: ErrorPage['hero'] = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Algo deu errado'
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
            text: 'Desculpe, algo deu errado!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Tente novamente'
          }
        ]
      },
      secondary: {
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

const errorPage: ErrorPage = {
  ...(pages.error as ErrorPage),
  hero
};

export default errorPage;
