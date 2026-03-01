import { Footer } from '@/types';

const footer: Footer = {
  action: {
    label: 'Get in touch'
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
      text: '© 2026 '
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

export { footer };
