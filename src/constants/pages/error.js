const errorPage = {
  slug: 'error',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Ops...',
        subtitle: 'Something went wrong!',
        description: 'Please try again or go back to Home page.',
        actions: [
          {
            type: '',
            data: {
              href: '/',
              label: 'Back Home',
              variants: {
                color: 'main',
              },
            },
          },
          {
            type: 'reset',
            data: {
              label: 'Try again',
            },
          },
        ],
      },
    },
  ],
  metadata: {
    title: 'Error',
    description: 'Error page on Richard Passos portfolio.',
  },
};

export default errorPage;
