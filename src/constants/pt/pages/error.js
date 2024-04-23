const paginaDeErro = {
  slug: 'error',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Ops...',
        subtitle: 'Algo deu errado!',
        description: 'Por favor, tente novamente ou volte para a página inicial.',
        actions: [
          {
            type: '',
            data: {
              href: '/pt',
              label: 'Página inicial',
              variants: {
                color: 'main',
              },
            },
          },
          {
            type: 'reset',
            data: {
              label: 'Tentar novamente',
            },
          },
        ],
      },
    },
  ],
  metadata: {
    title: 'Erro',
    description: 'Página de erro no portfólio de Richard Passos.',
  },
};

export default paginaDeErro;
