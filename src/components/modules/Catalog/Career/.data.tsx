import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'career-catalog',
  content: {
    empty: t({ en: 'None career found!', pt: 'Nenhuma carreira encontrada!' }),
    items: nest('career')
  }
} satisfies Dictionary;
