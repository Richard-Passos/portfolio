const projectPage = {
  slug: 'project',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        actions: [
          {
            type: 'prev',
            icon: {
              src: '/images/arrow-left.svg',
            },
            animation: 'slideLeft',
            data: {
              href: '/projects',
              label: 'Anterior',
              variants: {
                color: 'main',
                size: 'sm',
              },
            },
          },
          {
            type: 'magnetic',
            icon: {
              src: '/images/eye.svg'
            },
            data: {
              label: 'Ver projeto'
            }
          },
          {
            type: 'next',
            icon: {
              src: '/images/arrow-right.svg',
            },
            animation: 'slideRight',
            data: {
              href: '/projects',
              label: 'Próximo',
              variants: {
                color: 'main',
                size: 'sm',
              },
            },
          },
        ],
        infoItems: [
          {
            title: 'Funções',
          },
          {
            title: 'Cliente',
          },
          {
            title: 'Ano',
          },
        ],
        objectiveItems: [
          {
            title: 'O desafio',
          },
          {
            title: 'A solução',
          },
        ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Próximo projeto',
        actions: [
          {
            type: '',
            icon: {
              src: '/images/arrow-up-right.svg',
            },
            data: {
              label: 'Ir para próximo projeto',
              variants: {
                color: 'main',
              },
            },
          },
          {
            type: '',
            icon: { src: '/images/arrow-up.svg' },
            animation: 'slideUp',
            data: {
              label: 'Todos os projetos',
              href: '/projects',
              variants: {
                color: 'main',
              },
            },
          },
        ]
      },
    },
  ],
};

export default projectPage;
