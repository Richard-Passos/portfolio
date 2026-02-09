import { Pages } from '@/types';
import {
  careerApi,
  personalApi,
  projectsApi,
  skillsApi,
  valuesApi
} from '@/utils/actions';

import locale from './locale';

const pages = async (): Promise<Pages[]> => {
  const [careerRes, projectsRes, personalRes, personalValuesRes, skillsRes] =
    await Promise.all([
      careerApi.get({ locale }),
      projectsApi.get({ locale, isSelected: true }),
      personalApi.get({ locale }),
      valuesApi.get({ id: 'personal', locale }),
      skillsApi.get({ locale })
    ]);

  const career = careerRes.ok ? careerRes.data : [],
    projects = projectsRes.ok ? projectsRes.data : [],
    personal = personalRes.ok ? personalRes.data : undefined,
    personalValues = personalValuesRes.ok ? personalValuesRes.data : [],
    skills = skillsRes.ok ? skillsRes.data : [];

  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Início',
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
                    text: 'Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções de alto impacto. Cada projeto é uma oportunidade para inspirar clientes, colegas e a comunidade. A repetição gera excelência, impulsionando o destaque digital.'
                  }
                ]
              }
            ],
            items: [
              {
                id: 'improve',
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
              {
                id: 'inspire',
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
              {
                id: 'repeat',
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
            ]
          }
        },
        {
          id: 'career',
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
        {
          id: 'but',
          type: 'But',
          theme: 'light',
          data: {
            title: 'Mas',
            description: 'não é só sobre tecnologia.'
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
            items: [
              {
                id: 'description',
                type: 'Description',
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
              {
                id: 'location',
                type: 'Bold',
                data: {
                  icon: '/icons/globe.svg',
                  description: [
                    {
                      text: 'Localizado no'
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
                      text: 'Meus valores'
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
                          text: 'Melhorando um pouco a cada dia.'
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
                          text: 'Adoro jogar video-game.'
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
                      text: 'Meu horário local'
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
                      text: 'Me compre um café'
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
                text: 'História',
                separator: '·'
              },
              {
                id: 'list-about-personality',
                text: 'Personalidade',
                separator: '·'
              },
              {
                id: 'list-about-hobbies',
                text: 'Hobbies',
                separator: '·'
              }
            ],
            action: {
              href: '/about',
              label: 'Explorar'
            }
          }
        },
        {
          id: 'ctaText',
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
      ],
      metadata: {}
    },
    {
      slug: 'about',
      isSelected: true,
      label: 'Sobre',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'dark',
        data: {
          title: [
            {
              text: 'Mais sobr'
            },
            {
              text: 'e',
              emphasize: true
            },
            {
              text: ' mim'
            },
            {
              text: '!',
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
                src: '/images/bg.webp',
                alt: 'Richard Passos, um desenvolvedor full stack com cabelo curto, está contra uma parede de madeira, vestindo uma camiseta clara. Richard Passos está com os braços cruzados, mostrando um relógio e um colar.'
              },
              {
                src: '/images/selfie.webp',
                alt: 'Richard Passos, desenvolvedor full-stack de cabelo curto e escuro, vestindo uma camisa vermelha, jaqueta preta e colar prateado, está em frente a um mural abstrato colorido.'
              },
              {
                src: '/images/bg.webp',
                alt: 'Richard Passos, um desenvolvedor full stack vestindo um moletom cinza claro com "Brooklyn" e outros textos impressos, está contra uma parede de madeira, olhando para a esquerda.'
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
              { text: 'Quem ' },
              {
                text: 'sou',
                emphasize: true
              }
            ],
            texts: [
              {
                id: 'intro',
                title: [{ text: 'Introdução' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Sempre fui curioso e dedicado, mas por um tempo me senti sem uma direção clara. Começar na UFRGS e me aprofundar no desenvolvimento foi um ponto de virada: descobri algo que realmente me motiva e me desafia.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Hoje, estou apenas no início de um caminho longo, cheio de aprendizado e oportunidades. Cada projeto, cada linha de código e cada pessoa que conheço, me dão ainda mais certeza de que estou no caminho certo.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'personality',
                title: [{ text: 'Personalidade' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Sou uma pessoa curiosa e autodidata que adora explorar novas perspectivas e culturas. Sabendo sempre aproveitar os pequenos detalhes da vida.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'mission',
                title: [{ text: 'Missão' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Tenho uma missão de aprender, cultivar e aproveitar ao máximo. Aprender com a vida e as pessoas. Cultivar relacionamentos genuínos. Aproveitar ao máximo as oportunidades e os momentos.'
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
                        text: 'Jogar, assistir séries/filmes, melhorar habilidades, conhecer novas culturas e aproveitar momentos de qualidade com amigos e familiares.'
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
                text: 'Meus valores'
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
        title: 'Sobre',
        description:
          'Explore a jornada de um desenvolvedor full stack: minha história, hobbies, missão, valores e personalidade.'
      }
    },
    {
      slug: 'contact',
      isSelected: true,
      label: 'Contato',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'light',
        data: {
          title: [
            {
              text: 'Quer m'
            },
            {
              text: 'e c',
              emphasize: true
            },
            {
              text: 'hamar'
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
          data: {
            title: [
              {
                text: 'Sem estresse — eu cuido disso'
              }
            ],
            optionalLabel: 'opcional',
            to: {
              label: [
                {
                  text: 'Para:'
                }
              ],
              email: personal?.email ?? '',
              subject: '👋 Olá Richard, eu gostaria de contratá-lo!'
            },
            messages: {
              loading: [{ text: 'Enviando email...' }],
              success: [{ text: 'Email enviado!' }],
              error: [{ text: 'Oops... Por favor, tente novamente.' }]
            },
            fields: {
              name: {
                label: 'Nome',
                placeholder: 'Fulano Silva',
                defaultValue: '',
                errors: {
                  min: 'Por favor, esse não pode ser seu nome.'
                }
              },
              email: {
                label: 'Email',
                placeholder: 'fulano@silva.com',
                defaultValue: '',
                errors: {
                  email: 'Esse email parece um pouco estranho.'
                }
              },
              subject: {
                label: 'Assunto',
                placeholder: 'Quero te contratar!',
                defaultValue: ''
              },
              message: {
                label: 'Mensagem',
                placeholder:
                  '👋 Olá Richard! Eu adoraria se você pudesse me ajudar com...',
                defaultValue: '',
                errors: {
                  min: 'Vamos lá... você pode fazer melhor que isso.',
                  max: 'Qual é... pega leve.'
                }
              },
              submit: {
                label: [
                  {
                    text: 'Enviar mensagem'
                  }
                ]
              }
            }
          }
        },
        {
          id: 'skills',
          type: 'Skills',
          theme: 'dark',
          data: {
            title: [
              { text: 'Ski' },
              { text: 'll', emphasize: true },
              { text: 's' }
            ],
            image: {
              src: '/images/selfie.webp',
              alt: 'Richard Passos, desenvolvedor full-stack de cabelo curto e escuro, vestindo uma camisa vermelha, jaqueta preta e colar prateado, está em frente a um mural abstrato colorido.'
            },
            items: skills
          }
        }
      ],
      metadata: {
        title: 'Contato',
        description:
          'Entre em contato! Fale comigo através do formulário ou e-mail para discutir suas necessidades de projeto e explorar meus serviços de desenvolvimento full stack.'
      }
    },
    {
      type: 'single-project',
      slug: 'single-project',
      hero: {
        theme: 'dark',
        data: {
          action: {
            label: 'Ir ao site'
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
                    text: 'Aqui estão algumas'
                  },
                  {
                    text: ' ótimas imagens',
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
              label: 'Projeto anterior'
            },
            next: {
              label: 'Próximo projeto'
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
              text: 'Não Encontrado'
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
                  text: 'Desculpe, pagina não encontrada!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Voltar ao início'
                }
              ],
              href: '/'
            }
          }
        }
      },
      metadata: {
        title: 'Não Encontrado',
        description:
          'Ops! A página que você está procurando não existe. Explore meu portfólio para saber mais sobre meu trabalho como desenvolvedor full stack.'
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
              text: 'Algo deu errado'
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
                  text: 'Desculpe, algo deu errado!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Tente novamente'
                }
              ]
            },
            secondary: {
              label: [
                {
                  text: 'Voltar ao início'
                }
              ],
              href: '/'
            }
          }
        }
      },
      metadata: {}
    },
    {
      type: 'legal',
      slug: 'privacy-policy',
      label: 'Política de Privacidade',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Polític' }, { text: 'a de', emphasize: true }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                { text: ' P', emphasize: true },
                { text: 'rivacidade' }
              ]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'data de vigência: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. Introdução' }]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Bem-vindo ao Portfólio de Richard Passos.' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Portfólio de Richard Passos ("nós", "nosso") opera '
              },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' (doravante referido como "Serviço").' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Nossa Política de Privacidade governa sua visita ao ' },
              { text: 'richardp.vercel.app', bold: true },
              {
                text: ', e explica como coletamos, protegemos e divulgamos informações resultantes do uso de nosso Serviço.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. A menos que definido de outra forma nesta Política de Privacidade, os termos usados nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nossos Termos e Condições ("Termos") regulam todo o uso de nosso Serviço e, juntamente com a Política de Privacidade, constituem seu acordo conosco ("acordo").'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Definições' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'SERVIÇO significa o site richardp.vercel.app operado pelo Portfólio de Richard Passos.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'DADOS PESSOAIS significa dados sobre um indivíduo vivo que pode ser identificado a partir desses dados (ou a partir desses e outras informações que estejam em nossa posse ou que provavelmente venham a estar em nossa posse).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'DADOS DE USO são dados coletados automaticamente, gerados pelo uso do Serviço ou da infraestrutura do Serviço em si (por exemplo, a duração de uma visita a uma página).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'COOKIES são pequenos arquivos armazenados em seu dispositivo (computador ou dispositivo móvel).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'CONTROLADOR DE DADOS significa uma pessoa física ou jurídica que (sozinha ou em conjunto com outras pessoas) determina as finalidades e a maneira pela qual quaisquer dados pessoais são ou devem ser processados. Para os fins desta Política de Privacidade, somos um Controlador de Dados de seus dados.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'PROCESSADORES DE DADOS (OU PROVEDORES DE SERVIÇOS) significa qualquer pessoa física ou jurídica que processa os dados em nome do Controlador de Dados. Podemos utilizar os serviços de vários Provedores de Serviços para processar seus dados de forma mais eficaz.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O TITULAR DOS DADOS é qualquer indivíduo vivo que seja o sujeito dos Dados Pessoais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O USUÁRIO é o indivíduo que utiliza nosso Serviço. O Usuário corresponde ao Titular dos Dados, que é o sujeito dos Dados Pessoais.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. Coleta e Uso de Informações' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Coletamos vários tipos de informações para diversos fins, a fim de fornecer e melhorar nosso Serviço para você.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. Tipos de Dados Coletados' }]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Dados Pessoais' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Ao usar nosso Serviço, podemos pedir que você nos forneça certas informações de identificação pessoal que podem ser usadas para entrar em contato ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não estão limitadas a:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              { type: 'li', children: [{ text: 'Endereço de e-mail' }] },
              { type: 'li', children: [{ text: 'Nome e sobrenome' }] },
              { type: 'li', children: [{ text: 'Número de telefone' }] },
              {
                type: 'li',
                children: [
                  {
                    text: 'Endereço, País, Estado, Província, CEP/Código Postal, Cidade'
                  }
                ]
              },
              { type: 'li', children: [{ text: 'Cookies e Dados de Uso' }] }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar seus Dados Pessoais para contatá-lo com boletins informativos, materiais de marketing ou promocionais e outras informações que possam ser do seu interesse. Você pode optar por não receber nenhuma, ou todas, essas comunicações de nossa parte, seguindo o link de cancelamento de assinatura.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Dados de Uso' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Também podemos coletar informações que seu navegador envia sempre que você visita nosso Serviço ou quando acessa o Serviço por ou através de qualquer dispositivo ("Dados de Uso").'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Esses Dados de Uso podem incluir informações como o endereço IP do seu computador, tipo de navegador, versão do navegador, as páginas de nosso Serviço que você visita, a data e hora da sua visita, o tempo gasto nessas páginas, identificadores exclusivos de dispositivo e outros dados de diagnóstico.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Quando você acessa o Serviço com um dispositivo, esses Dados de Uso podem incluir informações como o tipo de dispositivo que você usa, o ID exclusivo do seu dispositivo, o endereço IP do seu dispositivo, o sistema operacional do seu dispositivo, o tipo de navegador de Internet que você usa, identificadores exclusivos de dispositivo e outros dados de diagnóstico.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Dados de Localização' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar e armazenar informações sobre sua localização se você nos der permissão para fazê-lo ("Dados de Localização"). Usamos esses dados para fornecer recursos do nosso Serviço, para melhorar e personalizar nosso Serviço.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode ativar ou desativar os serviços de localização quando usa nosso Serviço a qualquer momento, por meio das configurações do seu dispositivo.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Dados de Cookies e Rastreamento' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e manter certas informações.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Cookies são arquivos com uma pequena quantidade de dados, que podem incluir um identificador único anônimo. Os cookies são enviados para o seu navegador a partir de um site e armazenados no seu dispositivo. Outras tecnologias de rastreamento também são usadas, como beacons, tags e scripts para coletar e rastrear informações e para melhorar e analisar nosso Serviço.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode configurar seu navegador para recusar todos os cookies ou para avisar quando um cookie estiver sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes do nosso Serviço.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Exemplos de Cookies que usamos:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies de Sessão: Usamos Cookies de Sessão para operar nosso Serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies de Preferência: Usamos Cookies de Preferência para lembrar suas preferências e várias configurações.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies de Segurança: Usamos Cookies de Segurança para fins de segurança.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies de Publicidade: Cookies de Publicidade são usados para fornecer anúncios que podem ser relevantes para você e seus interesses.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Outros Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Enquanto usa nosso Serviço, também podemos coletar as seguintes informações: sexo, idade, data de nascimento, local de nascimento, detalhes do passaporte, cidadania, registro no local de residência e endereço atual, número de telefone (trabalho, móvel), detalhes dos documentos de educação, qualificação, treinamento profissional, acordos de trabalho, acordos de NDA, informações sobre bônus e compensação, informações sobre estado civil, membros da família, número de segurança social (ou outro identificador de contribuinte), localização do escritório e outros dados.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Uso dos Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Portfólio de Richard Passos usa os dados coletados para diversos propósitos:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [{ text: 'para fornecer e manter nosso Serviço;' }]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para notificar você sobre mudanças em nosso Serviço;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para permitir que você participe de recursos interativos de nosso Serviço quando escolher fazê-lo;'
                  }
                ]
              },
              {
                type: 'li',
                children: [{ text: 'para fornecer suporte ao cliente;' }]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para reunir análises ou informações valiosas para que possamos melhorar nosso Serviço;'
                  }
                ]
              },
              {
                type: 'li',
                children: [{ text: 'para monitorar o uso de nosso Serviço;' }]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para detectar, prevenir e resolver problemas técnicos;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para cumprir qualquer outra finalidade para a qual você a forneça;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para cumprir nossas obrigações e fazer valer nossos direitos decorrentes de qualquer contrato celebrado entre você e nós, incluindo para faturamento e cobrança;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para fornecer a você notificações sobre sua conta e/ou assinatura, incluindo notificações de expiração e renovação, instruções por e-mail, etc.;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para fornecer a você notícias, ofertas especiais e informações gerais sobre outros produtos, serviços e eventos que oferecemos, semelhantes àqueles que você já comprou ou sobre os quais fez consultas, a menos que você tenha optado por não receber essas informações;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'de qualquer outra forma que possamos descrever quando você fornecer as informações;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'para qualquer outro propósito com seu consentimento.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '6. Retenção de Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nós reteremos seus Dados Pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade. Reteremos e usaremos seus Dados Pessoais na medida necessária para cumprir nossas obrigações legais (por exemplo, se formos obrigados a reter seus dados para cumprir leis aplicáveis), resolver disputas e fazer cumprir nossos acordos e políticas legais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Também reteremos Dados de Uso para fins de análise interna. Dados de Uso geralmente são retidos por um período mais curto, exceto quando esses dados são usados para fortalecer a segurança ou melhorar a funcionalidade do nosso Serviço, ou quando somos legalmente obrigados a reter esses dados por períodos mais longos.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '7. Transferência de Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Suas informações, incluindo Dados Pessoais, podem ser transferidas para – e mantidas em – computadores localizados fora do seu estado, província, país ou outra jurisdição governamental onde as leis de proteção de dados podem diferir das leis da sua jurisdição.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você estiver localizado fora do Brasil e optar por fornecer informações a nós, observe que transferimos os dados, incluindo Dados Pessoais, para o Brasil e os processamos lá.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Seu consentimento a esta Política de Privacidade seguido do seu envio de tais informações representa sua concordância com essa transferência.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Richard Passos’ Portfolio tomará todas as medidas razoavelmente necessárias para garantir que seus dados sejam tratados de forma segura e de acordo com esta Política de Privacidade, e nenhuma transferência dos seus Dados Pessoais ocorrerá para uma organização ou país, a menos que haja controles adequados em vigor, incluindo a segurança dos seus dados e outras informações pessoais.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '8. Divulgação de Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos divulgar informações pessoais que coletamos ou que você fornece:'
              }
            ]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [{ text: 'Divulgação para Aplicação da Lei.' }]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Sob certas circunstâncias, podemos ser obrigados a divulgar seus Dados Pessoais se for exigido por lei ou em resposta a solicitações válidas de autoridades públicas.'
                  }
                ]
              },
              { type: 'li', children: [{ text: 'Transação Comercial.' }] },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Se nós ou nossas subsidiárias estivermos envolvidos em uma fusão, aquisição ou venda de ativos, seus Dados Pessoais podem ser transferidos.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Outros casos. Podemos divulgar suas informações também:'
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
                      { text: 'para nossas subsidiárias e afiliadas;' }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'para contratantes, prestadores de serviços e outros terceiros que utilizamos para apoiar nosso negócio;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'para cumprir a finalidade para a qual você forneceu;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'para fins de incluir o logotipo da sua empresa em nosso site;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'para qualquer outro propósito divulgado por nós quando você fornecer a informação;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'com seu consentimento em quaisquer outros casos;'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'se acreditarmos que a divulgação é necessária ou apropriada para proteger os direitos, propriedade ou segurança da Empresa, nossos clientes ou terceiros.'
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
            children: [{ text: '9. Segurança dos Dados' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '10. Seus Direitos de Proteção de Dados sob o Regulamento Geral sobre a Proteção de Dados (GDPR)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você é residente da União Europeia (UE) e do Espaço Econômico Europeu (EEE), você tem certos direitos de proteção de dados, cobertos pelo GDPR.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nos esforçamos para tomar medidas razoáveis para permitir que você corrija, modifique, exclua ou limite o uso de seus Dados Pessoais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você deseja saber quais Dados Pessoais mantemos sobre você e se deseja que eles sejam removidos de nossos sistemas, por favor, envie um e-mail para '
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Em certas circunstâncias, você tem os seguintes direitos de proteção de dados:'
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
                    text: 'o direito de acessar, atualizar ou excluir as informações que temos sobre você;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'o direito de retificação. Você tem o direito de ter suas informações retificadas se essas informações estiverem incorretas ou incompletas;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'o direito de objeção. Você tem o direito de se opor ao nosso processamento dos seus Dados Pessoais;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'o direito de restrição. Você tem o direito de solicitar que restrinjamos o processamento de suas informações pessoais;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'o direito à portabilidade dos dados. Você tem o direito de receber uma cópia dos seus Dados Pessoais em um formato estruturado, legível por máquina e comumente usado;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'o direito de retirar o consentimento. Você também tem o direito de retirar seu consentimento a qualquer momento, quando dependemos do seu consentimento para processar suas informações pessoais;'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Observe que podemos solicitar que você verifique sua identidade antes de responder a tais solicitações. Observe que talvez não possamos fornecer o Serviço sem alguns dados necessários.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você tem o direito de reclamar a uma Autoridade de Proteção de Dados sobre nossa coleta e uso dos seus Dados Pessoais. Para mais informações, entre em contato com a autoridade local de proteção de dados no Espaço Econômico Europeu (EEE).'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '11. Seus Direitos de Proteção de Dados sob a Lei de Proteção de Privacidade da Califórnia (CalOPPA)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'CalOPPA é a primeira lei estadual do país a exigir que sites comerciais e serviços online publiquem uma política de privacidade. O alcance da lei vai além da Califórnia, exigindo que uma pessoa ou empresa nos Estados Unidos (e possivelmente no mundo) que opere sites coletando informações pessoais identificáveis de consumidores da Califórnia publique uma política de privacidade visível em seu site, informando exatamente as informações coletadas e com quais indivíduos elas estão sendo compartilhadas, e que cumpra com essa política.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'De acordo com a CalOPPA, concordamos com o seguinte:'
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
                  { text: 'os usuários podem visitar nosso site anonimamente;' }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'nosso link de Política de Privacidade inclui a palavra “Privacidade”, e pode ser facilmente encontrado na página inicial do nosso site;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'os usuários serão notificados sobre quaisquer alterações na política de privacidade em nossa Página de Política de Privacidade;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'os usuários podem alterar suas informações pessoais enviando um e-mail para '
                  },
                  { text: 'richard.ac.passos12@gmail.com', bold: true },
                  { text: '.' }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nossa Política sobre Sinais de “Não Rastrear”:'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nós honramos os sinais de Não Rastrear e não rastreamos, plantamos cookies ou usamos publicidade quando um mecanismo de navegador Não Rastrear está em vigor. Não Rastrear é uma preferência que você pode definir em seu navegador para informar aos sites que você não deseja ser rastreado.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode ativar ou desativar o Não Rastrear visitando a página de Preferências ou Configurações de seu navegador.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: '12. Seus Direitos de Proteção de Dados sob a Lei de Privacidade do Consumidor da Califórnia (CCPA)'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você é um residente da Califórnia, tem o direito de saber quais dados coletamos sobre você, solicitar a exclusão de seus dados e não vendê-los (compartilhá-los). Para exercer seus direitos de proteção de dados, você pode fazer certas solicitações e nos perguntar:'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.1. Quais informações pessoais temos sobre você. Se você fizer essa solicitação, retornaremos para você:',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.1. As categorias de informações pessoais que coletamos sobre você.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.2. As categorias de fontes das quais coletamos suas informações pessoais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.3. O propósito comercial ou empresarial de coletar ou vender suas informações pessoais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.4. As categorias de terceiros com quem compartilhamos informações pessoais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.5. As informações pessoais específicas que coletamos sobre você.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.6. Uma lista das categorias de informações pessoais que vendemos, junto com a categoria de qualquer outra empresa para a qual vendemos. Se não vendemos suas informações pessoais, informaremos você sobre esse fato.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.0.7. Uma lista das categorias de informações pessoais que divulgamos para um propósito comercial, juntamente com a categoria de qualquer outra empresa com a qual compartilhamos.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Por favor, note que você tem o direito de nos pedir essas informações até duas vezes em um período de doze meses. Quando você fizer essa solicitação, as informações fornecidas podem ser limitadas às informações pessoais que coletamos sobre você nos últimos 12 meses.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.2. Para excluir suas informações pessoais. Se você fizer essa solicitação, excluiremos as informações pessoais que temos sobre você na data de sua solicitação de nossos registros e orientaremos quaisquer prestadores de serviços a fazer o mesmo. Em alguns casos, a exclusão pode ser realizada por meio da desidentificação das informações. Se você optar por excluir suas informações pessoais, pode não ser capaz de usar certas funções que exigem suas informações pessoais para funcionar.',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.3. Para parar de vender suas informações pessoais. Não vendemos ou alugamos suas informações pessoais a terceiros para nenhum propósito. Não vendemos suas informações pessoais por consideração monetária. No entanto, em algumas circunstâncias, uma transferência de informações pessoais para um terceiro, ou dentro de nossa família de empresas, sem consideração monetária pode ser considerada uma “venda” de acordo com a lei da Califórnia. Você é o único proprietário de seus Dados Pessoais e pode solicitar divulgação ou exclusão a qualquer momento.',
                bold: true
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você enviar uma solicitação para parar de vender suas informações pessoais, pararemos de fazer tais transferências.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Por favor, note que, se você nos pedir para excluir ou parar de vender seus dados, isso pode impactar sua experiência conosco, e você pode não ser capaz de participar de certos programas ou serviços de membresia que exigem o uso de suas informações pessoais para funcionar. Mas, em nenhuma circunstância, iremos discriminar você por exercer seus direitos.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Para exercer seus direitos de proteção de dados na Califórnia descritos acima, por favor, envie suas solicitações por e-mail: ',
                bold: true
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Seus direitos de proteção de dados, descritos acima, são cobertos pela CCPA, abreviação de Lei de Privacidade do Consumidor da Califórnia. Para saber mais, visite o site oficial de Informação Legislativa da Califórnia. A CCPA entrou em vigor em 01/01/2020.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '13. Prestadores de Serviços' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos empregar empresas e indivíduos terceiros para facilitar nosso Serviço (',
                bold: true
              },
              { text: '“Prestadores de Serviços”', bold: true },
              {
                text: '), fornecer Serviço em nosso nome, realizar serviços relacionados ao Serviço ou nos ajudar a analisar como nosso Serviço é usado.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Esses terceiros têm acesso aos seus Dados Pessoais apenas para realizar essas tarefas em nosso nome e estão obrigados a não divulgar ou usar para qualquer outro propósito.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '14. Análises' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar Prestadores de Serviços terceiros para monitorar e analisar o uso de nosso Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '15. Ferramentas de CI/CD' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar Prestadores de Serviços terceiros para automatizar o processo de desenvolvimento de nosso Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '16. Remarketing Comportamental' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar serviços de remarketing para anunciar em sites de terceiros para você após você visitar nosso Serviço. Nós e nossos fornecedores terceiros usamos cookies para informar, otimizar e servir anúncios com base em suas visitas anteriores ao nosso Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '17. Links para Outros Sites' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nosso Serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, você será direcionado para o site desse terceiro. Recomendamos fortemente que você revise a Política de Privacidade de cada site que visitar.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Por exemplo, a ', bold: true },
              { text: 'política de privacidade', italic: true },
              { text: ' foi elaborada usando ', bold: true },
              { text: 'PolicyMaker.io', bold: true },
              {
                text: ', uma ferramenta gratuita que ajuda a criar documentos legais de alta qualidade. O ',
                bold: true
              },
              { text: 'gerador de políticas de privacidade', italic: true },
              {
                text: ' do PolicyMaker é uma ferramenta fácil de usar para criar uma ',
                bold: true
              },
              { text: 'política de privacidade para blog', italic: true },
              { text: ', site, loja de e-commerce ou aplicativo móvel.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '18. Privacidade das Crianças' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nossos Serviços não são destinados ao uso por crianças menores de 18 anos (',
                bold: true
              },
              { text: '“Criança”', italic: true },
              { text: ' ou ', bold: true },
              { text: '“Crianças”', italic: true },
              { text: ').' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Não coletamos conscientemente informações pessoais identificáveis de crianças menores de 18 anos. Se você souber que uma criança nos forneceu Dados Pessoais, entre em contato conosco. Se tomarmos conhecimento de que coletamos Dados Pessoais de crianças sem a verificação do consentimento dos pais, tomaremos medidas para remover essas informações de nossos servidores.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              { text: '19. Alterações a Esta Política de Privacidade' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade nesta página.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Informaremos você por e-mail e/ou por meio de um aviso destacado em nosso Serviço, antes que a mudança entre em vigor e atualizaremos a “data de vigência” no topo desta Política de Privacidade.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As mudanças a esta Política de Privacidade são efetivas quando são publicadas nesta página.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '20. Contate-Nos' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco por e-mail: '
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              { text: '.' }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'Esta ' },
              {
                type: 'link',
                url: 'https://policymaker.io/privacy-policy/',
                children: [{ text: 'Política de Privacidade' }]
              },
              { text: ' foi criada para ' },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' por ' },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [{ text: 'PolicyMaker.io' }]
              },
              { text: ' em 2024-09-18.' }
            ]
          }
        ]
      },
      metadata: {
        title: 'Política de Privacidade',
        description:
          'Explore nossa política de privacidade, que descreve como protegemos seus dados e garantimos seus direitos enquanto você utiliza nossos serviços.'
      }
    },
    {
      type: 'legal',
      slug: 'terms-and-conditions',
      label: 'Termos e Condições',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Termos' }, { text: ' &', emphasize: true }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [{ text: 'C', emphasize: true }, { text: 'ondições' }]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'última atualização: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. Introdução' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Bem-vindo ao ' },
              { text: 'Portfólio de Richard Passos', bold: true },
              { text: ' (“Empresa”, “nós”, “nosso”, “nos”)!' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Estes Termos e Condições (“Termos”, “Termos de Serviço”) regem o seu uso do nosso site localizado em '
              },
              { text: 'richardp.vercel.app', bold: true },
              {
                text: ' (conjuntamente ou individualmente “Serviço”) operado por '
              },
              { text: 'Portfólio de Richard Passos', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nossa Política de Privacidade também rege o seu uso do nosso Serviço e explica como coletamos, protegemos e divulgamos informações resultantes do seu uso das nossas páginas da web.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Seu acordo conosco inclui estes Termos e nossa Política de Privacidade (“Acordos”). Você reconhece que leu e entendeu os Acordos e concorda em cumpri-los.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você não concorda com (ou não pode cumprir) os Acordos, então você não pode usar o Serviço, mas por favor, avise-nos enviando um e-mail para '
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              {
                text: ' para que possamos tentar encontrar uma solução. Estes Termos se aplicam a todos os visitantes, usuários e outros que desejam acessar ou usar o Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Comunicações' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Ao usar nosso Serviço, você concorda em assinar newsletters, materiais de marketing ou promocionais e outras informações que possamos enviar. No entanto, você pode optar por não receber nenhuma ou todas essas comunicações de nossa parte, seguindo o link de cancelamento de inscrição ou enviando um e-mail para '
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. Concursos, Sorteios e Promoções' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Quaisquer concursos, sorteios ou outras promoções (coletivamente, “Promoções”) disponibilizadas através do Serviço podem ser regidos por regras que são separadas destes Termos de Serviço. Se você participar de qualquer Promoção, por favor, revise as regras aplicáveis, bem como nossa Política de Privacidade. Se as regras de uma Promoção entrarem em conflito com estes Termos de Serviço, as regras da Promoção se aplicarão.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. Conteúdo' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O conteúdo encontrado ou através deste Serviço é propriedade de Portfólio de Richard Passos ou usado com permissão. Você não pode distribuir, modificar, transmitir, reutilizar, baixar, republicar, copiar ou usar o referido Conteúdo, seja no todo ou em parte, para fins comerciais ou para ganho pessoal, sem permissão expressa e antecipada por escrito de nossa parte.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Usos Proibidos' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode usar o Serviço apenas para fins legais e de acordo com os Termos. Você concorda em não usar o Serviço:'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.1. De qualquer maneira que viole qualquer lei ou regulamento nacional ou internacional aplicável.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.2. Com o propósito de explorar, prejudicar ou tentar explorar ou prejudicar menores de qualquer maneira, expondo-os a conteúdo inadequado ou de outra forma.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.3. Para transmitir ou providenciar o envio de qualquer material publicitário ou promocional, incluindo qualquer “spam”, “corrente” ou qualquer outra solicitação similar.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.4. Para se passar por ou tentar se passar por Empresa, um funcionário da Empresa, outro usuário ou qualquer outra pessoa ou entidade.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.5. De qualquer maneira que infrinja os direitos de outros, ou de qualquer forma seja ilegal, ameaçador, fraudulento ou prejudicial, ou em conexão com qualquer propósito ou atividade ilegal, fraudulenta ou prejudicial.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: '0.6. Para se envolver em qualquer outra conduta que restrinja ou iniba o uso ou aproveitamento do Serviço por qualquer pessoa, ou que, conforme determinado por nós, possa prejudicar ou ofender a Empresa ou os usuários do Serviço ou expô-los a responsabilidade.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Além disso, você concorda em não:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Usar o Serviço de qualquer maneira que possa desativar, sobrecarregar, danificar ou prejudicar o Serviço ou interferir com o uso de qualquer outra parte do Serviço, incluindo a capacidade de participar de atividades em tempo real através do Serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Usar qualquer robô, spider ou outro dispositivo automático, processo ou meio para acessar o Serviço para qualquer propósito, incluindo monitorar ou copiar qualquer material no Serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Usar qualquer processo manual para monitorar ou copiar qualquer material no Serviço ou para qualquer outro propósito não autorizado sem o nosso consentimento por escrito prévio.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Usar qualquer dispositivo, software ou rotina que interfira no funcionamento adequado do Serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Introduzir qualquer vírus, cavalos de Troia, worms, bombas lógicas ou outro material que seja malicioso ou tecnologicamente prejudicial.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Tentar obter acesso não autorizado a, interferir com, danificar ou interromper qualquer parte do Serviço, o servidor no qual o Serviço está armazenado ou qualquer servidor, computador ou banco de dados conectado ao Serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Atacar o Serviço por meio de um ataque de negação de serviço ou um ataque distribuído de negação de serviço.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Tomar qualquer ação que possa danificar ou falsificar a avaliação da Empresa.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'De outra forma tentar interferir no funcionamento adequado do Serviço.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '6. Análise' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos usar prestadores de serviços terceirizados para monitorar e analisar o uso do nosso Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '7. Proibição de Uso por Menores' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Serviço é destinado apenas ao acesso e uso por indivíduos com pelo menos dezoito (18) anos de idade. Ao acessar ou usar o Serviço, você garante e declara que tem pelo menos dezoito (18) anos de idade e a plena autoridade, direito e capacidade para celebrar este acordo e cumprir todos os termos e condições dos Termos. Se você tiver menos de dezoito (18) anos, está proibido tanto de acessar quanto de usar o Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '8. Propriedade Intelectual' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Serviço e seu conteúdo original (excluindo o Conteúdo fornecido pelos usuários), características e funcionalidades são e continuarão sendo propriedade exclusiva do Portfólio de Richard Passos e seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e outras leis de países estrangeiros. Nossas marcas registradas não podem ser usadas em conexão com qualquer produto ou serviço sem o consentimento prévio por escrito do Portfólio de Richard Passos.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '9. Política de Direitos Autorais' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Respeitamos os direitos de propriedade intelectual de terceiros. Nossa política é responder a qualquer reclamação de que o Conteúdo publicado no Serviço infringe os direitos autorais ou outros direitos de propriedade intelectual (“Infração”) de qualquer pessoa ou entidade.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você é o proprietário dos direitos autorais, ou está autorizado em nome de um, e acredita que o trabalho protegido por direitos autorais foi copiado de uma forma que constitui infração de direitos autorais, envie sua reclamação por e-mail para ',
                bold: true
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              {
                text: ', com o assunto: “Infração de Direitos Autorais” e inclua em sua reclamação uma descrição detalhada da alegada Infração conforme detalhado abaixo, sob “Aviso DMCA e Procedimento para Reclamações de Infração de Direitos Autorais”'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode ser responsabilizado por danos (incluindo custos e honorários advocatícios) por representação falsa ou reclamações de má-fé sobre a infração de qualquer Conteúdo encontrado no e/ou através do Serviço relacionado aos seus direitos autorais.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: '10. ', bold: true },
              {
                text: 'Aviso DMCA e Procedimento para Reclamações de Infração de Direitos Autorais',
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
                    text: 'uma assinatura eletrônica ou física da pessoa autorizada a agir em nome do proprietário do interesse dos direitos autorais;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'uma descrição do trabalho protegido por direitos autorais que você alega ter sido infringido, incluindo a URL (ou seja, o endereço da página da web) do local onde o trabalho protegido por direitos autorais existe ou uma cópia do trabalho protegido por direitos autorais;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'identificação da URL ou outro local específico no Serviço onde o material que você alega estar infringindo está localizado;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'seu endereço, número de telefone e endereço de e-mail;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'uma declaração sua de que você tem a crença de boa-fé de que o uso disputado não é autorizado pelo proprietário dos direitos autorais, seu agente ou pela lei;'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'uma declaração sua, feita sob pena de perjúrio, de que as informações acima em seu aviso são precisas e que você é o proprietário dos direitos autorais ou está autorizado a agir em nome do proprietário dos direitos autorais.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode entrar em contato com nosso Agente de Direitos Autorais por e-mail para ',
                bold: true
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              { text: '.' }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '11. Relatórios de Erros e Feedback' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Você pode nos fornecer diretamente em ', bold: true },
              { text: 'richard.ac.passos12@gmail.com', bold: true },
              {
                text: ' ou através de sites e ferramentas de terceiros com informações e feedback sobre erros, sugestões para melhorias, ideias, problemas, reclamações e outros assuntos relacionados ao nosso Serviço (“Feedback”). Você reconhece e concorda que: (i) você não deve reter, adquirir ou reivindicar qualquer direito de propriedade intelectual ou outro direito, título ou interesse no Feedback; (ii) a Empresa pode ter ideias de desenvolvimento semelhantes ao Feedback; (iii) o Feedback não contém informações confidenciais ou proprietárias suas ou de terceiros; e (iv) a Empresa não está sob nenhuma obrigação de confidencialidade em relação ao Feedback. Caso a transferência da propriedade do Feedback não seja possível devido às leis obrigatórias aplicáveis, você concede à Empresa e suas afiliadas um direito exclusivo, transferível, irrevogável, gratuito, sublicenciável, ilimitado e perpétuo de usar (incluindo copiar, modificar, criar obras derivadas, publicar, distribuir e comercializar) o Feedback de qualquer forma e para qualquer finalidade.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '12. Links para Outros Sites' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nosso Serviço pode conter links para sites ou serviços de terceiros que não são propriedade ou controlados pelo Portfólio de Richard Passos.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Portfólio de Richard Passos não tem controle sobre, e não assume nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Não garantimos as ofertas de nenhuma dessas entidades/indivíduos ou seus sites.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Por exemplo, os ' },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'Termos de Uso' }]
              },
              { text: ' descritos foram criados usando ' },
              {
                type: 'link',
                url: 'https://policymaker.io/',
                children: [{ text: 'PolicyMaker.io' }]
              },
              {
                text: ', um aplicativo web gratuito para gerar documentos legais de alta qualidade. O '
              },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'gerador de Termos e Condições' }]
              },
              {
                text: ' da PolicyMaker é uma ferramenta gratuita e fácil de usar para criar um excelente modelo padrão de Termos de Serviço para um site, blog, loja de e-commerce ou aplicativo.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'VOCÊ RECONHECE E CONCORDA QUE A EMPRESA NÃO SERÁ RESPONSÁVEL OU RESPONSÁVEL, DIRETA OU INDIRETAMENTE, POR QUALQUER DANO OU PERDA CAUSADO OU ALEGADO COMO CAUSADO PELO OU EM CONEXÃO COM O USO OU CONFIANÇA EM QUALQUER CONTEÚDO, BENS OU SERVIÇOS DISPONÍVEIS EM OU ATRAVÉS DE QUAISQUER SITES OU SERVIÇOS DE TERCEIROS.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'RECOMENDAMOS ENCARECIDAMENTE QUE VOCÊ LEIA OS TERMOS DE SERVIÇO E POLÍTICAS DE PRIVACIDADE DE QUAISQUER SITES OU SERVIÇOS DE TERCEIROS QUE VOCÊ VISITE.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '13. Isenção de Garantia' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'ESTES SERVIÇOS SÃO FORNECIDOS PELA EMPRESA NA BASE “COMO ESTÁ” E “CONFORME DISPONÍVEL”. A EMPRESA NÃO FAZ NENHUMA REPRESENTAÇÃO OU GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, QUANTO AO FUNCIONAMENTO DOS SEUS SERVIÇOS, OU AS INFORMAÇÕES, CONTEÚDOS OU MATERIAIS INCLUÍDOS NESTES. VOCÊ CONCORDA EXPRESSAMENTE QUE SEU USO DESTES SERVIÇOS, SEU CONTEÚDO E QUAISQUER SERVIÇOS OU ITENS OBTIDOS CONOSCO É POR SUA CONTA E RISCO.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'NEM A EMPRESA NEM QUALQUER PESSOA ASSOCIADA À EMPRESA FAZ QUALQUER GARANTIA OU REPRESENTAÇÃO QUANTO À COMPLETUDE, SEGURANÇA, CONFIABILIDADE, QUALIDADE, PRECISÃO OU DISPONIBILIDADE DOS SERVIÇOS. SEM LIMITAR O ANTERIOR, NEM A EMPRESA NEM QUALQUER PESSOA ASSOCIADA À EMPRESA REPRESENTA OU GARANTE QUE OS SERVIÇOS, SEU CONTEÚDO, OU QUAISQUER SERVIÇOS OU ITENS OBTIDOS ATRAVÉS DOS SERVIÇOS SERÃO PRECISOS, CONFIÁVEIS, LIVRES DE ERROS OU ININTERRUPTOS, QUE OS DEFEITOS SERÃO CORRIGIDOS, QUE OS SERVIÇOS OU O SERVIDOR QUE OS TORNA DISPONÍVEIS ESTÃO LIVRES DE VÍRUS OU OUTROS COMPONENTES NOCIVOS OU QUE OS SERVIÇOS OU QUAISQUER SERVIÇOS OU ITENS OBTIDOS ATRAVÉS DOS SERVIÇOS ATENDERÃO DE OUTRA FORMA ÀS SUAS NECESSIDADES OU EXPECTATIVAS.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'A EMPRESA DESCONHECE TODAS AS GARANTIAS DE QUALQUER TIPO, SEJAM EXPRESSAS OU IMPLÍCITAS, LEGAIS OU OUTRAS, INCLUINDO MAS NÃO SE LIMITANDO A QUALQUER GARANTIA DE COMERCIALIZAÇÃO, NÃO INFRAÇÃO E ADEQUAÇÃO PARA FINALIDADE ESPECÍFICA.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O ANTERIOR NÃO AFETA QUAISQUER GARANTIAS QUE NÃO PODEM SER EXCLUÍDAS OU LIMITADAS SOB A LEI APLICÁVEL.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '14. Limitação de Responsabilidade' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'EXCETO SE PROIBIDO POR LEI, VOCÊ MANTERÁ A NÓS E NOSSOS DIRETORES, FUNCIONÁRIOS E AGENTES ISENTOS DE QUALQUER DANO INDIRETO, PUNITIVO, ESPECIAL, INCIDENTAL OU CONSEQUENCIAL, SEJA QUAL FOR A CAUSA (INCLUINDO HONORÁRIOS ADVOCATÍCIOS E TODOS OS CUSTOS E DESPESAS RELACIONADOS À LITIGAÇÃO E ARBITRAGEM, OU EM JULGAMENTO OU APELAÇÃO, SE HOUVER, SEJA OU NÃO A LITIGAÇÃO OU ARBITRAGEM SEJA INSTITUÍDA), SEJA EM UMA AÇÃO DE CONTRATO, NEGLIGÊNCIA OU OUTRA AÇÃO ILÍCITA, OU DECORRENTE DE OU EM CONEXÃO COM ESTE ACORDO, INCLUINDO SEM LIMITAÇÃO QUALQUER RECLAMAÇÃO POR LESÕES PESSOAIS OU DANOS À PROPRIEDADE, DECORRENTES DESTE ACORDO E QUALQUER VIOLAÇÃO POR VOCÊ DE QUAISQUER LEIS, ESTATUTOS, REGRAS OU REGULAMENTOS FEDERAIS, ESTADUAIS OU LOCAIS, MESMO QUE A EMPRESA TENHA SIDO ANTERIORMENTE AVISADA DA POSSIBILIDADE DE TAL DANO. EXCETO SE PROIBIDO POR LEI, SE HOUVER RESPONSABILIDADE ENCONTRADA POR PARTE DA EMPRESA, ELA SERÁ LIMITADA AO VALOR PAGO PELOS PRODUTOS E/OU SERVIÇOS, E EM NENHUMA HIPÓTESE HAVERÁ DANOS CONSEQUENCIAIS OU PUNITIVOS. ALGUNS ESTADOS NÃO PERMITEM A EXCLUSÃO OU LIMITAÇÃO DE DANOS PUNITIVOS, INCIDENTAIS OU CONSEQUENCIAIS, PORTANTO A ANTERIOR LIMITAÇÃO OU EXCLUSÃO PODE NÃO SE APLICAR A VOCÊ.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '15. Rescisão' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos rescindir ou suspender sua conta e bloquear o acesso ao Serviço imediatamente, sem aviso prévio ou responsabilidade, a nosso exclusivo critério, por qualquer motivo e sem limitação, incluindo, mas não se limitando a, uma violação dos Termos.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você deseja rescindir sua conta, você pode simplesmente parar de usar o Serviço.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Todas as disposições dos Termos que, por sua natureza, devem sobreviver à rescisão sobreviverão à rescisão, incluindo, sem limitação, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '16. Lei Aplicável' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, que a lei aplicável se aplica ao acordo sem considerar suas disposições sobre conflitos de leis.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos. Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor. Estes Termos constituem o acordo completo entre nós a respeito do nosso Serviço e substituem e substituem quaisquer acordos anteriores que possamos ter tido entre nós a respeito do Serviço.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '17. Alterações nos Serviços' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Reservamos o direito de retirar ou alterar nossos Serviços, e qualquer serviço ou material que fornecemos através dos Serviços, a nosso exclusivo critério e sem aviso prévio. Não seremos responsáveis se, por qualquer motivo, todo ou qualquer parte dos Serviços estiver indisponível a qualquer momento ou por qualquer período. De tempos em tempos, podemos restringir o acesso a algumas partes dos Serviços, ou a todo o Serviço, para usuários, incluindo usuários registrados.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '18. Alterações nos Termos' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Podemos alterar os Termos a qualquer momento, publicando os termos alterados neste site. É sua responsabilidade revisar estes Termos periodicamente.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Seu uso contínuo da Plataforma após a publicação dos Termos revisados significa que você aceita e concorda com as mudanças. Você deve verificar esta página com frequência para estar ciente de quaisquer alterações, pois elas são vinculativas para você.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Ao continuar a acessar ou usar nossos Serviços após qualquer revisão, você concorda em se vincular aos termos revisados. Se você não concordar com os novos termos, você não está mais autorizado a usar os Serviços.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '19. Renúncia e Separabilidade' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nenhuma renúncia por parte da Empresa a qualquer termo ou condição estabelecido nos Termos será considerada uma renúncia adicional ou contínua a tal termo ou condição ou uma renúncia a qualquer outro termo ou condição, e qualquer falha da Empresa em afirmar um direito ou disposição sob os Termos não constituirá uma renúncia a tal direito ou disposição.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se qualquer disposição dos Termos for considerada por um tribunal ou outro órgão competente como inválida, ilegal ou inexequível por qualquer motivo, tal disposição será eliminada ou limitada ao mínimo necessário para que as disposições restantes dos Termos continuem em pleno vigor e efeito.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '20. Reconhecimento' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'AO USAR OS SERVIÇOS OU OUTROS SERVIÇOS FORNECIDOS POR NÓS, VOCÊ RECONHECE QUE LEU ESTES TERMOS DE CONDIÇÕES E CONCORDA EM ESTAR VINCULADO A ELES.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '21. Contato' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Por favor, envie seu feedback, comentários, solicitações de suporte técnico por e-mail: '
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'Estes ' },
              {
                type: 'link',
                url: 'https://policymaker.io/terms-and-conditions/',
                children: [{ text: 'Termos e Condições' }]
              },
              { text: ' foram criados para ' },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' por ' },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [{ text: 'PolicyMaker.io' }]
              },
              { text: ' em 2024-09-18.' }
            ]
          }
        ]
      },
      metadata: {
        title: 'Termos e Condições',
        description:
          'Explore os Termos e Condições para utilizar o portfólio de Richard Passos, garantindo transparência e segurança em sua experiência.'
      }
    },
    {
      type: 'legal',
      slug: 'disclaimer',
      label: 'Isenção de Garantia',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [
                {
                  text: 'Isençã'
                },
                {
                  text: 'o de',
                  emphasize: true
                }
              ]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                {
                  text: ' G',
                  emphasize: true
                },
                {
                  text: 'arantia'
                }
              ]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'última atualização: 2024-09-18' }]
            }
          ]
        },
        data: [
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE DO SITE' }]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'As informações fornecidas por ', bold: false },
              { text: 'Richard Passos’ Portfolio', bold: true },
              { text: ' (“Empresa”, “nós”, “nosso”, “nos”) em ', bold: false },
              { text: 'richardp.vercel.app', bold: true },
              {
                text: ' (o “Site”) são apenas para fins informativos gerais. Todas as informações no Site são fornecidas de boa-fé; no entanto, não fazemos nenhuma declaração ou garantia de qualquer tipo, expressa ou implícita, quanto à precisão, adequação, validade, confiabilidade, disponibilidade ou completude de qualquer informação no Site.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'EM NENHUMA HIPÓTESE SEREMOS RESPONSÁVEIS POR QUALQUER PERDA OU DANO DE QUALQUER NATUREZA RESULTANTE DO USO DO SITE OU DA CONFIANÇA EM QUALQUER INFORMAÇÃO FORNECIDA NO SITE. O SEU USO DO SITE E SUA CONFIANÇA EM QUALQUER INFORMAÇÃO NO SITE É EXCLUSIVAMENTE POR SUA CONTA E RISCO.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              { text: 'ISENÇÃO DE RESPONSABILIDADE POR LINKS EXTERNOS' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Site pode conter (ou você pode ser direcionado através do Site) links para outros sites ou conteúdos pertencentes ou originados de terceiros ou links para sites e recursos. Esses links externos não são investigados, monitorados ou verificados quanto à precisão, adequação, validade, confiabilidade, disponibilidade ou completude por nós.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              { text: 'Por exemplo, a ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'Isenção de Garantia'
                  }
                ]
              },
              { text: ' descrita foi criada usando ', bold: false },
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
                text: ', um aplicativo web gratuito para gerar documentos legais de alta qualidade. O ',
                bold: false
              },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'gerador de isenção de responsabilidade'
                  }
                ]
              },
              {
                text: ' da PolicyMaker é uma ferramenta fácil de usar para criar um excelente modelo de Isenção de Garantia para um site, blog, loja de eCommerce ou aplicativo.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'NÃO GARANTIMOS, ENDOSSAMOS, GARANTIMOS OU ASSUMIMOS RESPONSABILIDADE PELA PRECISÃO OU CONFIABILIDADE DE QUALQUER INFORMAÇÃO OFERECIDA POR SITES DE TERCEIROS VINCULADOS ATRAVÉS DO SITE OU QUALQUER SITE OU RECURSO VINCULADO EM QUALQUER BANDEIRA OU OUTRA PUBLICIDADE. NÃO SEREMOS PARTE OU DE QUALQUER FORMA RESPONSÁVEIS POR MONITORAR QUALQUER TRANSAÇÃO ENTRE VOCÊ E FORNECEDORES DE PRODUTOS OU SERVIÇOS DE TERCEIROS.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE POR DEPONENTES' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'O Site pode conter depoimentos de usuários de nossos produtos e/ou serviços. Esses depoimentos refletem as experiências e opiniões reais desses usuários. No entanto, as experiências são pessoais para esses usuários específicos e podem não ser necessariamente representativas de todos os usuários de nossos produtos e/ou serviços. Não afirmamos, e você não deve presumir que todos os usuários terão as mesmas experiências.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'SEUS RESULTADOS INDIVIDUAIS PODEM VARIAR.' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Os depoimentos no Site são enviados em várias formas, como texto, áudio e/ou vídeo, e são revisados por nós antes de serem publicados. Eles aparecem no Site literalmente como dados pelos usuários, exceto pela correção de erros de gramática ou digitação. Alguns depoimentos podem ter sido abreviados por questões de brevidade, onde o depoimento completo continha informações adicionais não relevantes para o público geral.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'As opiniões e opiniões contidas nos depoimentos pertencem exclusivamente ao usuário individual e não refletem nossas opiniões e visões.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              { text: 'ISENÇÃO DE RESPONSABILIDADE POR ERROS E OMISSÕES' }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Embora tenhamos feito todo o possível para garantir que as informações contidas neste site foram obtidas a partir de fontes confiáveis, Richard Passos’ Portfolio não é responsável por quaisquer erros ou omissões ou pelos resultados obtidos com o uso dessas informações. Todas as informações neste site são fornecidas “como estão”, sem garantia de completude, precisão, pontualidade ou dos resultados obtidos com o uso dessas informações, e sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando a garantias de desempenho, comerciabilidade e adequação para um propósito específico.',
                bold: false
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Em nenhum caso Richard Passos’ Portfolio, suas parcerias ou corporações relacionadas, ou os parceiros, agentes ou empregados desses serão responsáveis por qualquer decisão tomada ou ação realizada com base nas informações neste Site ou por quaisquer danos consequenciais, especiais ou similares, mesmo que informados da possibilidade desses danos.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [
              {
                text: 'ISENÇÃO DE RESPONSABILIDADE POR LOGOS E MARCAS REGISTRADAS'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Todos os logos e marcas registradas de terceiros referenciados em richardp.vercel.app são marcas e logos de seus respectivos proprietários. Qualquer inclusão de tais marcas ou logos não implica ou constitui qualquer aprovação, endosse ou patrocínio de Richard Passos’ Portfolio por esses proprietários.',
                bold: false
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: 'CONTATE-NOS' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Se você tiver qualquer feedback, comentários, solicitações de suporte técnico ou outras consultas, entre em contato conosco por e-mail: ',
                bold: false
              },
              { text: 'richard.ac.passos12@gmail.com', bold: true }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              { text: 'Esta ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io/disclaimer/',
                children: [
                  {
                    text: 'Isenção de Garantia'
                  }
                ]
              },
              { text: ' foi criada para ', bold: false },
              { text: 'richardp.vercel.app', bold: true },
              { text: ' por ', bold: false },
              {
                type: 'link',
                url: 'https://policymaker.io',
                children: [
                  {
                    text: 'PolicyMaker.io'
                  }
                ]
              },
              { text: ' em 2024-09-18.', bold: false }
            ]
          }
        ]
      },
      metadata: {
        title: 'Isenção de Garantia',
        description:
          'Explore nossa isenção de garantia, que delineia os limites de responsabilidade e obrigações ao usar o portfólio de Richard Passos. Transparência para sua tranquilidade.'
      }
    },
    {
      type: 'legal',
      slug: 'cookies-policy',
      label: 'Política de Cookies',
      blocks: {
        theme: 'dark',
        header: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Polític' }, { text: 'a de', emphasize: true }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [{ text: ' C', emphasize: true }, { text: 'ookies' }]
            }
          ],
          effectiveDate: [
            {
              type: 'paragraph',
              children: [{ text: 'data de vigência: 2024-09-20' }]
            }
          ]
        },
        data: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Nesta Política de Cookies, forneceremos informações detalhadas sobre como o Portfólio Richard Passos (doravante - "nós" ou "nosso") se comprometerá a garantir a segurança das informações pessoais e a proteção dos direitos dos visitantes e usuários dos sites (doravante - "Visitantes", "Você") enquanto você utiliza nossos sites, incluindo, mas não se limitando a richardp.vercel.app (doravante - o "Site") e o conteúdo nele.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '1. O que é um cookie?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Um cookie é um pequeno arquivo colocado em seu dispositivo que permite os recursos e funcionalidades do nosso Site. Por exemplo, os cookies podem nos permitir identificar seu dispositivo e proteger seu acesso ao Site. Os cookies também permitem que o Site lembre informações sobre sua navegação por um tempo e o reconheça na próxima vez que você visitar o Site. Tudo isso nos permite oferecer a você a oportunidade de usar o Site com conforto e torná-lo ainda mais amigável.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '2. Por que usamos cookies?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Usamos cookies para os seguintes principais propósitos:'
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
                    text: 'Para garantir o funcionamento eficiente e seguro do Site. Usamos cookies para habilitar e suportar nossos recursos de segurança e para nos ajudar a detectar atividades maliciosas em nosso Site.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Para entender, melhorar e pesquisar produtos, recursos e serviços, incluindo quando você acessa nosso Site a partir de outros sites ou dispositivos, como seu computador ou dispositivo móvel.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Para reconhecer os visitantes recorrentes do Site. Os cookies nos ajudam a mostrar as informações corretas e personalizar sua experiência. Os cookies também ajudam a evitar o preenchimento repetido de informações a cada vez que você visita o Site.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Para analisar seus hábitos, de modo que o funcionamento do Site seja conveniente, eficiente e adequado às suas necessidades e expectativas.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Para medir os fluxos de informações e dados enviados ao nosso Site. Usamos cookies para acumular dados estatísticos sobre o número de usuários do Site e seu uso.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '3. Quais cookies usamos?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Cada vez que você visita nosso Site, os cookies de longo prazo (persistentes) podem ser criados, que permanecem no seu navegador após o cadastro e serão lidos por nós quando você retornar ao nosso Site, e os cookies de curto prazo (de sessão), que expiram ou são excluídos após você terminar de navegar em nosso Site (ou seja, geralmente duram durante a visita atual ao nosso Site ou sessão de navegação).'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Cookies usados pela Empresa:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies estritamente necessários. Esses cookies são essenciais para o funcionamento do nosso Site. Eles incluem, por exemplo, cookies que permitem o armazenamento de informações preenchidas por você durante a sessão de navegação, permitem que você faça login em áreas seguras do nosso Site. Sem esses cookies, o funcionamento do Site seria impossível ou poderia ser gravemente afetado.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Cookies de preferências. Estes melhoram o desempenho funcional do nosso Site e tornam mais fácil para você usá-lo. Esses cookies lembram as configurações selecionadas pelos Visitantes (por exemplo, as configurações de idioma ou moeda). Com o uso desses cookies, os Visitantes podem evitar alterações de configurações durante cada visita ao Site. Esses cookies também lembram as alterações feitas por você no Site (por exemplo, caso você deixe um comentário no Site). Esses cookies não rastreiam seu comportamento em outros sites.'
                  }
                ]
              },
              {
                type: 'li',
                children: [
                  {
                    text: 'Análise e Estatísticas. Esses cookies nos mostram se o Visitante já visitou nosso Site antes. Os cookies analíticos nos permitem reconhecer e contar o número de usuários do nosso site e ver como esses usuários navegam pelo nosso Site. Também usamos cookies para entender, melhorar e pesquisar produtos, recursos e serviços. Por exemplo, os cookies analíticos podem nos mostrar quais sites são visitados com mais frequência, nos ajudam a registrar disfunções do Site, etc.'
                  }
                ]
              }
            ]
          },
          {
            type: 'paragraph',
            children: [{ text: 'Cookies de terceiros:' }]
          },
          {
            type: 'list',
            listType: 'unordered',
            children: [
              {
                type: 'li',
                children: [
                  {
                    text: 'Usamos o Google Analytics, um serviço de análise da web fornecido pelo Google, Inc (doravante referido como "Google"). As informações coletadas pelo Google Analytics são transmitidas e armazenadas pelo Google. O Google pode transmitir as informações coletadas pelo Google Analytics a terceiros, conforme exigido pela lei ou quando esses terceiros processam as informações em nome do Google. Recomendamos consultar a Política de Privacidade e Cookies do Google separadamente e com regularidade.'
                  }
                ]
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '4. Como recusar ou bloquear cookies?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Muitos navegadores estão configurados para aceitar automaticamente todos os cookies.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode recusar e definir sua preferência sobre quais cookies permitir, escolhendo na nossa Barra de Consentimento de Cookies. Todos os cookies serão definidos se você aceitar todos clicando em "Aceitar Todos" na nossa Barra de Consentimento de Cookies.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Os Visitantes podem, a seu critério, gerenciar, bloquear ou excluir cookies, se as configurações do seu navegador ou dispositivo permitirem. No entanto, se você recusar ou bloquear os cookies ou outras tecnologias semelhantes, algumas funções do Site podem ficar inacessíveis ou podem não funcionar corretamente.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Chamamos sua atenção para o fato de que os cookies necessários são essenciais para o funcionamento do nosso Site, e, em caso de objeções, alguns recursos do Site podem não funcionar ou podem não funcionar corretamente.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode solicitar que excluamos todos os dados sobre você, conforme coletados e processados com a ajuda dos cookies, entrando em contato pelo e-mail richard.ac.passos12@gmail.com.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode desativar o Google Analytics sem afetar sua navegação em nosso Site. Para mais informações sobre como desativar o rastreamento do Google Analytics em todos os sites que você usa, visite esta página do Google: https://tools.google.com/dlpage/gaoptout.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Você pode encontrar mais informações sobre como excluir cookies, bem como outras informações úteis relacionadas ao uso de cookies, no site http://www.allaboutcookies.org/.'
              }
            ]
          },
          {
            type: 'heading',
            order: 2,
            children: [{ text: '5. Nós atualizamos a Política de Cookies?' }]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Esta Política de Cookies pode ser atualizada por nós periodicamente. Informaremos sobre as atualizações, fornecendo a nova versão da Política de Cookies. Por esse motivo, recomendamos que você visite periodicamente nosso Site, onde sempre encontrará a versão mais recente desta Política de Cookies.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Esta Política de Cookies será aplicada a partir da data de anúncio no Site.'
              }
            ]
          }
        ],
        footer: [
          {
            type: 'small',
            children: [
              {
                text: 'Esta Política foi criada com a ajuda do '
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
        title: 'Política de Cookies',
        description:
          'Descubra como usamos cookies para aprimorar sua experiência no Portfólio de Richard Passos. Aprenda sobre suas opções e nosso compromisso com a privacidade.'
      }
    }
  ];
};

export default pages;
