import globals from '../globals';
import skills from '../skills';

const contactPage = {
  slug: 'contact',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Afogando em \nótimas ideias?',
        subtitle: 'Vamos fazê-las voar',
        grid: {
          templates: {
            default: '"item-0 .""item-1 item-1""item-2 item-2""item-3 item-3""item-4 item-4"',
            sm: '"item-0 item-1 item-1 item-1""item-0 item-1 item-1 item-1""item-2 item-2 item-3 item-3""item-4 item-4 item-4 item-4"',
            lg: '"item-0 item-1 item-1 item-1 item-2 item-2""item-0 item-1 item-1 item-1 item-3 item-3""item-4 item-4 item-4 item-4 item-4 item-4"',
          },
          items: [
            {
              type: 'icons',
              data: [
                { src: '/images/rocket.svg', title: 'Foguete' },
                { src: '/images/smile.svg', title: 'Sorriso' },
                { src: '/images/globe.svg', title: 'Globo' },
              ],
            },
            {
              type: 'indicator',
              data: {
                description:
                  'Estou aqui pronto para mergulhar fundo e resgatar suas ótimas ideias de te afogar — juntos, vamos aproveitar seu potencial e fazê-las voar para o topo digital.',
              },
            },
            {
              type: 'data-changer',
              data: {
                action: {
                  type: '',
                  icon: { src: '/images/rotate.svg' },
                  data: {
                    label: 'Alterar estatística',
                  },
                },
                items: globals.find((data) => data.slug === 'personal-info')
                  ?.data.stats,
              },
            },
            {
              type: 'data-changer',
              data: {
                action: {
                  type: '',
                  icon: { src: '/images/rotate.svg' },
                  data: {
                    label: 'Alterar skill',
                  },
                },
                items: [{title: 'Hard skills', description: skills.hard?.map(data => data.title).join(', ')}, {title: 'Soft skills', description: skills.soft?.map(data => data.title).join(', ')}],
              },
            },
            {
              type: 'horizontal-scroll',
              data: {
                icons: [
                  { src: '/images/smile.svg', title: 'Sorriso' },
                  { src: '/images/globe.svg', title: 'Globo' },
                ],
                description: 'Dando show e encantando mentes — Melhorar · Inspirar · Repetir —',
              },
            },
          ],
        },
      },
    },
    {
      slug: 'contact',
      theme: 'light',
      id: 'scrollTo',
      data: {
        title: 'Olá · Hello · Ciao · Salut · 你好 ·',
        info: {
          icons: [
            { src: '/images/rocket.svg', title: 'Foguete' },
            { src: '/images/smile.svg', title: 'Sorriso' },
            { src: '/images/globe.svg', title: 'Globo' },
          ],
          items: [
            {
              type: 'text',
              title: 'Disponibilidade',
              description: globals
              .find((data) => data.slug === 'personal-info')
              ?.data.availability
            },
            {
              type: 'local-time',
              title: 'Horário local',
            },
            {
              type: 'text',
              title: 'Localização',
              description: Object.entries(globals
                .find((data) => data.slug === 'personal-info')
                ?.data.location)?.filter(([key]) => key === 'country' || key === 'state').map(([_, value]) => value).join(', ')
            },
            {
              type: 'link',
              title: 'Café',
              ...globals
              .find((data) => data.slug === 'personal-info')
              ?.data.buyCoffee
            }
          ],
        },
        form: {
          title: 'Para',
          subtitle: 'Ou me envie um email',
          subject: '👋 Hey Richard, gostaria de te contratar!',
          fields: [
            {
              name: 'name',
              label: 'Nome',
              optionalText: '',
              control: 'input',
              placeholder: 'João Silva',
              description: 'Seu nome e sobrenome.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'min',
                  params: [2, 'Por favor, esse não pode ser seu nome.'],
                },
              ],
            },
            {
              name: 'email',
              type: 'email',
              label: 'Email',
              optionalText: '',
              control: 'input',
              placeholder: 'joao@silva.com',
              description: 'Seu email profissional.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'email',
                  params: ['O email parece um pouco estranho.'],
                },
              ],
            },
            {
              name: 'subject',
              label: 'Assunto',
              optionalText: 'opcional',
              control: 'input',
              placeholder: 'Quero te contratar!',
              description: 'Assunto que você queira conversar.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'optional',
                  params: [],
                },
              ],
            },
            {
              name: 'service',
              label: 'Serviço',
              optionalText: 'opcional',
              control: 'select',
              placeholder: 'Selecione um serviço...',
              description: 'Selecione o serviço que você deseja.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'optional',
                  params: [],
                },
              ],
              items: globals
                .find((data) => data.slug === 'personal-info')
                ?.data.services?.map((data) => data.title),
            },
            {
              name: 'message',
              label: 'Mensagem',
              optionalText: '',
              control: 'textarea',
              placeholder:
                '👋 Hey Richard! Eu adoraria se você pudesse me ajudar com...',
              description: 'Sua mensagem.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'min',
                  params: [3, 'Vamos lá... você pode fazer melhor que isso.'],
                },
                {
                  name: 'max',
                  params: [300, 'Qual é... pega leve.'],
                },
              ],
            },
          ],
          action: {
            type: '',
            icon: { src: '/images/paperplane.svg' },
            data: {
              label: 'Enviar',
            },
          },
        },
      },
    },
    {
      slug: 'services',
      theme: 'dark',
      data: {
        title: ['Serviços'],
        block: {
          image: {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .services,
          icons: [
            { src: '/images/globe.svg', title: 'Globo' },
            { src: '/images/smile.svg', title: 'Sorriso' },
          ],
        },
      },
    },
  ],
  metadata: {
    title: 'Contato',
    description: 'Detalhes de contato de Richard Passos e formulário de contato.',
  },
};

export default contactPage;
