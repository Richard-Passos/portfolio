import { ErrorPage } from '@/types';

import pages from './root';

const hero: ErrorPage['hero'] = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Something Went Wrong'
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
            text: 'Sorry, something Went Wrong!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Try again'
          }
        ]
      },
      secondary: {
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

const errorPage: ErrorPage = {
  ...(pages.error as ErrorPage),
  hero
};

export default errorPage;
