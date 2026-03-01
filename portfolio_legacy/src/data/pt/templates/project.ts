import { DeepPartial, ProjectTemplateData } from '@/types';

import { pagesRoot } from './root';

const hero: DeepPartial<ProjectPage['hero']> = {
  theme: 'dark',
  data: {
    action: {
      label: 'Ir ao site'
    }
  };

const blocks: DeepPartial<ProjectPage['blocks']> = {
 {
      description: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Aqui estão algumas'
            },
            {
              text: ' ótimas imagens',
              bold: true
            }
          ]
        }
      ]
    }
  {
      prev: {
        label: 'Projeto anterior'
      },
      next: {
        label: 'Próximo projeto'
      }
    }
  };

const projectPage: DeepPartial<ProjectPage> = );

export { data };
