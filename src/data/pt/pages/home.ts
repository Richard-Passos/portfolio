import { DefaultPage } from '@/types';
import { values as valuesUtil } from '@/utils';

import career from '../career';
import personal from '../personal';
import projects from '../projects';
import values from '../values';
import pages from './root';

const hero: DefaultPage['hero'] = {
  type: 'Primary',
  theme: 'light',
  data: {
    title: [
      {
        type: 'alignText',
        align: 'left',
        children: [{ text: 'Além de tech' }]
      },
      {
        type: 'alignText',
        align: 'right',
        children: [
          {
            text: ' algoritmos'
          },
          { text: ' &', emphasize: true }
        ]
      },
      {
        type: 'alignText',
        align: 'center',
        children: [
          {
            text: ' resultados'
          },
          {
            text: ' '
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Olá! Eu sou Richard, estudante de Ciência da Computação na UFRGS — também um dev que se preocupa em construir produtos sólidos e escaláveis.'
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
            text: 'Olá! Eu sou Richard, estudante de Ciência da Computação na UFRGS — também um dev que se preocupa em construir produtos sólidos e escaláveis.'
          }
        ]
      }
    ],
    left: [
      {
        type: 'icon',
        src: '/icons/smile.svg',
        animation: 'rotateLeft'
      }
    ],
    right: [
      {
        text: '(2026)'
      }
    ]
  }
};

const blocks: DefaultPage['blocks'] = {
  'list-work-mission': {
    type: 'ListMission',
    theme: 'dark',
    data: {
      description: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções de alto impacto. Cada projeto é uma oportunidade para inspirar clientes, colegas e a comunidade. A repetição gera excelência, impulsionando o destaque digital.'
            }
          ]
        }
      ],
      items: {
        improve: {
          text: [
            {
              text: 'Melhorar'
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
              text: 'Inspirar'
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
              text: 'Repetir'
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
    }
  },
  career: {
    type: 'CareerCatalog',
    theme: 'dark',
    data: {
      title: [
        {
          type: 'alignText',
          align: 'left',
          children: [
            {
              text: 'Visã'
            },
            {
              text: 'o da',
              emphasize: true
            }
          ]
        },
        {
          type: 'alignText',
          align: 'right',
          children: [
            {
              text: 'C',
              emphasize: true
            },
            {
              text: 'arreira'
            }
          ]
        }
      ],
      empty: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Desculpe, experiências da carreira não encontradas.'
            }
          ]
        }
      ],
      items: career
    }
  },
  'selected-projects': {
    type: 'ProjectsCatalog',
    theme: 'dark',
    data: {
      title: [
        {
          type: 'alignText',
          align: 'left',
          children: [
            {
              text: 'Visã'
            },
            {
              text: 'o dos',
              emphasize: true
            }
          ]
        },
        {
          type: 'alignText',
          align: 'right',
          children: [
            {
              text: 'P',
              emphasize: true
            },
            {
              text: 'rojetos'
            }
          ]
        }
      ],
      description: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Alguns dos '
            },
            {
              text: 'meus projetos',
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
              text: 'Desculpe, projetos selecionados não encontrados.'
            }
          ]
        }
      ],
      items: projects
    }
  },
  but: {
    type: 'But',
    theme: 'light',
    data: {
      title: 'Mas',
      description: 'não é só sobre tecnologia.'
    }
  },
  aboutBentoGrid: {
    type: 'BentoGrid',
    theme: 'dark',
    data: {
      title: [
        {
          type: 'alignText',
          align: 'left',
          children: [
            {
              text: 'Visã'
            },
            {
              text: 'o da',
              emphasize: true
            }
          ]
        },
        {
          type: 'alignText',
          align: 'right',
          children: [
            {
              text: 'P',
              emphasize: true
            },
            {
              text: 'essoa'
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
        sm: [
          'item-0 item-0',
          'item-1 item-2',
          'item-3 item-4',
          'item-5 item-6'
        ],
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
            title: '#sobre',
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: '🤟 Oi —',
                    bold: true
                  },
                  {
                    text: ' sou alguém que gosta de passar meu tempo com amigos e família, mas grande parte do meu lazer está nos jogos — rogue-like, souls-like, metroidvania, precision platformer, ... — que me desafiam e me divertem. Mesmo sendo mais reservado, valorizo a integridade e a simpatia na forma de me conectar com os outros.'
                  }
                ]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Acredito em aproveitar também os pequenos momentos — seja sentindo o sol no rosto, jogando uma partida intensa ou uma boa conversa, são esses momentos que realmente importam.'
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
                text: `Localizado no ${personal.location.country} ${personal.location.gmt}`
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
                text: 'Meus valores'
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
                    text: 'Melhorando um pouco a cada dia.'
                  }
                ]
              }
            ]
          }
        },
        hobbie: {
          type: 'SimpleCard',
          data: {
            icon: '/icons/game-controller.svg',
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Adoro jogar video-game.'
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
                text: 'Meu horário local'
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
                text: 'Me compre um café'
              }
            ]
          }
        }
      }
    }
  },
  listAboutPage: {
    type: 'ListPage',
    theme: 'dark',
    data: {
      items: {
        'list-about-background': {
          text: 'História',
          separator: '·'
        },
        'list-about-personality': {
          text: 'Personalidade',
          separator: '·'
        },
        'list-about-hobbies': {
          text: 'Hobbies',
          separator: '·'
        }
      },
      action: {
        href: '/about',
        label: 'Explorar'
      }
    }
  },
  ctaText: {
    type: 'CtaText',
    theme: 'dark',
    data: {
      description:
        'Vamos juntos transformar ideias em soluções eficientes. Vamos fazer acontecer.',
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
  }
};

const homePage: DefaultPage = {
  ...(pages.home as DefaultPage),
  hero,
  blocks
};

export default homePage;
