import { Dictionary, nest } from 'intlayer';

export default {
  key: 'header',
  content: {
    nav: nest('pages', 'main')
  }
} satisfies Dictionary;
