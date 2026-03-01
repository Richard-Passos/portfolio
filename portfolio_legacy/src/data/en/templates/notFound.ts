import { notFoundTemplateSchema } from '@/data/template/schemas';
import { createTemplateData } from '@/utils';

const notFoundTemplateData = createTemplateData<typeof notFoundTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Not found'
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
            text: 'Sorry, page not found!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Back home'
          }
        ],
        href: '/'
      }
    }
  }
});

export { notFoundTemplateData };
