import globals from '../globals';
import projects from '../projects';
import skills from '../skills';

const workPage = {
  slug: 'work',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Além de tech, \nalgoritmos <b>&</b> \nmetas`,
        description:
          'Ajudando marcas a alcançar o topo digital. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.',
        text: globals.find((data) => data.slug === 'personal-info')?.data
          .availability,
        icon: { src: '/images/smile.svg', title: 'Sorriso' },
      },
    },
    {
      slug: 'mission',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        description:
          "Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções impactantes. Cada projeto inspira clientes, colegas e comunidade, promovendo um impacto positivo e duradouro. A repetição consistente gera excelência, impulsionando ao topo digital.",
        items: [
          {
            text: 'Melhorar',
            icon: { src: '/images/rocket.svg', title: 'Foguete' },
          },
          {
            text: 'Inspirar',
            icon: { src: '/images/globe.svg', title: 'Globo' },
          },
          {
            text: 'Repetir',
            icon: { src: '/images/smile.svg', title: 'Sorriso' },
          },
        ],
      },
    },
    {
      slug: 'services',
      theme: 'light',
      data: {
        title: ['Serviços'],
        subtitle:
          'Eu moldo soluções além dos limites',
        description:
          "Minhas soluções vão além dos limites tecnológicos, elas não são apenas algoritmos e código. Elas são desenvolvidas para gerar resultados impactantes, levando você ao topo digital.",
        block: {
          title: 'Eu poderia te ajudar com...',
          image: {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Contratar',
              href: '/contato',
              variants: {
                color: 'main',
              },
            },
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .services,
        },
      },
    },
    {
      slug: 'projects',
      theme: 'light',
      data: {
        title: ['Trabalhos', 'selecionados'],
        description:
          'Cada projeto é uma obra-prima sob medida, meticulosamente criada para envolver os usuários com interfaces intuitivas, ótimas interações e experiências cativantes.',
        block: {
          action: {
            type: '',
            icon: { src: '/images/plus.svg' },
            data: {
              label: 'Mais trabalhos',
              href: '/projects',
              variants: {
                color: 'main',
              },
            },
          },
          items: projects.filter((data) => data.isSelected),
        },
      },
    },
    {
      slug: 'why-me',
      theme: 'dark',
      data: {
        title: ['Por que', 'eu'],
        subtitle:
          'Dando show e encantando mentes',
        description:
          "Após projetos que dão show e uma personalidade que encanta mentes a apenas um clique de distância, escolha-me para desbloquear um potencial ilimitado para o seu próximo projeto.",
        action: {
          type: '',
          icon: { src: '/images/arrow-up-right.svg' },
          animation: 'slideUpRight',
          data: {
            label: 'Sobre mim',
            href: '/sobre',
            variants: {
              color: 'main',
              size: 'sm',
            },
          },
        },
        block: {
          title: 'Algumas estatísticas...',
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .stats,
        },
      },
    },
    {
      slug: 'skills',
      theme: 'light',
      data: [
        {
          title: `Hard \nskills`,
          subtitle: 'As melhores do mercado',
          actions: [
            {
              type: 'prev',
              icon: { src: '/images/arrow-left.svg' },
              data: {
                label: 'Skill anterior',
              },
            },
            {
              type: 'next',
              icon: { src: '/images/arrow-right.svg' },
              data: {
                label: 'Próxima skill',
              },
            },
          ],
          items: skills.hard,
        },
        {
          title: `Soft \nskills`,
          subtitle: 'O melhor como pessoa',
          actions: [
            {
              type: 'prev',
              icon: { src: '/images/arrow-left.svg' },
              data: {
                label: 'Skill anterior',
              },
            },
            {
              type: 'next',
              icon: { src: '/images/arrow-right.svg' },
              data: {
                label: 'Próxima skill',
              },
            },
          ],
          items: skills.soft,
        },
      ],
    },
    {
      slug: 'values',
      theme: 'dark',
      data: {
        title: `Meus \nvalores`,
        subtitle: 'Elevando padrões',
        grid: {
          templates: {
            default: '"item-0""item-1""item-2""item-3"',
            sm: '"item-0 item-1""item-2 item-3"',
            lg: '"item-0 item-1 ."". item-2 item-3"'
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .values.work,
          },
          icons: [
            { src: '/images/globe.svg', title: 'Globo' },
            { src: '/images/smile.svg', title: 'Sorriso' },
          ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Próxima página',
        description: 'Sobre mim ·',
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            label: 'Ir para a página sobre mim',
            href: '/sobre',
            variants: {
              color: 'main',
            },
          },
        },
      },
    },
  ],
  metadata: {
    title: 'Trabalho',
    description:
      'Detalhes do trabalho de Richard Passos, sua missão, serviços, alguns projetos, habilidades e mais.',
  },
};

export default workPage;
