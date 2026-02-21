import { cacheTags } from '@/constants';
import { DefaultPage } from '@/types';

import pages from './root';

const hero: DefaultPage['hero'] = {
  id: 'hero',
  type: 'Secondary',
  theme: 'light',
  data: {
    title: [
      {
        text: 'Wanna tur'
      },
      {
        text: 'n s',
        emphasize: true
      },
      {
        text: 'ome heads'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  }
};

const blocks: DefaultPage['blocks'] = {
  'revalidate-form': {
    type: 'RevalidateForm',
    theme: 'dark',
    data: {
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
  }
};

const revalidatePage: DefaultPage = {
  ...(pages.revalidate as DefaultPage),
  hero,
  blocks
};

export default revalidatePage;
