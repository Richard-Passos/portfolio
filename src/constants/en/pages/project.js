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
              label: 'Prev',
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
              label: 'View project'
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
              label: 'Next',
              variants: {
                color: 'main',
                size: 'sm',
              },
            },
          },
        ],
        infoItems: [
          {
            title: 'Roles',
          },
          {
            title: 'Client',
          },
          {
            title: 'Year',
          },
        ],
        objectiveItems: [
          {
            title: 'The challenge',
          },
          {
            title: 'The solution',
          },
        ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Next project',
        actions: [
          {
            type: '',
            icon: {
              src: '/images/arrow-up-right.svg',
            },
            data: {
              label: 'Go to next project',
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
              label: 'All projects',
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
