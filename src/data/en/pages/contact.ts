import { DefaultPage } from '@/types';

import personal from '../personal';
import skills from '../skills';
import pages from './root';

const hero: DefaultPage['hero'] = {
  id: 'hero',
  type: 'Secondary',
  theme: 'light',
  data: {
    title: [
      {
        text: 'Wanna tur'
      },
      {
        text: 'n s',
        emphasize: true
      },
      {
        text: 'ome heads'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  }
};

const blocks: DefaultPage['blocks'] = {
  'contact-form': {
    type: 'ContactForm',
    theme: 'dark',
    data: {
      title: [
        {
          text: 'No worries — I’ve got it covered'
        }
      ],
      optionalLabel: 'optional',
      to: {
        label: [
          {
            text: 'To:'
          }
        ],
        email: personal.email,
        subject: '👋 Hey Richard, I’d like to hire you!'
      },
      messages: {
        loading: [{ text: 'Sending email...' }],
        success: [{ text: 'Email sent!' }],
        error: [{ text: 'Oops.. Please try again.' }]
      },
      fields: {
        name: {
          label: 'Name',
          placeholder: 'John Doe',
          defaultValue: '',
          errors: {
            min: 'Please, that can’t be your name.'
          }
        },
        email: {
          label: 'Email',
          placeholder: 'john@doe.com',
          defaultValue: '',
          errors: {
            email: 'That email adress looks a bit weird.'
          }
        },
        subject: {
          label: 'Subject',
          placeholder: 'I wanna hire you!',
          defaultValue: ''
        },
        message: {
          label: 'Message',
          placeholder:
            '👋 Hey Richard! I would love if you could help me with...',
          defaultValue: '',
          errors: {
            min: 'Come on... you can do better than that.',
            max: 'Come on... take it easy.'
          }
        },
        submit: {
          label: [
            {
              text: 'Send message'
            }
          ]
        }
      }
    }
  },
  skills: {
    type: 'Skills',
    theme: 'dark',
    data: {
      title: [{ text: 'Ski' }, { text: 'll', emphasize: true }, { text: 's' }],
      image: {
        src: '/images/selfie.webp',
        alt: 'Richard Passos, a full-stack developer with short dark hair wearing a red shirt, black jacket, and silver necklace stands in front of a colorful abstract mural.'
      },
      items: skills
    }
  }
};

const contactPage: DefaultPage = {
  ...(pages.contact as DefaultPage),
  hero,
  blocks
};

export default contactPage;
