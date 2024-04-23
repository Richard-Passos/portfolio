const notFoundPage = {
  slug: 'not-found',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: '404',
        subtitle: 'Página não encontrada!',
        description:
          'Ops... parece que você se perdeu. Por favor, volte para a página inicial.',
        actions: [
          {
            type: '',
            data: {
              href: '/',
              label: 'Página inicial',
            },
          },
        ],
      },
    },
  ],
  metadata: {
    title: 'Erro',
    description: 'Página não encontrada no portfólio de Richard Passos.',
  },
};

export default notFoundPage;
