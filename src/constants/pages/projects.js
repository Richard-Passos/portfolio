import projects from '../projects';

const projectsPage = {
  slug: 'projects',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Head turning projects',
        subtitle: "Gotta see'm all",
        block: {
          emptyText: 'Sorry... none projects were found.',
          lastPageText: 'Congrats! You really saw them all.',
          roles: [
            {
              type: 'all',
              data: {
                label: 'All',
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
                label: 'Development',
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
                label: 'Table',
              },
            },
            {
              type: 'grid',
              icon: {
                src: '/images/grid.svg',
              },
              data: {
                label: 'Grid',
              },
            },
          ],
          items: projects.slice(0, 5),
          action: {
            type: '',
            icon: { src: '/images/plus.svg' },
            data: {
              label: 'Load more works',
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
    title: 'Projects',
    description: 'Richard passos projects.',
  },
};

export default projectsPage;
