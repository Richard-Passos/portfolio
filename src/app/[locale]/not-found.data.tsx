import { NotFoundData } from './not-found';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'not-found-page',
  content: {
    hero: {
      status: t({
        en: 'Error 404',
        pt: 'Erro 404'
      }),
      title: t({
        en: 'Sorry, the page was not found!',
        pt: 'Desculpe, esta página não foi encontrada!'
      }),
      text: t({
        en: 'Let’s get you back to somewhere familiar.',
        pt: 'Vamos levar você de volta para um lugar familiar.'
      }),
      action: t({
        en: 'Home page',
        pt: 'Página Inicial'
      })
    }
  }
} satisfies Dictionary<NotFoundData>;
