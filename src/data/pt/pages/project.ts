import { DeepPartial, ProjectPage } from '@/types';

import pages from './root';

const hero: DeepPartial<ProjectPage['hero']> = {
  theme: 'dark',
  data: {
    action: {
      label: 'Ir ao site'
    }
  }
};

const blocks: DeepPartial<ProjectPage['blocks']> = {
  images: {
    type: 'ProjectImages',
    theme: 'dark',
    data: {
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
  },
  adjacents: {
    type: 'Adjacents',
    theme: 'dark',
    data: {
      prev: {
        label: 'Projeto anterior'
      },
      next: {
        label: 'Próximo projeto'
      }
    }
  }
};

const projectPage: DeepPartial<ProjectPage> = {
  ...(pages.project as ProjectPage),
  hero,
  blocks
};

export default projectPage;
