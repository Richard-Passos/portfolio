import { ErrorPage } from '@/types';

import pages from './root';

const hero: ErrorPage['hero'] = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Not found'
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
            text: 'Sorry, page not found!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Back home'
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
