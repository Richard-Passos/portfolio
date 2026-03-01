import { DeepPartial, ProjectPage } from '@/types';

import { pagesRoot } from './root';

const hero: DeepPartial<ProjectPage['hero']> = {
  theme: 'dark',
  data: {
    action: {
      label: 'Live site'
    }
  };

const blocks: DeepPartial<ProjectPage['blocks']> = {
 {
      description: [
        {
          type: 'paragraph',
          children: [
            {
              text: 'Here are some'
            },
            {
              text: ' awesome shots',
              bold: true
            }
          ]
        }
      ]
    }
  {
      prev: {
        label: 'Prev project'
      },
      next: {
        label: 'Next project'
      }
    }
  };

const projectPage: DeepPartial<ProjectPage> = );

export { data };
