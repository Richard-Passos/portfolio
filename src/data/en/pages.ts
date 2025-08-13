import { ContactFormBlockProps } from '@/components/organisms/Blocks/ContactForm';
import { Pages } from '@/types';
import {
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi
} from '@/utils/actions';

import locale from './locale';

const pages = async (): Promise<Pages[]> => {
  const [
    projectsRes,
    personalRes,
    workValuesRes,
    personalValuesRes,
    servicesRes,
    statisticsRes,
    hardSkillsRes,
    softSkillsRes
  ] = await Promise.all([
    projectsApi.get({ locale, isSelected: true }),
    personalApi.get({ locale }),
    valuesApi.get({ id: 'work', locale }),
    valuesApi.get({ id: 'personal', locale }),
    servicesApi.get({ locale }),
    statisticsApi.get({ locale }),
    skillsApi.get({ slug: 'hard', locale }),
    skillsApi.get({ slug: 'soft', locale })
  ]);

  const projects = projectsRes.ok ? projectsRes.data : [];

  const personal = personalRes.ok ? personalRes.data : undefined;

  const workValues = workValuesRes.ok ? workValuesRes.data : [];

  const personalValues = personalValuesRes.ok ? personalValuesRes.data : [];

  const services = servicesRes.ok ? servicesRes.data : [];

  const statistics = statisticsRes.ok ? statisticsRes.data : [];

  const hardSkills = hardSkillsRes.ok ? hardSkillsRes.data : [];

  const softSkills = softSkillsRes.ok ? softSkillsRes.data : [];

  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      hero: {
        id: 'hero',
        type: 'Primary',
        theme: 'light',
        scrollTarget: '#selectedProjects',
        data: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Turning heads' }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                { text: ' &', emphasize: true },
                {
                  text: ' captivating'
                }
              ]
            },
            {
              type: 'alignText',
              align: 'center',
              children: [
                {
                  text: ' hearts'
                },
                {
                  text: ' '
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Hey there! I’m Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.'
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
                  text: 'Hey there! I’m Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.'
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
                  text: '(2024)'
                }
              ]
            }
          ]
        }
      },
      blocks: [
        {
          id: 'selectedProjects',
          type: 'ProjectsCatalog',
          theme: 'dark',
          data: {
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
            items: projects.map(({ year: _, ...d }) => d)
          }
        },
        {
          id: 'toExpect',
          type: 'Text',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Here’s what you can expect from me'
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'A thoughtful collaborator',
                    bold: true
                  },
                  {
                    text: ' who thrives on finding innovative solutions and textbracing'
                  },
                  {
                    text: ' new perspectives',
                    bold: true
                  },
                  {
                    text: '. My approach is grounded in'
                  },
                  {
                    text: ' keen observation',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' understanding',
                    bold: true
                  },
                  {
                    text: ' — allowing me to effectively navigate and connect'
                  },
                  {
                    text: ' complex ideas',
                    bold: true
                  },
                  {
                    text: '.'
                  }
                ]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'I aim to blend effortlessly into your work culture, contributing to a'
                  },
                  {
                    text: ' vibrant',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' synergistic atmosphere',
                    bold: true
                  },
                  {
                    text: ' where'
                  },
                  {
                    text: ' ideas',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' goals',
                    bold: true
                  },
                  {
                    text: ' come together'
                  },
                  {
                    text: ' seamlessly',
                    bold: true
                  },
                  {
                    text: '.'
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'listWorkPage',
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: [
              {
                id: 'list-work-mission',
                text: 'Mission',
                separator: '·'
              },
              {
                id: 'list-work-skills',
                text: 'Hard & Soft Skills',
                separator: '·'
              },
              {
                id: 'list-work-services',
                text: 'Services',
                separator: '·'
              }
            ],
            action: {
              href: '/work',
              label: 'Explore'
            }
          }
        },
        {
          id: 'but',
          type: 'But',
          theme: 'light',
          data: {
            title: 'But',
            description: 'it’s not just about the tech.'
          }
        },
        {
          id: 'aboutBentoGrid',
          type: 'BentoGrid',
          theme: 'dark',
          hasAnimation: true,
          data: {
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
            items: [
              {
                id: 'description',
                type: 'Description',
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
                          text: ` I’m Richard an awesome full stack developer from ${personal?.location.country}. When I’m not coding, you can catch me in the gaming world — I’m a huge fan, especially when it comes to rogue-like games.`
                        }
                      ]
                    }
                  ]
                }
              },
              {
                id: 'location',
                type: 'Bold',
                data: {
                  icon: '/icons/globe.svg',
                  description: [
                    {
                      text: 'Based in'
                    },
                    {
                      text: ` ${personal?.location.country}`
                    },
                    {
                      text: `, ${personal?.location.gmt}`
                    }
                  ]
                }
              },
              {
                id: 'values',
                type: 'Marquee',
                data: {
                  icon: '/icons/fingerprint.svg',
                  title: [
                    {
                      text: 'My values'
                    }
                  ],
                  items: personalValues.map((d) => d.title)
                }
              },
              {
                id: 'improving',
                type: 'Simple',
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
              {
                id: 'hobbie',
                type: 'Simple',
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
              {
                id: 'localTime',
                type: 'Time',
                data: {
                  title: [
                    {
                      text: 'My local time'
                    }
                  ]
                }
              },
              {
                id: 'buyCoffee',
                type: 'Link',
                data: {
                  icon: `${personal?.buyCoffee.icon}`,
                  href: `${personal?.buyCoffee.href}`,
                  title: [
                    {
                      text: 'Buy me a coffee'
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: 'listAboutPage',
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: [
              {
                id: 'list-about-background',
                text: 'Background',
                separator: '·'
              },
              {
                id: 'list-about-hobbies',
                text: 'Hobbies',
                separator: '·'
              },
              {
                id: 'list-about-personality',
                text: 'Personality',
                separator: '·'
              }
            ],
            action: {
              href: '/about',
              label: 'Explore'
            }
          }
        },
        {
          id: 'ctaText',
          type: 'CtaText',
          theme: 'dark',
          data: {
            description:
              'Ready to fly your great ideas to digital prominance with a developer who brings both skill and passion to the table? Let’s team up and...',
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
      ],
      metadata: {}
    },
    {
      slug: 'work',
      isSelected: true,
      label: 'Work',
      hero: {
        id: 'hero',
        type: 'Primary',
        theme: 'light',
        scrollTarget: '#selectedProjects',
        data: {
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
                      text: 'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and  crafting high-impact, user-centered solutions.'
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
                  text: 'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and  crafting high-impact, user-centered solutions.'
                }
              ]
            }
          ],
          left: [
            {
              type: 'paragraph',
              children: [
                {
                  text: `${personal?.availability}`
                }
              ]
            }
          ],
          right: [
            {
              type: 'icon',
              src: '/icons/smile.svg',
              animation: 'rotateLeft'
            }
          ]
        }
      },
      blocks: [
        {
          id: 'list-work-mission',
          type: 'ListMission',
          theme: 'dark',
          data: {
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'That’s my mission — Each line of code improve my skills, crafting high-impact solutions. Every project is an opportunity to inspire clients, coworkers, and the community, fostering enduring positive impact. Consistent repetition breeds excellence, driving digital prominence.'
                  }
                ]
              }
            ],
            items: [
              {
                id: 'improve',
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
              {
                id: 'inspire',
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
              {
                id: 'repeat',
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
            ]
          }
        },
        {
          id: 'services',
          type: 'Services',
          theme: 'dark',
          data: {
            title: [
              { text: 'Ser' },
              { text: 'vi', emphasize: true },
              { text: 'ces' }
            ],
            subtitle: [{ text: 'I could help you with...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, a full-stack developer with short hair, wearing a black leather jacket and white shirt, stands against a plain background, crossing his arms.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            })),
            action: {
              label: [
                {
                  text: 'Contact me'
                }
              ]
            }
          }
        },
        {
          id: 'selectedProjects',
          type: 'ProjectsCatalog',
          theme: 'light',
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Selecte'
                  },
                  {
                    text: 'd',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'W',
                    emphasize: true
                  },
                  {
                    text: 'orks'
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
          }
        },
        {
          id: 'why-me',
          type: 'Statistics',
          theme: 'dark',
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Why am'
                  },
                  {
                    text: 'I',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'T',
                    emphasize: true
                  },
                  {
                    text: 'he fit'
                  },
                  {
                    text: '',
                    emphasize: true
                  }
                ]
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'After head turning projects and a captivating personality just'
                  },
                  {
                    text: ' '
                  },
                  {
                    type: 'link',
                    url: '/about',
                    children: [
                      {
                        text: 'one click away'
                      }
                    ]
                  },
                  {
                    text: ', choose me to unlock boundless potential for your next project.'
                  }
                ]
              }
            ],
            subtitle: [
              {
                text: 'Some statistics...'
              }
            ],
            items: statistics
          }
        },
        {
          id: 'hard-skills',
          type: 'Skills',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Hard skills'
              }
            ],
            items: hardSkills
          }
        },
        {
          id: 'soft-skills',
          type: 'Skills',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Soft skills'
              }
            ],
            items: softSkills
          }
        },
        {
          id: 'work-values',
          type: 'Values',
          theme: 'dark',
          data: {
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
            items: workValues,
            icons: {
              left: {
                src: '/icons/globe.svg',
                animation: 'rotateRight',
                y: 'bottom'
              },
              right: {
                src: '/icons/smile.svg',
                animation: 'rotateLeft',
                y: 'top'
              }
            }
          }
        }
      ],
      metadata: {
        title: 'Work',
        description:
          'Explore Richard’s mission, services, selected works, skills, and values as a full stack developer dedicated to delivering exceptional solutions.'
      }
    },
    {
      slug: 'about',
      isSelected: true,
      label: 'About',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'dark',
        data: {
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
        }
      },
      blocks: [
        {
          id: 'selfies',
          type: 'Images',
          theme: 'dark',
          data: {
            items: [
              {
                src: '/images/about-00.webp',
                alt: 'Richard Passos, a full-stack developer with short hair, stands against a wooden wall, wearing a light-colored T-shirt. Richard Passos has his arms crossed, showcasing a watch and a necklace.'
              },
              {
                src: '/images/about-01.webp',
                alt: 'Richard Passos, a full-stack developer stands against a plain background wearing a black leather jacket over a white shirt, with their left hand in the jacket pocket.'
              },
              {
                src: '/images/about-02.webp',
                alt: 'Richard Passos, a full-stack developer wearing a light gray hoodie with "Brooklyn" and other text printed on it stands against a wooden wall, looking to the left.'
              }
            ]
          }
        },
        {
          id: 'who-i-am',
          type: 'About',
          theme: 'dark',
          data: {
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
                        text: 'I’ve always been a curious and dedicated person, but for a while, I felt lost without a clear direction or passion. It wasn’t until I faced life that I discovered my true passion for development, which felt like a light bulb moment.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'This newfound interest was a turning point for me. Learning about the world of development sparked a deep excitement and sense of purpose. Now I have my dreams, purposes, and I know exactly where I wanna be.'
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
                        text: 'I’m a curious and self-taught individual who loves exploring new perspectives and cultures. With a knack for problem-solving and a detail-oriented mindset, I turn complex ideas into clear, practical answers.'
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
                        text: 'Gaming, watching series/movies, improving skills, getting into new cultures and enjoying quality time with close friends.'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'personal-values',
          type: 'Values',
          theme: 'dark',
          data: {
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
            items: personalValues,
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
        }
      ],
      metadata: {
        title: 'About',
        description:
          'Explore the journey of a full stack developer: my background, hobbies, mission, values, and personality.'
      }
    },
    {
      slug: 'contact',
      isSelected: true,
      label: 'Contact',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'light',
        data: {
          title: [
            {
              text: 'Wanna tur'
            },
            {
              text: 'n',
              emphasize: true
            },
            {
              text: ' s',
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
      },
      blocks: [
        {
          id: 'contact-form',
          type: 'ContactForm',
          theme: 'dark',
          transitionProps: {
            'data-theme': 'light',
            reverse: true
          } as ContactFormBlockProps['transitionProps'],
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
              email: personal?.email ?? '',
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
              service: {
                label: 'Service',
                placeholder: 'Select a service...',
                defaultValue: '',
                data: services.map((d) => ({ value: d.slug, label: d.title }))
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
        {
          id: 'services',
          type: 'Services',
          theme: 'dark',
          data: {
            title: [
              { text: 'Ser' },
              { text: 'vi', emphasize: true },
              { text: 'ces' }
            ],
            subtitle: [{ text: 'I could help you with...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, a full-stack developer with short hair, wearing a black leather jacket and white shirt, stands against a plain background, crossing his arms.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            }))
          }
        }
      ],
      metadata: {
        title: 'Contact',
        description:
          'Get in touch! Contact me through the form or email to discuss your project needs and explore my full stack development services.'
      }
    },
    {
      type: 'single-project',
      slug: 'single-project',
      hero: {
        theme: 'dark',
        data: {
          action: {
            label: 'Live site'
          }
        }
      },
      blocks: {
        Images: {
          theme: 'dark',
          data: {
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Here are some'
                  },
                  {
                    text: ' awesome shots',
                    bold: true
                  }
                ]
              }
            ]
          }
        },
        Adjacents: {
          theme: 'dark',
          data: {
            prev: {
              label: 'Prev project'
            },
            next: {
              label: 'Next project'
            }
          }
        }
      }
    },
    {
      type: 'error',
      slug: 'not-found',
      hero: {
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
      },
      blocks: [],
      metadata: {
        title: 'Not Found',
        description:
          'Oops! The page you’re looking for doesn’t exist. Explore my portfolio to find out more about my work as a full stack developer.'
      }
    },
    {
      type: 'error',
      slug: 'error',
      hero: {
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
      },
      blocks: [],
      metadata: {}
    },
    {
      type: 'legal',
      slug: 'privacy-policy',
      label: 'Privacy Policy',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Privac' }, { text: 'y', emphasize: true }]
            },

            {
              type: 'alignText',
              align: 'right',
              children: [{ text: ' P', emphasize: true }, { text: 'olicy' }]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'effective date: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. Introduction' }]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Welcome to Richard Passos’ Portfolio.' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Richard Passos’ Portfolio ("us", "we", or "our") operates '
              },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' (hereinafter referred to as "Service").' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Our Privacy Policy governs your visit to ' },
              { text: 'richardp.vercel.app', bold: true },
              {
                text: ', and explains how we collect, safeguard and disclose information that results from your use of our Service.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our Terms and Conditions ("Terms") govern all use of our Service and together with the Privacy Policy constitutes your agreement with us ("agreement").'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Definitions' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'SERVICE means the richardp.vercel.app website operated by Richard Passos’ Portfolio.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'PERSONAL DATA means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'USAGE DATA is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'COOKIES are small files stored on your device (computer or mobile device).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'DATA CONTROLLER means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'DATA PROCESSORS (OR SERVICE PROVIDERS) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'DATA SUBJECT is any living individual who is the subject of Personal Data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'THE USER is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. Information Collection and Use' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We collect several different types of information for various purposes to provide and improve our Service to you.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. Types of Data Collected' }]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Personal Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              { type: 'li', children: [{ text: 'Email address' }] },
              { type: 'li', children: [{ text: 'First name and last name' }] },
              { type: 'li', children: [{ text: 'Phone number' }] },
              {
                type: 'li',
                children: [
                  {
                    text: 'Address, Country, State, Province, ZIP/Postal code, City'
                  }
                ]
              },
              { type: 'li', children: [{ text: 'Cookies and Usage Data' }] }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Usage Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device ("Usage Data").'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Location Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use and store information about your location if you give us permission to do so ("Location Data"). We use this data to provide features of our Service, to improve and customize our Service.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You can enable or disable location services when you use our Service at any time by way of your device settings.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Tracking Cookies Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Examples of Cookies we use:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Session Cookies: We use Session Cookies to operate our Service.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Preference Cookies: We use Preference Cookies to remember your preferences and various settings.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Security Cookies: We use Security Cookies for security purposes.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Advertising Cookies: Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Other Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, NDA agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Use of Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Richard Passos’ Portfolio uses the collected data for various purposes:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [{ text: 'to provide and maintain our Service;' }]
              },
              {
                type: 'li',
                children: [
                  { text: 'to notify you about changes to our Service;' }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to allow you to participate in interactive features of our Service when you choose to do so;'
                  }
                ]
              },
              {
                type: 'li',
                children: [{ text: 'to provide customer support;' }]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to gather analysis or valuable information so that we can improve our Service;'
                  }
                ]
              },
              {
                type: 'li',
                children: [{ text: 'to monitor the usage of our Service;' }]
              },
              {
                type: 'li',
                children: [
                  { text: 'to detect, prevent and address technical issues;' }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to fulfil any other purpose for which you provide it;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'in any other way we may describe when you provide the information;'
                  }
                ]
              },
              {
                type: 'li',
                children: [{ text: 'for any other purpose with your consent.' }]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '6. Retention of Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '7. Transfer of Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you are located outside Brasil and choose to provide information to us, please note that we transfer the data, including Personal Data, to Brasil and process it there.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Richard Passos’ Portfolio will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '8. Disclosure of Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may disclose personal information that we collect, or you provide:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [{ text: 'Disclosure for Law Enforcement.' }]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.'
                  }
                ]
              },
              { type: 'li', children: [{ text: 'Business Transaction.' }] },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Other cases. We may disclose your information also:'
                  }
                ]
              },
              {
                type: 'list',
                listType: 'unordered',
                children: [
                  {
                    type: 'li',
                    children: [{ text: 'to our subsidiaries and affiliates;' }]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'to contractors, service providers, and other third parties we use to support our business;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'to fulfill the purpose for which you provide it;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'for the purpose of including your company’s logo on our website;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'for any other purpose disclosed by us when you provide the information;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      { text: 'with your consent in any other cases;' }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '9. Security of Data' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '10. Your Data Protection Rights Under General Data Protection Regulation (GDPR)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at '
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'In certain circumstances, you have the following data protection rights:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'the right to access, update or to delete the information we have on you;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'the right to object. You have the right to object to our processing of your Personal Data;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'the right of restriction. You have the right to request that we restrict the processing of your personal information;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '11. Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law’s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'According to CalOPPA we agree to the following:' }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [{ text: 'users can visit our site anonymously;' }]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'our Privacy Policy link includes the word “Privacy”, and can easily be found on the home page of our website;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'users will be notified of any privacy policy changes on our Privacy Policy Page;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'users are able to change their personal information by emailing us at '
                  },
                  { text: 'hi.richardp@gmail.com', bold: true },
                  { text: '.' }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Our Policy on “Do Not Track” Signals:' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.1. What personal information we have about you. If you make this request, we will return to you:',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.1. The categories of personal information we have collected about you.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.2. The categories of sources from which we collect your personal information.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.3. The business or commercial purpose for collecting or selling your personal information.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.4. The categories of third parties with whom we share personal information.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.5. The specific pieces of personal information we have collected about you.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.3. To stop selling your personal information. We don’t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a “sale” under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you submit a request to stop selling your personal information, we will stop making such transfers.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'To exercise your California data protection rights described above, please send your request(s) by email: ',
                bold: true
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '13. Service Providers' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may employ third party companies and individuals to facilitate our Service (',
                bold: true
              },
              { text: '“Service Providers”', bold: true },
              {
                text: '), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '14. Analytics' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use third-party Service Providers to monitor and analyze the use of our Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '15. CI/CD tools' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use third-party Service Providers to automate the development process of our Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '16. Behavioral Remarketing' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '17. Links to Other Sites' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'For example, the outlined ', bold: true },
              { text: 'privacy policy', italic: true },
              { text: ' has been made using ', bold: true },
              { text: 'PolicyMaker.io', bold: true },
              {
                text: ', a free tool that helps create high-quality legal documents. PolicyMaker’s ',
                bold: true
              },
              { text: 'privacy policy generator', italic: true },
              { text: ' is an easy-to-use tool for creating a ', bold: true },
              { text: 'privacy policy for blog', italic: true },
              { text: ', website, e-commerce store or mobile app.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '18. Children’s Privacy' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our Services are not intended for use by children under the age of 18 (',
                bold: true
              },
              { text: '“Child”', italic: true },
              { text: ' or ', bold: true },
              { text: '“Children”', italic: true },
              { text: ').' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '19. Changes to This Privacy Policy' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update “effective date” at the top of this Privacy Policy.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '20. Contact Us' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you have any questions about this Privacy Policy, please contact us by email: '
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              { text: '.' }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'This ' },
              {
                type: 'link',
                url: 'https://policymaker.io/privacy-policy/',
                children: [{ text: 'Privacy Policy' }]
              },
              { text: ' was created for ' },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' by ' },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [{ text: 'PolicyMaker.io' }]
              },
              { text: ' on 2024-09-18.' }
            ]
          }
        ]
      },
      metadata: {
        title: 'Privacy Policy',
        description:
          'Explore our privacy policy outlining how we protect your data and ensure your rights while you use our services.'
      }
    },
    {
      type: 'legal',
      slug: 'terms-and-conditions',
      label: 'Terms and Conditions',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [
                { text: 'Term' },
                { text: 's', emphasize: true },
                { text: ' &', emphasize: true }
              ]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [{ text: ' C', emphasize: true }, { text: 'onditions' }]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'last updated: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. Introduction' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Welcome to ' },
              { text: 'Richard Passos’ Portfolio', bold: true },
              { text: ' (“Company”, “we”, “our”, “us”)!' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at '
              },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' (together or individually “Service”) operated by ' },
              { text: 'Richard Passos’ Portfolio', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound by them.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at '
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              {
                text: ' so we can try to find a solution. These Terms apply to all visitors, users, and others who wish to access or use Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Communications' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at '
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. Contests, Sweepstakes and Promotions' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Any contests, sweepstakes or other promotions (collectively, “Promotions”) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. Content' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Content found on or through this Service are the property of Richard Passos’ Portfolio or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Prohibited Uses' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.1. In any way that violates any applicable national or international law or regulation.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.3. To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.6. To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Additionally, you agree not to:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through Service.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Use any device, software, or routine that interferes with the proper working of Service.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Attack Service via a denial-of-service attack or a distributed denial-of-service attack.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Take any action that may damage or falsify Company rating.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Otherwise attempt to interfere with the proper working of Service.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '6. Analytics' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may use third-party Service Providers to monitor and analyze the use of our Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '7. No Use By Minors' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '8. Intellectual Property' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Richard Passos’ Portfolio and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Richard Passos’ Portfolio.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '9. Copyright Policy' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (“Infringement”) of any person or entity.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to ',
                bold: true
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              {
                text: ', with the subject line: “Copyright Infringement” and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You may be held accountable for damages (including costs and attorneys’ fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: '10. ', bold: true },
              {
                text: 'DMCA Notice and Procedure for Copyright Infringement Claims',
                bold: true
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright’s interest;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'identification of the URL or other specific location on Service where the material that you claim is infringing is located;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  { text: 'your address, telephone number, and email address;' }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You can contact our Copyright Agent via email at ',
                bold: true
              },
              { text: 'hi.richardp@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '11. Error Reporting and Feedback' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'You may provide us either directly at ', bold: true },
              { text: 'hi.richardp@gmail.com', bold: true },
              {
                text: ' or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '12. Links To Other Web Sites' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our Service may contain links to third party web sites or services that are not owned or controlled by Richard Passos’ Portfolio.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Richard Passos’ Portfolio has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'For example, the outlined ' },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'Terms of Use' }]
              },
              { text: ' have been created using ' },
              {
                type: 'link',
                url: 'https://policymaker.io/',
                children: [{ text: 'PolicyMaker.io' }]
              },
              {
                text: ', a free web application for generating high-quality legal documents. PolicyMaker’s '
              },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'Terms and Conditions generator' }]
              },
              {
                text: ' is an easy-to-use free tool for creating an excellent standard Terms of Service template for a website, blog, e-commerce store or app.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '13. Disclaimer Of Warranty' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '14. Limitation Of Liability' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '15. Termination' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If you wish to terminate your account, you may simply discontinue using Service.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '16. Governing Law' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'These Terms shall be governed and construed in accordance with the laws of Brasil, which governing law applies to agreement without regard to its conflict of law provisions.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '17. Changes To Service' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '18. Amendments To Terms' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '19. Waiver And Severability' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '20. Acknowledgement' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '21. Contact Us' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Please send your feedback, comments, requests for technical support by email: '
              },
              { text: 'hi.richardp@gmail.com', bold: true }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'These ' },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'Terms of Service' }]
              },
              { text: ' were created for ' },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' by ' },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [{ text: 'PolicyMaker.io' }]
              },
              { text: ' on 2024-09-18.' }
            ]
          }
        ]
      },
      metadata: {
        title: 'Terms and Conditions',
        description:
          'Explore the Terms and Conditions for using Richard Passos’ portfolio, ensuring transparency and security in your experience.'
      }
    },
    {
      type: 'legal',
      slug: 'disclaimer',
      label: 'Disclaimer',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [
                {
                  text: 'D',
                  emphasize: true
                },
                {
                  text: 'isclaimer'
                }
              ]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'last updated: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'WEBSITE DISCLAIMER' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'The information provided by ', bold: false },
              { text: 'Richard Passos’ Portfolio', bold: true },
              { text: ' (“Company”, “we”, “our”, “us”) on ', bold: false },
              { text: 'richardp.vercel.app', bold: true },
              {
                text: ' (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'EXTERNAL LINKS DISCLAIMER' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'For example, the outlined ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'Disclaimer'
                  }
                ]
              },
              { text: ' has been created using ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io/',
                children: [
                  {
                    text: 'PolicyMaker.io'
                  }
                ]
              },
              {
                text: ', a free web application for generating high-quality legal documents. PolicyMaker’s ',
                bold: false
              },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'disclaimer generator'
                  }
                ]
              },
              {
                text: ' is an easy-to-use tool for creating an excellent sample Disclaimer template for a website, blog, eCommerce store or app.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'TESTIMONIALS DISCLAIMER' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'YOUR INDIVIDUAL RESULTS MAY VARY.' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity, where the full testimonial contained extraneous information not relevant to the general public.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'ERRORS AND OMISSIONS DISCLAIMER' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Richard Passos’ Portfolio is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'In no event will Richard Passos’ Portfolio, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'LOGOS AND TRADEMARKS DISCLAIMER' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'All logos and trademarks of third parties referenced on richardp.vercel.app are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Richard Passos’ Portfolio by such owners.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'CONTACT US' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: ',
                bold: false
              },
              { text: 'hi.richardp@gmail.com', bold: true }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'This ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'Disclaimer'
                  }
                ]
              },
              { text: ' was created for ', bold: false },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' by ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [
                  {
                    text: 'PolicyMaker.io'
                  }
                ]
              },
              { text: ' on 2024-09-18.', bold: false }
            ]
          }
        ]
      },
      metadata: {
        title: 'Disclaimer',
        description:
          'Explore our disclaimer outlining the limits of liability and responsibilities in using Richard Passos’ portfolio. Transparency for your peace of mind.'
      }
    },
    {
      type: 'legal',
      slug: 'cookies-policy',
      label: 'Cookies Policy',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Cookie' }, { text: 's', emphasize: true }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [{ text: ' P', emphasize: true }, { text: 'olicy' }]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'effective date: 2024-09-20' }]
            }
          ]
        },
        data: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'In this Cookie Policy we will provide you with detailed information on how Richard Passos’ Portfolio (hereinafter - the “we” or “our”), shall undertake to ensure the security of personal information and the protection of rights of the visitors and users of the websites (hereinafter - the “Visitors”, “You”) while you use our websites including but not limited to richardp.vercel.app (hereinafter - the “Site”) and the content on it.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. What is a cookie?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'A cookie is a small file placed onto your device that enables our Site features and functionality. For example, cookies can enable us to identify your device and secure your access to the Site. Cookies also allow the Site to remember information about your browsing on the Site for a while and to recognize you the next time you visit the Site. All this allows us to give you the opportunity to use the Site comfortably and to make the Site even more user-friendly.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Why do we use cookies?' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'We use cookies for the following main purposes:' }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'To ensure efficient and safe functioning of the Site. We use cookies to enable and support our security features, and to help us detect malicious activity on our Site.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'To understand, improve, and research products, features, and services, including when you access our Site from other websites or devices such as your computer or your mobile device.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'To recognize the returning visitors of the Site. Cookies help us show you the right information and personalize your experience. Cookies also help avoiding re-registration or re-filling of the information by you each time you visit the Site.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'To analyze your habits so that the functioning of the Site would be convenient, efficient and would conform to your needs and expectations.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'To measure the flows of the information and data being sent to our Site. We use the cookies for accumulation of statistical data about the number of users of the Site and their use of the Site.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. What cookies do we use?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Each time you visit our Site, the long-term (persistent) cookies may be created, which stay in your browser after you sign-up and will be read by us when you return to our Site and not deleted after you finish browsing our Site, and the short-term (session) cookies, which expire or are deleted after you finish browsing our Site (i.e. they usually last during the current visit to our Site or browsing session).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Cookies used by the Company:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Strictly required or necessary cookies. These cookies are required for the operation of our Site. They include, for example, cookies that enable storage of information filled by you during the browsing session, enable you to log into secure areas of our Site. Without these cookies operation of the Site would be impossible or its functioning may be severely affected.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Preferences cookies. These improve the functional performance of our Site and make it easier for you to use. These cookies remember the settings selected by the Visitors (for example, the settings of language or currency). With the use of these cookies, the Visitors may avoid the changes of settings during each visit of the Site. These cookies also remember changes made by you in the Site (for example, in case you leave comment on the Site). These cookies do not track your behavior in other websites.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Analytics and Statistics. These cookies show us if the Visitor has visited our Site before. The analytic cookies allow us to recognize and count the number of users of our website and see how such users navigate through our Site. We also use cookies to understand, improve, and research products, features, and services. For instance, analytical cookies may show us, which websites are visited more frequently, help us to record dysfunctionalities of the Site, etc.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Third-party cookies:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'We use Google Analytics, a web analysis service provided by Google, Inc (hereinafter referred to as “Google”). The information collected by Google Analytics is transmitted to and stored with Google. Google may transmit the information collected by Google Analytics to the third parties as required by the law or when those third parties process the information in the name of Google. We recommend consulting the Google Privacy and Cookies Policy on a separate and regular basis.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. How to refuse or block cookies?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Many web browsers are set so that they would automatically accept all cookies.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You may refuse and make a preference which cookies you allow by choosing it in our Cookie Consent Banner. Also all the cookies will be set if you accept all by clicking “Accept All” on our Cookie Consent Banner.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'The Visitors may, at their discretion, manage, block or delete cookies, if the settings of their browser or device enable them to do so. Nevertheless, if you refuse or block the cookies or other similar technologies, some functions of the Site may be inaccessible to you or they may operate not properly.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'We draw your attention that necessary cookies are critical for functioning of our Site, and in case of your objections, some features of the Site may not work or may not work properly.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You may require that we delete all the data about you, as collected and processed with the help of the cookies, by contacting to the email address hi.richardp@gmail.com.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You can opt out of Google Analytics without affecting how you visit our Site. For more information on opting out of being tracked by Google Analytics across all websites you use, visit this Google page: https://tools.google.com/dlpage/gaoptout.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'You may find more information about how to delete cookies, as well as the other useful information related to the use of the cookies, on the website http://www.allaboutcookies.org/.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Do we update Cookie Policy?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This Cookie Policy may be updated by us from time to time. We will inform you about the updates, by providing the new version of the Cookie Policy. For this reason, we recommend you periodically visit our Site, where you will always find the latest version of this Cookie Policy.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This Cookie Policy shall be applied from the date of announcement of it on the Site.'
              }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              {
                text: 'This Policy was created with the help of the '
              },
              {
                type: 'link',
                url: 'https://termshub.io/cookie-policy?utm_source=referral&utm_medium=generated_documents&utm_campaign=referral_documents&utm_content=cp_th_text',
                children: [{ text: 'TermsHub.io' }]
              },
              { text: '.' }
            ]
          }
        ]
      },
      metadata: {
        title: 'Cookies Policy',
        description:
          'Discover how we use cookies to enhance your experience on Richard Passos’ Portfolio. Learn about your choices and our commitment to privacy.'
      }
    }
  ];
};

export default pages;
