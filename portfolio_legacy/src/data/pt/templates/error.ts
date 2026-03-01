import { pagesRoot } from './root';

const hero = {
  theme: 'dark',
  data: {
    title: [
      {
        text: 'Algo deu errado'
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
            text: 'Desculpe, algo deu errado!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Tente novamente'
          }
        ]
      },
      secondary: {
        label: [
          {
            text: 'Voltar ao início'
          }
        ],
        href: '/'
      }
    }
  };

const data = createTemplateData<typeof errorTemplate>({
  ...pagesRoot.error,
  hero
});

export { data };
