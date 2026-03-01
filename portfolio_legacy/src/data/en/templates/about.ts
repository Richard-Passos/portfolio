import { aboutTemplateSchema } from '@/data/template/schemas';
import { createTemplateData, createTemplateMetadata } from '@/utils';

import { values } from '../values';

const metadata = createTemplateMetadata({
  title: 'About',
  description:
    'Explore the journey of a full stack developer: my background, hobbies, mission, values, and personality.'
});

const data = createTemplateData<typeof aboutTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Gotta kno'
      },
      {
        text: 'w',
        emphasize: true
      },
      {
        text: ' m',
        emphasize: true
      },
      {
        text: 'e better'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  },
  images: {
    items: [
      {
        src: '/images/bg.webp',
        alt: 'Richard Passos, a full-stack developer with short hair, stands against a wooden wall, wearing a light-colored T-shirt. Richard Passos has his arms crossed, showcasing a watch and a necklace.'
      },
      {
        src: '/images/selfie.webp',
        alt: 'Richard Passos, a full-stack developer with short dark hair wearing a red shirt, black jacket, and silver necklace stands in front of a colorful abstract mural.'
      },
      {
        src: '/images/bg.webp',
        alt: 'Richard Passos, a full-stack developer wearing a light gray hoodie with "Brooklyn" and other text printed on it stands against a wooden wall, looking to the left.'
      }
    ]
  },
  about: {
    title: [
      { text: 'Who I' },
      {
        text: ' a',
        emphasize: true
      },
      { text: 'm' }
    ],
    texts: [
      {
        id: 'intro',
        title: [{ text: 'Introducion' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'I’ve always been curious and dedicated, but for a while I felt without a clear direction. Starting at UFRGS and diving into development was a turning point: I discovered something that truly motivates and challenges me.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Today, I’m just at the beginning of a long journey, full of learning and opportunities. Every project, every line of code, and every person I meet gives me even more certainty that I’m on the right path.'
              }
            ]
          }
        ]
      },
      {
        id: 'personality',
        title: [{ text: 'Personality' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'I’m a curious and self-taught person who loves exploring new perspectives and cultures, always making the most of life’s little details.'
              }
            ]
          }
        ]
      },
      {
        id: 'mission',
        title: [{ text: 'Mission' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'I’ve a mission to learn, cultivate, and make the most of. Learn from life and people. Cultivate genuine relationships. Make the most of opportunities and moments.'
              }
            ]
          }
        ]
      },
      {
        id: 'hobbies',
        title: [{ text: 'Hobbies' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Gaming, watching series/movies, improving skills, getting into new cultures and enjoying quality time with close friends and family.'
              }
            ]
          }
        ]
      }
    ]
  },
  values: {
    title: [
      {
        text: 'My values'
      }
    ],
    templates: {
      base: ['item-0', 'item-1', 'item-2', 'item-3'],
      sm: ['item-0 item-1', 'item-2 item-3'],
      lg: ['item-0 item-1 .', '. item-2 item-3']
    },
    items: values,
    icons: {
      left: {
        src: '/icons/smile.svg',
        animation: 'rotateRight',
        y: 'bottom'
      },
      right: {
        src: '/icons/globe.svg',
        animation: 'rotateLeft',
        y: 'top'
      }
    }
  }
} as const);

export { data, metadata };
