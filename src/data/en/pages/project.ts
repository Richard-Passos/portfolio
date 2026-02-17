import { DeepPartial, ProjectPage } from '@/types';

import pages from './root';

const hero: DeepPartial<ProjectPage['hero']> = {
  theme: 'dark',
  data: {
    action: {
      label: 'Live site'
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
  },
  adjacents: {
    type: 'Adjacents',
    theme: 'dark',
    data: {
      prev: {
        label: 'Prev project'
      },
      next: {
        label: 'Next project'
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
