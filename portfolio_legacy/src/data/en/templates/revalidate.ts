import { revalidateTemplateSchema } from '@/data/template/schemas';
import { createTemplateData } from '@/utils';
import { TAGS } from '@/utils/actions';

const data = createTemplateData<typeof revalidateTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Seeing ol'
      },
      {
        text: 'd c',
        emphasize: true
      },
      {
        text: 'ontent'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  },
  form: {
    title: [
      {
        text: 'No worries — let’s get you up to date'
      }
    ],
    messages: {
      loading: [{ text: 'Syncing your updates...' }],
      success: [{ text: 'Everything is up to date!' }],
      error: [{ text: 'Oops.. Something went wrong. Let’s try that again.' }]
    },
    fields: {
      tags: {
        label: 'Choose which tags you want to update.',
        data: { all: 'All available tags', ...TAGS },
        errors: {
          min: 'At least one tag is required.'
        }
      },
      submit: {
        label: [
          {
            text: 'Update Selected Tags'
          }
        ]
      }
    }
  }
});

export { data };
