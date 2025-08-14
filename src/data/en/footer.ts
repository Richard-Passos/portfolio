import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'No worries'
        },
        {
          text: '!',
          emphasize: true
        }
      ],
      subtitle: [
        {
          text: 'Thinking of something?'
        }
      ],
      action: {
        label: 'Get in touch'
      }
    },
    locationSeparator: '—',
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'The dev — who cares building solid and scalable products with a great user experience.'
          }
        ]
      }
    ],
    madeBy: [
      {
        text: 'Made with ❤️ by '
      },
      {
        type: 'link',
        url: 'https://github.com/Richard-Passos',
        children: [
          {
            text: 'Richard'
          }
        ]
      },
      {
        text: '.'
      }
    ],
    copyright: [
      {
        text: '© 2025 '
      },
      {
        type: 'link',
        url: 'https://github.com/Richard-Passos',
        children: [
          {
            text: 'Richard Passos'
          }
        ]
      },
      {
        text: '.'
      }
    ]
  };
};

export default footer;
