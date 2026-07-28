import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'projects-catalog',
  content: {
    empty: t({ en: 'None project found!', pt: 'Nenhuma projeto encontrada!' }),
    items: nest('projects')
  }
} satisfies Dictionary;
