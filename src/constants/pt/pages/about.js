import globals from '../globals';

const aboutPage = {
  slug: 'about',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: `Encantador \nde mentes`,
        subtitle: 'Precisa saber mais',
        icons: [
          { src: '/images/smile.svg', title: 'Sorriso' },
          { src: '/images/globe.svg', title: 'Globo' },
          { src: '/images/rocket.svg', title: 'Foguete' },
        ],
        images: [
          {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          {
            src: '/images/parallax-01.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          {
            src: '/images/parallax-02.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
        ],
      },
    },
    {
      slug: 'background',
      theme: 'dark',
      data: {
        title: ['Quem sou eu'],
        subtitle: 'Apenas alguém que quer encantar mentes.',
        description:
          "Sou Richard, um incrível desenvolvedor full stack do Brasil. Quando não estou codificando, você pode me encontrar no mundo dos jogos — sou um grande fã, especialmente quando se trata de jogos rogue-like.",
        blocks: [
          {
            items: [
              {
                title: 'História',
                description: `Sempre fui uma pessoa dedicada e estudiosa, mas até certo ponto, nunca soube o que realmente queria, não conseguia imaginar meu futuro, alguém sem sonhos. Isso realmente não me incomodava, talvez por falta de senso de realidade, mas após certas experiências, como trabalho e relacionamentos, percebi que precisava de sonhos, precisava encontrar algo que me motivasse. Após horas de pesquisa, realmente buscando algo significativo, encontrei a programação. \nFoi como um momento de epifania; quando li sobre o que envolvia, sobre o que significava ser um desenvolvedor, eu sabia que era isso que eu desejava, uma profissão tão encantadora que se encaixava perfeitamente comigo. Tendo encontrado meu objetivo, comecei a me dedicar insanamente para compensar o tempo perdido, para recuperar anos sem sonhos. Agora tenho meus sonhos, propósitos, e sei exatamente onde quero estar.`,
              },
            ],
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },
            icon: {
              src: '/images/smile.svg',
              title: 'Sorriso',
            },
          },
          {
            items: [
              {
                title: 'Personalidade',
                description:
                  "Sou uma pessoa analítica e autodidata, destacando-me pela minha dedicação. Tenho uma abordagem sintética e crítica, onde transformo informações complexas em decisões inteligentes e eficazes. Essa abordagem não apenas simplifica o processo de tomada de decisão, mas também me permite encontrar soluções inovadoras em meio ao caos aparente.",
              },
              {
                title: 'Missão',
                description:
                  "Tenho uma missão para aprender, cultivar e aproveitar ao máximo. Aprender com a vida e com as pessoas, com meus sucessos e erros. Cultivar relacionamentos genuínos ao longo do caminho. Aproveitar ao máximo as oportunidades e momentos que a vida traz.",
              },
            ],
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },
            icon: {
              src: '/images/globe.svg',
              title: 'Globo',
            },
          },
        ],
      },
    },
    {
      slug: 'values',
      theme: 'light',
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
            .values.personal,
          },
          icons: [
            { src: '/images/smile.svg', title: 'Sorriso' },
            { src: '/images/globe.svg', title: 'Globo' },
          ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Próxima página',
        description: 'Contato ·',
        action: {
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            label: 'Ir para a página de contato',
            href: '/pt/contato',
            variants: {
              color: 'main',
            },
          },
        },
      },
    },
  ],
  metadata: {
    title: 'Sobre',
    description:
      'Sobre Richard Passos, sua História, personalidade, missão e valores.',
  },
};

export default aboutPage;
