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
            href: '/',
            label: 'Back Home',
            variants: {
              color: 'main',
            },
          },
          {
            type: 'reset',
            label: 'Try again',
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
