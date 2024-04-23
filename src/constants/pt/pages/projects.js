import projects from '../projects';

const projectsPage = {
  slug: 'projects',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Projetos que \ndão show',
        subtitle: "Tem que ver todos",
        block: {
          emptyText: 'Desculpe... nenhum projeto foi encontrado.',
          lastPageText: 'Parabéns! Você realmente viu todos.',
          roles: [
            {
              type: 'all',
              data: {
                label: 'Todos',
              },
            },
            {
              type: 'design',
              data: {
                label: 'Design',
              },
            },
            {
              type: 'development',
              data: {
                label: 'Dev',
              },
            },
          ],
          types: [
            {
              type: 'table',
              icon: {
                src: '/images/list.svg',
              },
              data: {
                label: 'Tabela',
              },
            },
            {
              type: 'grid',
              icon: {
                src: '/images/grid.svg',
              },
              data: {
                label: 'Grade',
              },
            },
          ],
          items: projects.slice(0, 5),
          action: {
            type: '',
            icon: { src: '/images/plus.svg' },
            data: {
              label: 'Carregar mais trabalhos',
              variants: {
                color: 'main',
              },
            },
          },
        },
      },
    },
  ],
  metadata: {
    title: 'Projetos',
    description: 'Projetos de Richard Passos.',
  },
};

export default projectsPage;
