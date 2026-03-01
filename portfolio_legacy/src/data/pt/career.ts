import { Career } from '@/types';

const career: Record<string, Career> = {
  napead: {
    title: 'Bolsista em NAPEAD UFRGS — Produção Multimídia para a Educação',
    roles: ['WEB Dev'],
    year: {
      start: '2025',
      end: 'present'
    },
    description:
      'Fui contratado para redesenhar e modernizar a plataforma de aprendizagem Lumina, que anteriormente funcionava principalmente como uma listagem estática de links para recursos externos, como PDFs e vídeos. Liderei a transformação dessa experiência ao repensar tanto o layout visual quanto a arquitetura.\n\nDesenvolvi um sistema de plugins para o Moodle que permite aos cursos definir seus próprios temas globais, além de gerar templates dinamicamente com suporte a múltiplos idiomas e estruturas de conteúdo flexíveis baseadas em schemas. Essa abordagem melhorou significativamente a usabilidade, a acessibilidade e o engajamento dos cursos, permitindo que educadores adaptem o conteúdo às suas necessidades pedagógicas sem barreiras técnicas.'
  },
  ufrgs: {
    title: 'UFRGS — Ciência da Computação',
    roles: ['Estudante'],
    year: {
      start: '2025',
      end: 'present'
    },
    description:
      'Atualmente cursando Ciência da Computação, com foco em desenvolvimento de software, algoritmos e resolução de problemas. Minha formação acadêmica complementa minha experiência profissional em desenvolvimento, permitindo aplicar conceitos teóricos em plataformas reais e ambientes digitais escaláveis.'
  }
};

export { career };
