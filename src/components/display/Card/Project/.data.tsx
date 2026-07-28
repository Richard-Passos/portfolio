import { Dictionary, t } from 'intlayer';

export default {
  key: 'project-card',
  content: {
    open: t({ en: 'Go to project page', pt: 'Acessar página do projeto' }),
    noYear: t({ en: 'In progress', pt: 'Em progresso' })
  }
} satisfies Dictionary;
