import { homeTemplateSchema } from '@/data/template/schemas';
import {
  createTemplateData,
  createTemplateMetadata,
  values as valuesUtil
} from '@/utils';

import { career } from '../career';
import { personal } from '../personal';
import { projects } from '../projects';
import { values } from '../values';

const metadata = createTemplateMetadata({
  title: 'Home'
});

const data = createTemplateData<typeof homeTemplateSchema>({
  hero: {
    title: [
      {
        type: 'alignText',
        align: 'left',
        children: [{ text: 'Beyond code' }]
      },
      {
        type: 'alignText',
        align: 'right',
        children: [
          {
            text: ' boundaries'
          },
          { text: ' &', emphasize: true }
        ]
      },
      {
        type: 'alignText',
        align: 'center',
        children: [
          {
            text: ' results'
          },
          {
            text: ' '
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Hey there! I’m Richard, a Computer Science student at UFRGS. Also a developer who cares building solid and scalable products.'
              }
            ]
          }
        ]
      }
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Hey there! I’m Richard, a Computer Science student at UFRGS — also a developer who cares building solid and scalable products.'
          }
        ]
      }
    ],
    left: [
      {
        type: 'icon',
        src: '/icons/smile.svg',
        animation: 'rotateRight'
      }
    ],
    right: [
      {
        type: 'paragraph',
        children: [
          {
            text: '(2026)'
          }
        ]
      }
    ]
  },
  mission: {
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'That’s my mission — Each line of code improve my skills. Every project is an opportunity to inspire clients, coworkers, and the community. Consistent repetition breeds excellence.'
          }
        ]
      }
    ],
    items: {
      improve: {
        text: [
          {
            text: 'Improve'
          }
        ],
        separator: [
          {
            type: 'icon',
            src: '/icons/rocket.svg'
          }
        ]
      },
      inspire: {
        text: [
          {
            text: 'Inspire'
          }
        ],
        separator: [
          {
            type: 'icon',
            src: '/icons/globe.svg'
          }
        ]
      },
      repeat: {
        text: [
          {
            text: 'Repeat'
          }
        ],
        separator: [
          {
            type: 'icon',
            src: '/icons/smile.svg'
          }
        ]
      }
    }
  },
  career: {
    title: [
      {
        type: 'alignText',
        align: 'left',
        children: [
          {
            text: 'Caree'
          },
          {
            text: 'r',
            emphasize: true
          }
        ]
      },
      {
        type: 'alignText',
        align: 'right',
        children: [
          {
            text: 'I',
            emphasize: true
          },
          {
            text: 'nsight'
          }
        ]
      }
    ],
    empty: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Sorry, career experiences not found.'
          }
        ]
      }
    ],
    items: career
  },
  projects: {
    title: [
      {
        type: 'alignText',
        align: 'left',
        children: [
          {
            text: 'Wor'
          },
          {
            text: 'k',
            emphasize: true
          }
        ]
      },
      {
        type: 'alignText',
        align: 'right',
        children: [
          {
            text: 'I',
            emphasize: true
          },
          {
            text: 'nsight'
          }
        ]
      }
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Here are some examples of'
          },
          {
            text: ' my best works',
            bold: true
          }
        ]
      }
    ],
    empty: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Sorry, selected projects not found.'
          }
        ]
      }
    ],
    items: projects
  },
  but: {
    title: 'But',
    description: 'it’s not just about the tech.'
  },
  about: {
    title: [
      {
        type: 'alignText',
        align: 'left',
        children: [
          {
            text: 'Perso'
          },
          {
            text: 'n',
            emphasize: true
          }
        ]
      },
      {
        type: 'alignText',
        align: 'right',
        children: [
          {
            text: 'I',
            emphasize: true
          },
          {
            text: 'nsight'
          }
        ]
      }
    ],
    templates: {
      base: [
        'item-0',
        'item-1',
        'item-2',
        'item-3',
        'item-4',
        'item-5',
        'item-6'
      ],
      sm: ['item-0 item-0', 'item-1 item-2', 'item-3 item-4', 'item-5 item-6'],
      lg: [
        '. item-0 item-0',
        '. item-0 item-0',
        'item-1 item-2 item-3',
        'item-1 item-2 item-4',
        'item-5 item-5 item-6',
        'item-5 item-5 item-6'
      ]
    },
    items: {
      about: {
        type: 'DescriptionCard',
        data: {
          title: '#about',
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: '🤟 Hey —',
                  bold: true
                },
                {
                  text: ' I’m someone who enjoys spending time with friends and family, but a large part of my leisure is spent gaming — rogue-like, souls-like, metroidvania, precision platformer, … — which challenge and entertain me. Even though I’m more reserved, I value integrity and friendliness in the way I connect with others.'
                }
              ]
            },
            {
              type: 'paragraph',
              children: [
                {
                  text: 'I also believe in enjoying the small moments — whether feeling the sun on my face, playing an intense game, or having a good conversation, these are the moments that truly matter.'
                }
              ]
            }
          ]
        }
      },
      location: {
        type: 'BoldCard',
        data: {
          icon: '/icons/globe.svg',
          description: [
            {
              text: `Based in ${personal.location.country} ${personal.location.gmt}`
            }
          ]
        }
      },
      values: {
        type: 'MarqueeCard',
        data: {
          icon: '/icons/fingerprint.svg',
          title: [
            {
              text: 'My values'
            }
          ],
          items: valuesUtil(values).map((d) => d.title)
        }
      },
      improving: {
        type: 'SimpleCard',
        data: {
          icon: '/icons/rocket.svg',
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Improving a little bit every day.'
                }
              ]
            }
          ]
        }
      },
      'love-play-games': {
        type: 'SimpleCard',
        data: {
          icon: '/icons/game-controller.svg',
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'I love to play games.'
                }
              ]
            }
          ]
        }
      },
      'local-time': {
        type: 'TimeCard',
        data: {
          title: [
            {
              text: 'My local time'
            }
          ]
        }
      },
      'buy-me-coffee': {
        type: 'LinkCard',
        data: {
          icon: personal.buyCoffee.icon,
          href: personal.buyCoffee.href,
          title: [
            {
              text: 'Buy me a coffee'
            }
          ]
        }
      }
    }
  },
  listAboutPage: {
    items: {
      'list-about-background': {
        text: 'Background',
        separator: '●'
      },
      'list-about-hobbies': {
        text: 'Hobbies',
        separator: '●'
      },
      'list-about-personality': {
        text: 'Personality',
        separator: '●'
      }
    },
    action: {
      href: '/about',
      label: 'Explore'
    }
  },
  cta: {
    description:
      'Let’s turn ideas into efficient solutions together. Let’s make it happen.',
    icons: {
      left: {
        src: '/icons/smile.svg',
        animation: 'rotateRight',
        y: 'top'
      },
      right: {
        src: '/icons/globe.svg',
        animation: 'rotateLeft',
        y: 'bottom'
      }
    }
  }
} as const);

export { data, metadata };
