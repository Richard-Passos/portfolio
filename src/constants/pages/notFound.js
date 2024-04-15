const notFoundPage = {
  slug: 'not-found',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: '404',
        subtitle: 'Page not found!',
        description:
          "Ops... looks like you're lost. Please go back to Home page.",
        actions: [
          {
            type: '',
            data: {
              href: '/',
              label: 'Back Home',
            },
          },
        ],
      },
    },
  ],
  metadata: {
    title: 'Error',
    description: 'Not found page on Richard Passos portfolio.',
  },
};

export default notFoundPage;
