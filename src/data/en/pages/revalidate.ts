import { cacheTags } from '@/constants';
import { DefaultPage } from '@/types';

import pages from './root';

const hero: DefaultPage['hero'] = {
  id: 'hero',
  type: 'Secondary',
  theme: 'light',
  data: {
    title: [
      {
        text: 'Seeing ol'
      },
      {
        text: 'd c',
        emphasize: true
      },
      {
        text: 'ontent'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  }
};

const blocks: DefaultPage['blocks'] = {
  'revalidate-form': {
    type: 'RevalidateForm',
    theme: 'dark',
    data: {
      title: [
        {
          text: 'No worries — let’s get you up to date'
        }
      ],
      messages: {
        loading: [{ text: 'Syncing your updates...' }],
        success: [{ text: 'Everything is up to date!' }],
        error: [{ text: 'Oops.. Something went wrong. Let’s try that again.' }]
      },
      fields: {
        tags: {
          label: 'Choose which tags you want to update.',
          data: { all: 'All available tags', ...cacheTags },
          errors: {
            min: 'At least one tag is required.'
          }
        },
        submit: {
          label: [
            {
              text: 'Update Selected Tags'
            }
          ]
        }
      }
    }
  }
};

const revalidatePage: DefaultPage = {
  ...(pages.revalidate as DefaultPage),
  hero,
  blocks
};

export default revalidatePage;
