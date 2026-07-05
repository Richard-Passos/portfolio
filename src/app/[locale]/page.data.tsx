import { type Dictionary, html, t } from 'intlayer';

const pageData = {
  key: 'home',
  content: {
    hero: {
      title: html(
        t({
          en: 'Beyond code <right>boundaries <em>&</em></right> <mark>results</mark>',
          pt: 'Além de tech <right>algoritmos <em>&</em></right> resultados'
        })
      ),
      description: t({
        en: 'Hey there! I’m Richard, a Computer Science student at UFRGS — also a developer who cares building solid and scalable products.',
        pt: 'Olá! Eu sou Richard, estudante de Ciência da Computação na UFRGS — também um dev que se preocupa em construir produtos sólidos e escaláveis.'
      })
    }
  }
} satisfies Dictionary;

export default pageData;
