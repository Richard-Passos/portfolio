import { cacheTags } from '@/constants';

import { pagesRoot } from './root';

const hero = {
  id: 'hero',
  type: 'Secondary',
  theme: 'light',
  data: {
    title: [
      {
        text: 'Vendo '
      },
      {
        text: 'o p',
        emphasize: true
      },
      {
        text: 'asssado'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  };


 {
      title: [
        {
          text: 'Sem estresse — vamos te atualizar'
        }
      ],
      messages: {
        loading: [{ text: 'Sincronizando suas alterações...' }],
        success: [{ text: 'Tudo atualizado com sucesso!' }],
        error: [
          {
            text: 'Oops.. Não foi possível atualizar. Vamos tentar de novo?'
          }
        ]
      },
      fields: {
        tags: {
          label: 'Selecione as tags que deseja atualizar.',
          data: { all: 'Todas as tagas disponíveis', ...cacheTags },
          errors: {
            min: 'Selecione ao menos uma tag para continuar.'
          }
        },
        submit: {
          label: [
            {
              text: 'Atualizar Tags Selecionadas'
            }
          ]
        }
      }
    }
  };

const data = createTemplateData<typeof revalidateTemplate>({
hero: {}});

export { data };
