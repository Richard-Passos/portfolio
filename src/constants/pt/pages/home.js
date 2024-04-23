import globals from '../globals';
import projects from '../projects';

const homePage = {
  slug: 'home',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Dando show \n<b>&</b> encantando \nmentes`,
        description:
          "Olá! Eu sou Richard, um incrível desenvolvedor full stack — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.",
        text: '(2024)',
        icon: { src: '/images/smile.svg', title: 'Sorriso' },
      },
    },
    {
      slug: 'work',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        title: ['Sobre', 'trabalho'],
        subtitle: 'Entre num mundo onde a excelência é a norma',
         description:
          "Cada detalhe é uma oportunidade. Cada linha de código que escrevo vai além da mera funcionalidade — elas moldam experiências digitais que cativam. Descubra o impacto de uma parceria que o impulsiona para o topo digital.",
        block: {
          title: 'Trabalhos selecionados',
          items: projects.filter((data) => data.isSelected),
          action: {
            type: '',
            icon: { src: '/images/plus.svg' },
            data: {
              label: 'Mais trabalhos',
              href: '/pt/projects',
              variants: {
                color: 'main',
              },
            },
          },
        },
        list: {
          items: ['Missão', 'Hard & soft skills', 'Serviços'],
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Explorar',
              href: '/pt/work',
              variants: {
                color: 'main',
              },
            },
          },
        },
      },
    },
    {
      slug: 'but',
      theme: 'light',
      data: {
        title: 'Mas',
        description: "não é apenas sobre tech.",
      },
    },
    {
      slug: 'about',
      theme: 'dark',
      data: {
        title: ['Sobre', 'mim'],
        grid: {
          templates: {
            default: '"item-0""item-1""item-2""item-3""item-4""item-5""item-6"',
            sm: '"item-0 item-0""item-1 item-2""item-3 item-4""item-5 item-6"',
            lg: '". item-0 item-0"". item-0 item-0""item-1 item-2 item-3""item-1 item-2 item-4""item-5 item-5 item-6""item-5 item-5 item-6"',
          },
          items: [
            {
              type: 'description',
              data: {
                title: 'Sobre',
                description:
                  "🤟 <b>Hey —</b> Eu sou Richard, um incrível desenvolvedor full stack do Brasil. Quando não estou codificando, você pode me encontrar no mundo dos jogos — sou um grande fã, especialmente quando se trata de jogos rogue-like.",
              },
            },
            {
              type: 'bold',
              data: {
                icon: { src: '/images/globe.svg', title: 'Globo' },
                description: 'Localizado  no Brasil, GMT-3',
              },
            },
            {
              type: 'infinity-scroll',
              data: {
                icon: { src: '/images/fingerprint.svg', title: 'Impressão digital' },
                title: 'Meus valores',
                items: globals.find((data) => data.slug === 'personal-info')?.data
                .values.personal.map((data) => data.title),
              },
            },
            {
              type: 'simple',
              data: {
                icon: { src: '/images/rocket.svg', title: 'Foguete' },
                description: 'Melhorando um pouco a cada dia.',
              },
            },
            {
              type: 'simple',
              data: {
                icon: {
                  src: '/images/game-controller.svg',
                  title: 'Controle de jogo',
                },
                description: 'Eu adoro jogar video-game.',
              },
            },
            {
              type: 'local-time',
              data: {
                title: 'Meu horário local',
              },
            },
            {
              type: 'link',
              data: {
                href: 'https://www.buymeacoffee.com/richardp.dev',
                icon: { src: '/images/mug.svg', title: 'Caneca' },
                title: 'Me compre um café',
              },
            },
          ],
        },
        list: {
          items: ['História', 'Personalidade', 'Hobbies',],
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Explorar',
              href: '/pt/about',
              variants: {
                color: 'main',
              },
            },
          },
        },
      },
    },
    {
      slug: 'cta',
      theme: 'dark',
      data: {
        description:
          "Pronto para elevar suas grandes ideias ao topo digital com um desenvolvedor que traz habilidade e paixão à mesa? Vamos trabalhar juntos e...",
        icons: [
          { src: '/images/smile.svg', title: 'Sorriso' },
          { src: '/images/globe.svg', title: 'Globo' },
        ],
      },
    },
  ],
};

export default homePage;
