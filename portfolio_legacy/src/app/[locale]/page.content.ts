import { type Dictionary, t } from 'intlayer';

const pageContent = {
  key: 'page',
  content: {
    getStarted: {
      main: t({
        en: 'Get started by editing',
        'pt-BR': 'Teste'
      }),
      pageLink: 'src/app/page.tsx'
    }
  }
} satisfies Dictionary;

export default pageContent;
