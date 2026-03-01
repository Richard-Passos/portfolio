import { type Dictionary, t } from 'intlayer';

const pageContent = {
  key: 'home',
  content: {
    getStarted: {
      main: t({
        en: 'Get started by editing',
        pt: 'Teste'
      }),
      pageLink: 'src/app/page.tsx'
    }
  }
} satisfies Dictionary;

export default pageContent;
