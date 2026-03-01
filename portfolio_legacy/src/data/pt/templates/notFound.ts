import { pagesRoot } from './root';

const hero = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Não Encontrado'
      },
      {
        text: '!',
        emphasize: true
      }
    ],
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Desculpe, pagina não encontrada!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Voltar ao início'
          }
        ],
        href: '/'
      }
    }
  };

const notFoundTemplateData = createTemplateData<typeof notFoundTemplate>({
  ...pages['not-found'],
  hero
});

export { notFoundTemplateData };
