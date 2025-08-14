import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'Sem estresse'
        },
        {
          text: '!',
          emphasize: true
        }
      ],
      subtitle: [
        {
          text: 'Tem alguma ideia em mente?'
        }
      ],
      action: {
        label: 'Entre em contato'
      }
    },
    locationSeparator: '—',
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'O dev — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.'
          }
        ]
      }
    ],
    madeBy: [
      {
        text: 'Feito com ❤️ por '
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
