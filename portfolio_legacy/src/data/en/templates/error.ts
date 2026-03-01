import { errorTemplateSchema } from '@/data/template/schemas';
import { createTemplateData } from '@/utils';

const data = createTemplateData<typeof errorTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Something Went Wrong'
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
            text: 'Sorry, something Went Wrong!'
          }
        ]
      }
    ],
    actions: {
      primary: {
        label: [
          {
            text: 'Try again'
          }
        ]
      },
      secondary: {
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

export { data };
