import { pagesRoot } from './root';

const hero = {
  title: [
    {
      type: 'alignText',
      align: 'left',
      children: [{ text: 'Polític' }, { text: 'a de', emphasize: true }]
    },
    {
      type: 'alignText',
      align: 'right',
      children: [{ text: ' C', emphasize: true }, { text: 'ookies' }]
    }
  ],
  effectiveDate: [
    {
      type: 'paragraph',
      children: [{ text: 'data de vigência: 2024-09-20' }]
    }
  ]
};

const blocks = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nesta Política de Cookies, forneceremos informações detalhadas sobre como o Portfólio Richard Passos (doravante - "nós" ou "nosso") se comprometerá a garantir a segurança das informações pessoais e a proteção dos direitos dos visitantes e usuários dos sites (doravante - "Visitantes", "Você") enquanto você utiliza nossos sites, incluindo, mas não se limitando a richardp.vercel.app (doravante - o "Site") e o conteúdo nele.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '1. O que é um cookie?' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Um cookie é um pequeno arquivo colocado em seu dispositivo que permite os recursos e funcionalidades do nosso Site. Por exemplo, os cookies podem nos permitir identificar seu dispositivo e proteger seu acesso ao Site. Os cookies também permitem que o Site lembre informações sobre sua navegação por um tempo e o reconheça na próxima vez que você visitar o Site. Tudo isso nos permite oferecer a você a oportunidade de usar o Site com conforto e torná-lo ainda mais amigável.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '2. Por que usamos cookies?' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Usamos cookies para os seguintes principais propósitos:'
      }
    ]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [
          {
            text: 'Para garantir o funcionamento eficiente e seguro do Site. Usamos cookies para habilitar e suportar nossos recursos de segurança e para nos ajudar a detectar atividades maliciosas em nosso Site.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Para entender, melhorar e pesquisar produtos, recursos e serviços, incluindo quando você acessa nosso Site a partir de outros sites ou dispositivos, como seu computador ou dispositivo móvel.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Para reconhecer os visitantes recorrentes do Site. Os cookies nos ajudam a mostrar as informações corretas e personalizar sua experiência. Os cookies também ajudam a evitar o preenchimento repetido de informações a cada vez que você visita o Site.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Para analisar seus hábitos, de modo que o funcionamento do Site seja conveniente, eficiente e adequado às suas necessidades e expectativas.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Para medir os fluxos de informações e dados enviados ao nosso Site. Usamos cookies para acumular dados estatísticos sobre o número de usuários do Site e seu uso.'
          }
        ]
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '3. Quais cookies usamos?' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Cada vez que você visita nosso Site, os cookies de longo prazo (persistentes) podem ser criados, que permanecem no seu navegador após o cadastro e serão lidos por nós quando você retornar ao nosso Site, e os cookies de curto prazo (de sessão), que expiram ou são excluídos após você terminar de navegar em nosso Site (ou seja, geralmente duram durante a visita atual ao nosso Site ou sessão de navegação).'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Cookies usados pela Empresa:' }]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [
          {
            text: 'Cookies estritamente necessários. Esses cookies são essenciais para o funcionamento do nosso Site. Eles incluem, por exemplo, cookies que permitem o armazenamento de informações preenchidas por você durante a sessão de navegação, permitem que você faça login em áreas seguras do nosso Site. Sem esses cookies, o funcionamento do Site seria impossível ou poderia ser gravemente afetado.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Cookies de preferências. Estes melhoram o desempenho funcional do nosso Site e tornam mais fácil para você usá-lo. Esses cookies lembram as configurações selecionadas pelos Visitantes (por exemplo, as configurações de idioma ou moeda). Com o uso desses cookies, os Visitantes podem evitar alterações de configurações durante cada visita ao Site. Esses cookies também lembram as alterações feitas por você no Site (por exemplo, caso você deixe um comentário no Site). Esses cookies não rastreiam seu comportamento em outros sites.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Análise e Estatísticas. Esses cookies nos mostram se o Visitante já visitou nosso Site antes. Os cookies analíticos nos permitem reconhecer e contar o número de usuários do nosso site e ver como esses usuários navegam pelo nosso Site. Também usamos cookies para entender, melhorar e pesquisar produtos, recursos e serviços. Por exemplo, os cookies analíticos podem nos mostrar quais sites são visitados com mais frequência, nos ajudam a registrar disfunções do Site, etc.'
          }
        ]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Cookies de terceiros:' }]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [
          {
            text: 'Usamos o Google Analytics, um serviço de análise da web fornecido pelo Google, Inc (doravante referido como "Google"). As informações coletadas pelo Google Analytics são transmitidas e armazenadas pelo Google. O Google pode transmitir as informações coletadas pelo Google Analytics a terceiros, conforme exigido pela lei ou quando esses terceiros processam as informações em nome do Google. Recomendamos consultar a Política de Privacidade e Cookies do Google separadamente e com regularidade.'
          }
        ]
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '4. Como recusar ou bloquear cookies?' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Muitos navegadores estão configurados para aceitar automaticamente todos os cookies.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode recusar e definir sua preferência sobre quais cookies permitir, escolhendo na nossa Barra de Consentimento de Cookies. Todos os cookies serão definidos se você aceitar todos clicando em "Aceitar Todos" na nossa Barra de Consentimento de Cookies.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Os Visitantes podem, a seu critério, gerenciar, bloquear ou excluir cookies, se as configurações do seu navegador ou dispositivo permitirem. No entanto, se você recusar ou bloquear os cookies ou outras tecnologias semelhantes, algumas funções do Site podem ficar inacessíveis ou podem não funcionar corretamente.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Chamamos sua atenção para o fato de que os cookies necessários são essenciais para o funcionamento do nosso Site, e, em caso de objeções, alguns recursos do Site podem não funcionar ou podem não funcionar corretamente.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode solicitar que excluamos todos os dados sobre você, conforme coletados e processados com a ajuda dos cookies, entrando em contato pelo e-mail richard.ac.passos12@gmail.com.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode desativar o Google Analytics sem afetar sua navegação em nosso Site. Para mais informações sobre como desativar o rastreamento do Google Analytics em todos os sites que você usa, visite esta página do Google: https://tools.google.com/dlpage/gaoptout.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode encontrar mais informações sobre como excluir cookies, bem como outras informações úteis relacionadas ao uso de cookies, no site http://www.allaboutcookies.org/.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '5. Nós atualizamos a Política de Cookies?' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Esta Política de Cookies pode ser atualizada por nós periodicamente. Informaremos sobre as atualizações, fornecendo a nova versão da Política de Cookies. Por esse motivo, recomendamos que você visite periodicamente nosso Site, onde sempre encontrará a versão mais recente desta Política de Cookies.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Esta Política de Cookies será aplicada a partir da data de anúncio no Site.'
      }
    ]
  }
];

const footer = [
  {
    type: 'small',
    children: [
      {
        text: 'Esta Política foi criada com a ajuda do '
      },
      {
        type: 'link',
        url: 'https://termshub.io/cookie-policy?utm_source=referral&utm_medium=generated_documents&utm_campaign=referral_documents&utm_content=cp_th_text',
        children: [{ text: 'TermsHub.io' }]
      },
      { text: '.' }
    ]
  }
];

const cookiesPolicyTemplateData = createTemplateData<
  typeof cookiesPolicyTemplate
>({
  hero: {}
});

export { cookiesPolicyTemplateData };
