import { pagesRoot } from './root';

const hero = {
  title: [
    {
      type: 'alignText',
      align: 'left',
      children: [{ text: 'Termos' }, { text: ' &', emphasize: true }]
    },
    {
      type: 'alignText',
      align: 'right',
      children: [{ text: 'C', emphasize: true }, { text: 'ondições' }]
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
    children: [{ text: '1. Introdução' }]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Bem-vindo ao ' },
      { text: 'Portfólio de Richard Passos', bold: true },
      { text: ' (“Empresa”, “nós”, “nosso”, “nos”)!' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Estes Termos e Condições (“Termos”, “Termos de Serviço”) regem o seu uso do nosso site localizado em '
      },
      { text: 'richardp.vercel.app', bold: true },
      {
        text: ' (conjuntamente ou individualmente “Serviço”) operado por '
      },
      { text: 'Portfólio de Richard Passos', bold: true },
      { text: '.' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nossa Política de Privacidade também rege o seu uso do nosso Serviço e explica como coletamos, protegemos e divulgamos informações resultantes do seu uso das nossas páginas da web.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Seu acordo conosco inclui estes Termos e nossa Política de Privacidade (“Acordos”). Você reconhece que leu e entendeu os Acordos e concorda em cumpri-los.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você não concorda com (ou não pode cumprir) os Acordos, então você não pode usar o Serviço, mas por favor, avise-nos enviando um e-mail para '
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      {
        text: ' para que possamos tentar encontrar uma solução. Estes Termos se aplicam a todos os visitantes, usuários e outros que desejam acessar ou usar o Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '2. Comunicações' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Ao usar nosso Serviço, você concorda em assinar newsletters, materiais de marketing ou promocionais e outras informações que possamos enviar. No entanto, você pode optar por não receber nenhuma ou todas essas comunicações de nossa parte, seguindo o link de cancelamento de inscrição ou enviando um e-mail para '
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      { text: '.' }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '3. Concursos, Sorteios e Promoções' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Quaisquer concursos, sorteios ou outras promoções (coletivamente, “Promoções”) disponibilizadas através do Serviço podem ser regidos por regras que são separadas destes Termos de Serviço. Se você participar de qualquer Promoção, por favor, revise as regras aplicáveis, bem como nossa Política de Privacidade. Se as regras de uma Promoção entrarem em conflito com estes Termos de Serviço, as regras da Promoção se aplicarão.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '4. Conteúdo' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O conteúdo encontrado ou através deste Serviço é propriedade de Portfólio de Richard Passos ou usado com permissão. Você não pode distribuir, modificar, transmitir, reutilizar, baixar, republicar, copiar ou usar o referido Conteúdo, seja no todo ou em parte, para fins comerciais ou para ganho pessoal, sem permissão expressa e antecipada por escrito de nossa parte.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '5. Usos Proibidos' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode usar o Serviço apenas para fins legais e de acordo com os Termos. Você concorda em não usar o Serviço:'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.1. De qualquer maneira que viole qualquer lei ou regulamento nacional ou internacional aplicável.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.2. Com o propósito de explorar, prejudicar ou tentar explorar ou prejudicar menores de qualquer maneira, expondo-os a conteúdo inadequado ou de outra forma.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.3. Para transmitir ou providenciar o envio de qualquer material publicitário ou promocional, incluindo qualquer “spam”, “corrente” ou qualquer outra solicitação similar.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.4. Para se passar por ou tentar se passar por Empresa, um funcionário da Empresa, outro usuário ou qualquer outra pessoa ou entidade.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.5. De qualquer maneira que infrinja os direitos de outros, ou de qualquer forma seja ilegal, ameaçador, fraudulento ou prejudicial, ou em conexão com qualquer propósito ou atividade ilegal, fraudulenta ou prejudicial.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.6. Para se envolver em qualquer outra conduta que restrinja ou iniba o uso ou aproveitamento do Serviço por qualquer pessoa, ou que, conforme determinado por nós, possa prejudicar ou ofender a Empresa ou os usuários do Serviço ou expô-los a responsabilidade.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Além disso, você concorda em não:' }]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [
          {
            text: 'Usar o Serviço de qualquer maneira que possa desativar, sobrecarregar, danificar ou prejudicar o Serviço ou interferir com o uso de qualquer outra parte do Serviço, incluindo a capacidade de participar de atividades em tempo real através do Serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Usar qualquer robô, spider ou outro dispositivo automático, processo ou meio para acessar o Serviço para qualquer propósito, incluindo monitorar ou copiar qualquer material no Serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Usar qualquer processo manual para monitorar ou copiar qualquer material no Serviço ou para qualquer outro propósito não autorizado sem o nosso consentimento por escrito prévio.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Usar qualquer dispositivo, software ou rotina que interfira no funcionamento adequado do Serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Introduzir qualquer vírus, cavalos de Troia, worms, bombas lógicas ou outro material que seja malicioso ou tecnologicamente prejudicial.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Tentar obter acesso não autorizado a, interferir com, danificar ou interromper qualquer parte do Serviço, o servidor no qual o Serviço está armazenado ou qualquer servidor, computador ou banco de dados conectado ao Serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Atacar o Serviço por meio de um ataque de negação de serviço ou um ataque distribuído de negação de serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Tomar qualquer ação que possa danificar ou falsificar a avaliação da Empresa.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'De outra forma tentar interferir no funcionamento adequado do Serviço.'
          }
        ]
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '6. Análise' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar prestadores de serviços terceirizados para monitorar e analisar o uso do nosso Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '7. Proibição de Uso por Menores' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Serviço é destinado apenas ao acesso e uso por indivíduos com pelo menos dezoito (18) anos de idade. Ao acessar ou usar o Serviço, você garante e declara que tem pelo menos dezoito (18) anos de idade e a plena autoridade, direito e capacidade para celebrar este acordo e cumprir todos os termos e condições dos Termos. Se você tiver menos de dezoito (18) anos, está proibido tanto de acessar quanto de usar o Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '8. Propriedade Intelectual' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Serviço e seu conteúdo original (excluindo o Conteúdo fornecido pelos usuários), características e funcionalidades são e continuarão sendo propriedade exclusiva do Portfólio de Richard Passos e seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e outras leis de países estrangeiros. Nossas marcas registradas não podem ser usadas em conexão com qualquer produto ou serviço sem o consentimento prévio por escrito do Portfólio de Richard Passos.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '9. Política de Direitos Autorais' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Respeitamos os direitos de propriedade intelectual de terceiros. Nossa política é responder a qualquer reclamação de que o Conteúdo publicado no Serviço infringe os direitos autorais ou outros direitos de propriedade intelectual (“Infração”) de qualquer pessoa ou entidade.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você é o proprietário dos direitos autorais, ou está autorizado em nome de um, e acredita que o trabalho protegido por direitos autorais foi copiado de uma forma que constitui infração de direitos autorais, envie sua reclamação por e-mail para ',
        bold: true
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      {
        text: ', com o assunto: “Infração de Direitos Autorais” e inclua em sua reclamação uma descrição detalhada da alegada Infração conforme detalhado abaixo, sob “Aviso DMCA e Procedimento para Reclamações de Infração de Direitos Autorais”'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode ser responsabilizado por danos (incluindo custos e honorários advocatícios) por representação falsa ou reclamações de má-fé sobre a infração de qualquer Conteúdo encontrado no e/ou através do Serviço relacionado aos seus direitos autorais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: '10. ', bold: true },
      {
        text: 'Aviso DMCA e Procedimento para Reclamações de Infração de Direitos Autorais',
        bold: true
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
            text: 'uma assinatura eletrônica ou física da pessoa autorizada a agir em nome do proprietário do interesse dos direitos autorais;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'uma descrição do trabalho protegido por direitos autorais que você alega ter sido infringido, incluindo a URL (ou seja, o endereço da página da web) do local onde o trabalho protegido por direitos autorais existe ou uma cópia do trabalho protegido por direitos autorais;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'identificação da URL ou outro local específico no Serviço onde o material que você alega estar infringindo está localizado;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'seu endereço, número de telefone e endereço de e-mail;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'uma declaração sua de que você tem a crença de boa-fé de que o uso disputado não é autorizado pelo proprietário dos direitos autorais, seu agente ou pela lei;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'uma declaração sua, feita sob pena de perjúrio, de que as informações acima em seu aviso são precisas e que você é o proprietário dos direitos autorais ou está autorizado a agir em nome do proprietário dos direitos autorais.'
          }
        ]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode entrar em contato com nosso Agente de Direitos Autorais por e-mail para ',
        bold: true
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      { text: '.' }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '11. Relatórios de Erros e Feedback' }]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Você pode nos fornecer diretamente em ', bold: true },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      {
        text: ' ou através de sites e ferramentas de terceiros com informações e feedback sobre erros, sugestões para melhorias, ideias, problemas, reclamações e outros assuntos relacionados ao nosso Serviço (“Feedback”). Você reconhece e concorda que: (i) você não deve reter, adquirir ou reivindicar qualquer direito de propriedade intelectual ou outro direito, título ou interesse no Feedback; (ii) a Empresa pode ter ideias de desenvolvimento semelhantes ao Feedback; (iii) o Feedback não contém informações confidenciais ou proprietárias suas ou de terceiros; e (iv) a Empresa não está sob nenhuma obrigação de confidencialidade em relação ao Feedback. Caso a transferência da propriedade do Feedback não seja possível devido às leis obrigatórias aplicáveis, você concede à Empresa e suas afiliadas um direito exclusivo, transferível, irrevogável, gratuito, sublicenciável, ilimitado e perpétuo de usar (incluindo copiar, modificar, criar obras derivadas, publicar, distribuir e comercializar) o Feedback de qualquer forma e para qualquer finalidade.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '12. Links para Outros Sites' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nosso Serviço pode conter links para sites ou serviços de terceiros que não são propriedade ou controlados pelo Portfólio de Richard Passos.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Portfólio de Richard Passos não tem controle sobre, e não assume nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Não garantimos as ofertas de nenhuma dessas entidades/indivíduos ou seus sites.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Por exemplo, os ' },
      {
        type: 'link',
        url: 'https://policymaker.io/terms-and-conditions/',
        children: [{ text: 'Termos de Uso' }]
      },
      { text: ' descritos foram criados usando ' },
      {
        type: 'link',
        url: 'https://policymaker.io/',
        children: [{ text: 'PolicyMaker.io' }]
      },
      {
        text: ', um aplicativo web gratuito para gerar documentos legais de alta qualidade. O '
      },
      {
        type: 'link',
        url: 'https://policymaker.io/terms-and-conditions/',
        children: [{ text: 'gerador de Termos e Condições' }]
      },
      {
        text: ' da PolicyMaker é uma ferramenta gratuita e fácil de usar para criar um excelente modelo padrão de Termos de Serviço para um site, blog, loja de e-commerce ou aplicativo.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'VOCÊ RECONHECE E CONCORDA QUE A EMPRESA NÃO SERÁ RESPONSÁVEL OU RESPONSÁVEL, DIRETA OU INDIRETAMENTE, POR QUALQUER DANO OU PERDA CAUSADO OU ALEGADO COMO CAUSADO PELO OU EM CONEXÃO COM O USO OU CONFIANÇA EM QUALQUER CONTEÚDO, BENS OU SERVIÇOS DISPONÍVEIS EM OU ATRAVÉS DE QUAISQUER SITES OU SERVIÇOS DE TERCEIROS.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'RECOMENDAMOS ENCARECIDAMENTE QUE VOCÊ LEIA OS TERMOS DE SERVIÇO E POLÍTICAS DE PRIVACIDADE DE QUAISQUER SITES OU SERVIÇOS DE TERCEIROS QUE VOCÊ VISITE.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '13. Isenção de Garantia' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'ESTES SERVIÇOS SÃO FORNECIDOS PELA EMPRESA NA BASE “COMO ESTÁ” E “CONFORME DISPONÍVEL”. A EMPRESA NÃO FAZ NENHUMA REPRESENTAÇÃO OU GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, QUANTO AO FUNCIONAMENTO DOS SEUS SERVIÇOS, OU AS INFORMAÇÕES, CONTEÚDOS OU MATERIAIS INCLUÍDOS NESTES. VOCÊ CONCORDA EXPRESSAMENTE QUE SEU USO DESTES SERVIÇOS, SEU CONTEÚDO E QUAISQUER SERVIÇOS OU ITENS OBTIDOS CONOSCO É POR SUA CONTA E RISCO.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'NEM A EMPRESA NEM QUALQUER PESSOA ASSOCIADA À EMPRESA FAZ QUALQUER GARANTIA OU REPRESENTAÇÃO QUANTO À COMPLETUDE, SEGURANÇA, CONFIABILIDADE, QUALIDADE, PRECISÃO OU DISPONIBILIDADE DOS SERVIÇOS. SEM LIMITAR O ANTERIOR, NEM A EMPRESA NEM QUALQUER PESSOA ASSOCIADA À EMPRESA REPRESENTA OU GARANTE QUE OS SERVIÇOS, SEU CONTEÚDO, OU QUAISQUER SERVIÇOS OU ITENS OBTIDOS ATRAVÉS DOS SERVIÇOS SERÃO PRECISOS, CONFIÁVEIS, LIVRES DE ERROS OU ININTERRUPTOS, QUE OS DEFEITOS SERÃO CORRIGIDOS, QUE OS SERVIÇOS OU O SERVIDOR QUE OS TORNA DISPONÍVEIS ESTÃO LIVRES DE VÍRUS OU OUTROS COMPONENTES NOCIVOS OU QUE OS SERVIÇOS OU QUAISQUER SERVIÇOS OU ITENS OBTIDOS ATRAVÉS DOS SERVIÇOS ATENDERÃO DE OUTRA FORMA ÀS SUAS NECESSIDADES OU EXPECTATIVAS.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'A EMPRESA DESCONHECE TODAS AS GARANTIAS DE QUALQUER TIPO, SEJAM EXPRESSAS OU IMPLÍCITAS, LEGAIS OU OUTRAS, INCLUINDO MAS NÃO SE LIMITANDO A QUALQUER GARANTIA DE COMERCIALIZAÇÃO, NÃO INFRAÇÃO E ADEQUAÇÃO PARA FINALIDADE ESPECÍFICA.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O ANTERIOR NÃO AFETA QUAISQUER GARANTIAS QUE NÃO PODEM SER EXCLUÍDAS OU LIMITADAS SOB A LEI APLICÁVEL.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '14. Limitação de Responsabilidade' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'EXCETO SE PROIBIDO POR LEI, VOCÊ MANTERÁ A NÓS E NOSSOS DIRETORES, FUNCIONÁRIOS E AGENTES ISENTOS DE QUALQUER DANO INDIRETO, PUNITIVO, ESPECIAL, INCIDENTAL OU CONSEQUENCIAL, SEJA QUAL FOR A CAUSA (INCLUINDO HONORÁRIOS ADVOCATÍCIOS E TODOS OS CUSTOS E DESPESAS RELACIONADOS À LITIGAÇÃO E ARBITRAGEM, OU EM JULGAMENTO OU APELAÇÃO, SE HOUVER, SEJA OU NÃO A LITIGAÇÃO OU ARBITRAGEM SEJA INSTITUÍDA), SEJA EM UMA AÇÃO DE CONTRATO, NEGLIGÊNCIA OU OUTRA AÇÃO ILÍCITA, OU DECORRENTE DE OU EM CONEXÃO COM ESTE ACORDO, INCLUINDO SEM LIMITAÇÃO QUALQUER RECLAMAÇÃO POR LESÕES PESSOAIS OU DANOS À PROPRIEDADE, DECORRENTES DESTE ACORDO E QUALQUER VIOLAÇÃO POR VOCÊ DE QUAISQUER LEIS, ESTATUTOS, REGRAS OU REGULAMENTOS FEDERAIS, ESTADUAIS OU LOCAIS, MESMO QUE A EMPRESA TENHA SIDO ANTERIORMENTE AVISADA DA POSSIBILIDADE DE TAL DANO. EXCETO SE PROIBIDO POR LEI, SE HOUVER RESPONSABILIDADE ENCONTRADA POR PARTE DA EMPRESA, ELA SERÁ LIMITADA AO VALOR PAGO PELOS PRODUTOS E/OU SERVIÇOS, E EM NENHUMA HIPÓTESE HAVERÁ DANOS CONSEQUENCIAIS OU PUNITIVOS. ALGUNS ESTADOS NÃO PERMITEM A EXCLUSÃO OU LIMITAÇÃO DE DANOS PUNITIVOS, INCIDENTAIS OU CONSEQUENCIAIS, PORTANTO A ANTERIOR LIMITAÇÃO OU EXCLUSÃO PODE NÃO SE APLICAR A VOCÊ.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '15. Rescisão' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos rescindir ou suspender sua conta e bloquear o acesso ao Serviço imediatamente, sem aviso prévio ou responsabilidade, a nosso exclusivo critério, por qualquer motivo e sem limitação, incluindo, mas não se limitando a, uma violação dos Termos.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você deseja rescindir sua conta, você pode simplesmente parar de usar o Serviço.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Todas as disposições dos Termos que, por sua natureza, devem sobreviver à rescisão sobreviverão à rescisão, incluindo, sem limitação, disposições de propriedade, isenções de garantia, indenização e limitações de responsabilidade.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '16. Lei Aplicável' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, que a lei aplicável se aplica ao acordo sem considerar suas disposições sobre conflitos de leis.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos. Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal, as disposições restantes destes Termos permanecerão em vigor. Estes Termos constituem o acordo completo entre nós a respeito do nosso Serviço e substituem e substituem quaisquer acordos anteriores que possamos ter tido entre nós a respeito do Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '17. Alterações nos Serviços' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Reservamos o direito de retirar ou alterar nossos Serviços, e qualquer serviço ou material que fornecemos através dos Serviços, a nosso exclusivo critério e sem aviso prévio. Não seremos responsáveis se, por qualquer motivo, todo ou qualquer parte dos Serviços estiver indisponível a qualquer momento ou por qualquer período. De tempos em tempos, podemos restringir o acesso a algumas partes dos Serviços, ou a todo o Serviço, para usuários, incluindo usuários registrados.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '18. Alterações nos Termos' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos alterar os Termos a qualquer momento, publicando os termos alterados neste site. É sua responsabilidade revisar estes Termos periodicamente.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Seu uso contínuo da Plataforma após a publicação dos Termos revisados significa que você aceita e concorda com as mudanças. Você deve verificar esta página com frequência para estar ciente de quaisquer alterações, pois elas são vinculativas para você.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Ao continuar a acessar ou usar nossos Serviços após qualquer revisão, você concorda em se vincular aos termos revisados. Se você não concordar com os novos termos, você não está mais autorizado a usar os Serviços.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '19. Renúncia e Separabilidade' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nenhuma renúncia por parte da Empresa a qualquer termo ou condição estabelecido nos Termos será considerada uma renúncia adicional ou contínua a tal termo ou condição ou uma renúncia a qualquer outro termo ou condição, e qualquer falha da Empresa em afirmar um direito ou disposição sob os Termos não constituirá uma renúncia a tal direito ou disposição.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se qualquer disposição dos Termos for considerada por um tribunal ou outro órgão competente como inválida, ilegal ou inexequível por qualquer motivo, tal disposição será eliminada ou limitada ao mínimo necessário para que as disposições restantes dos Termos continuem em pleno vigor e efeito.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '20. Reconhecimento' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'AO USAR OS SERVIÇOS OU OUTROS SERVIÇOS FORNECIDOS POR NÓS, VOCÊ RECONHECE QUE LEU ESTES TERMOS DE CONDIÇÕES E CONCORDA EM ESTAR VINCULADO A ELES.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '21. Contato' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Por favor, envie seu feedback, comentários, solicitações de suporte técnico por e-mail: '
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true }
    ]
  }
];

const footer = [
  {
    type: 'small',
    children: [
      { text: 'Estes ' },
      {
        type: 'link',
        url: 'https://policymaker.io/terms-and-conditions/',
        children: [{ text: 'Termos e Condições' }]
      },
      { text: ' foram criados para ' },
      { text: 'richardp.vercel.app', bold: true },
      { text: ' por ' },
      {
        type: 'link',
        url: 'https://policymaker.io',
        children: [{ text: 'PolicyMaker.io' }]
      },
      { text: ' em 2024-09-18.' }
    ]
  }
];

const termsNConditionsTemplateData = createTemplateData<
  typeof termsNConditionsTemplate
>({ hero: {} });

export { termsNConditionsTemplateData };
