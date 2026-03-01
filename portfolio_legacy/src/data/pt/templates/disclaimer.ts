import { pagesRoot } from './root';

const hero = {
  title: [
    {
      type: 'alignText',
      align: 'left',
      children: [
        {
          text: 'Isençã'
        },
        {
          text: 'o de ',
          emphasize: true
        }
      ]
    },
    {
      type: 'alignText',
      align: 'right',
      children: [
        {
          text: 'G',
          emphasize: true
        },
        {
          text: 'arantia'
        }
      ]
    }
  ],
  effectiveDate: [
    {
      type: 'paragraph',
      children: [{ text: 'última atualização: 2024-09-18' }]
    }
  ]
};

const blocks = [
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE DO SITE' }]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'As informações fornecidas por ', bold: false },
      { text: 'Richard Passos’ Portfolio', bold: true },
      { text: ' (“Empresa”, “nós”, “nosso”, “nos”) em ', bold: false },
      { text: 'richardp.vercel.app', bold: true },
      {
        text: ' (o “Site”) são apenas para fins informativos gerais. Todas as informações no Site são fornecidas de boa-fé; no entanto, não fazemos nenhuma declaração ou garantia de qualquer tipo, expressa ou implícita, quanto à precisão, adequação, validade, confiabilidade, disponibilidade ou completude de qualquer informação no Site.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'EM NENHUMA HIPÓTESE SEREMOS RESPONSÁVEIS POR QUALQUER PERDA OU DANO DE QUALQUER NATUREZA RESULTANTE DO USO DO SITE OU DA CONFIANÇA EM QUALQUER INFORMAÇÃO FORNECIDA NO SITE. O SEU USO DO SITE E SUA CONFIANÇA EM QUALQUER INFORMAÇÃO NO SITE É EXCLUSIVAMENTE POR SUA CONTA E RISCO.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE POR LINKS EXTERNOS' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Site pode conter (ou você pode ser direcionado através do Site) links para outros sites ou conteúdos pertencentes ou originados de terceiros ou links para sites e recursos. Esses links externos não são investigados, monitorados ou verificados quanto à precisão, adequação, validade, confiabilidade, disponibilidade ou completude por nós.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Por exemplo, a ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'Isenção de Garantia'
          }
        ]
      },
      { text: ' descrita foi criada usando ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/',
        children: [
          {
            text: 'PolicyMaker.io'
          }
        ]
      },
      {
        text: ', um aplicativo web gratuito para gerar documentos legais de alta qualidade. O ',
        bold: false
      },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'gerador de isenção de responsabilidade'
          }
        ]
      },
      {
        text: ' da PolicyMaker é uma ferramenta fácil de usar para criar um excelente modelo de Isenção de Garantia para um site, blog, loja de eCommerce ou aplicativo.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'NÃO GARANTIMOS, ENDOSSAMOS, GARANTIMOS OU ASSUMIMOS RESPONSABILIDADE PELA PRECISÃO OU CONFIABILIDADE DE QUALQUER INFORMAÇÃO OFERECIDA POR SITES DE TERCEIROS VINCULADOS ATRAVÉS DO SITE OU QUALQUER SITE OU RECURSO VINCULADO EM QUALQUER BANDEIRA OU OUTRA PUBLICIDADE. NÃO SEREMOS PARTE OU DE QUALQUER FORMA RESPONSÁVEIS POR MONITORAR QUALQUER TRANSAÇÃO ENTRE VOCÊ E FORNECEDORES DE PRODUTOS OU SERVIÇOS DE TERCEIROS.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE POR DEPONENTES' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Site pode conter depoimentos de usuários de nossos produtos e/ou serviços. Esses depoimentos refletem as experiências e opiniões reais desses usuários. No entanto, as experiências são pessoais para esses usuários específicos e podem não ser necessariamente representativas de todos os usuários de nossos produtos e/ou serviços. Não afirmamos, e você não deve presumir que todos os usuários terão as mesmas experiências.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'SEUS RESULTADOS INDIVIDUAIS PODEM VARIAR.' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Os depoimentos no Site são enviados em várias formas, como texto, áudio e/ou vídeo, e são revisados por nós antes de serem publicados. Eles aparecem no Site literalmente como dados pelos usuários, exceto pela correção de erros de gramática ou digitação. Alguns depoimentos podem ter sido abreviados por questões de brevidade, onde o depoimento completo continha informações adicionais não relevantes para o público geral.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'As opiniões e opiniões contidas nos depoimentos pertencem exclusivamente ao usuário individual e não refletem nossas opiniões e visões.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'ISENÇÃO DE RESPONSABILIDADE POR ERROS E OMISSÕES' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Embora tenhamos feito todo o possível para garantir que as informações contidas neste site foram obtidas a partir de fontes confiáveis, Richard Passos’ Portfolio não é responsável por quaisquer erros ou omissões ou pelos resultados obtidos com o uso dessas informações. Todas as informações neste site são fornecidas “como estão”, sem garantia de completude, precisão, pontualidade ou dos resultados obtidos com o uso dessas informações, e sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando a garantias de desempenho, comerciabilidade e adequação para um propósito específico.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Em nenhum caso Richard Passos’ Portfolio, suas parcerias ou corporações relacionadas, ou os parceiros, agentes ou empregados desses serão responsáveis por qualquer decisão tomada ou ação realizada com base nas informações neste Site ou por quaisquer danos consequenciais, especiais ou similares, mesmo que informados da possibilidade desses danos.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [
      {
        text: 'ISENÇÃO DE RESPONSABILIDADE POR LOGOS E MARCAS REGISTRADAS'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Todos os logos e marcas registradas de terceiros referenciados em richardp.vercel.app são marcas e logos de seus respectivos proprietários. Qualquer inclusão de tais marcas ou logos não implica ou constitui qualquer aprovação, endosse ou patrocínio de Richard Passos’ Portfolio por esses proprietários.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'CONTATE-NOS' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você tiver qualquer feedback, comentários, solicitações de suporte técnico ou outras consultas, entre em contato conosco por e-mail: ',
        bold: false
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true }
    ]
  }
];

const footer = [
  {
    type: 'small',
    children: [
      { text: 'Esta ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'Isenção de Garantia'
          }
        ]
      },
      { text: ' foi criada para ', bold: false },
      { text: 'richardp.vercel.app', bold: true },
      { text: ' por ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io',
        children: [
          {
            text: 'PolicyMaker.io'
          }
        ]
      },
      { text: ' em 2024-09-18.', bold: false }
    ]
  }
];

const data = createTemplateData<typeof disclaimerTemplate>({
  hero: {}
});

export { data };
