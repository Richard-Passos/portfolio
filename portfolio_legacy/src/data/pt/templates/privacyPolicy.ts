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
      children: [{ text: ' P', emphasize: true }, { text: 'rivacidade' }]
    }
  ],
  effectiveDate: [
    {
      type: 'paragraph',
      children: [{ text: 'data de vigência: 2024-09-18' }]
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
    children: [{ text: 'Bem-vindo ao Portfólio de Richard Passos.' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Portfólio de Richard Passos ("nós", "nosso") opera '
      },
      { text: 'richardp.vercel.app', bold: true },
      { text: ' (doravante referido como "Serviço").' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Nossa Política de Privacidade governa sua visita ao ' },
      { text: 'richardp.vercel.app', bold: true },
      {
        text: ', e explica como coletamos, protegemos e divulgamos informações resultantes do uso de nosso Serviço.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Usamos seus dados para fornecer e melhorar o Serviço. Ao usar o Serviço, você concorda com a coleta e uso de informações de acordo com esta política. A menos que definido de outra forma nesta Política de Privacidade, os termos usados nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nossos Termos e Condições ("Termos") regulam todo o uso de nosso Serviço e, juntamente com a Política de Privacidade, constituem seu acordo conosco ("acordo").'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '2. Definições' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'SERVIÇO significa o site richardp.vercel.app operado pelo Portfólio de Richard Passos.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'DADOS PESSOAIS significa dados sobre um indivíduo vivo que pode ser identificado a partir desses dados (ou a partir desses e outras informações que estejam em nossa posse ou que provavelmente venham a estar em nossa posse).'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'DADOS DE USO são dados coletados automaticamente, gerados pelo uso do Serviço ou da infraestrutura do Serviço em si (por exemplo, a duração de uma visita a uma página).'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'COOKIES são pequenos arquivos armazenados em seu dispositivo (computador ou dispositivo móvel).'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'CONTROLADOR DE DADOS significa uma pessoa física ou jurídica que (sozinha ou em conjunto com outr) determina as finalidades e a maneira pela qual quaisquer dados pessoais são ou devem ser processados. Para os fins desta Política de Privacidade, somos um Controlador de Dados de seus dados.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'PROCESSADORES DE DADOS (OU PROVEDORES DE SERVIÇOS) significa qualquer pessoa física ou jurídica que processa os dados em nome do Controlador de Dados. Podemos utilizar os serviços de vários Provedores de Serviços para processar seus dados de forma mais eficaz.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O TITULAR DOS DADOS é qualquer indivíduo vivo que seja o sujeito dos Dados Pessoais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O USUÁRIO é o indivíduo que utiliza nosso Serviço. O Usuário corresponde ao Titular dos Dados, que é o sujeito dos Dados Pessoais.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '3. Coleta e Uso de Informações' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Coletamos vários tipos de informações para diversos fins, a fim de fornecer e melhorar nosso Serviço para você.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '4. Tipos de Dados Coletados' }]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Dados Pessoais' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Ao usar nosso Serviço, podemos pedir que você nos forneça certas informações de identificação pessoal que podem ser usadas para entrar em contato ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não estão limitadas a:'
      }
    ]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      { type: 'li', children: [{ text: 'Endereço de e-mail' }] },
      { type: 'li', children: [{ text: 'Nome e sobrenome' }] },
      { type: 'li', children: [{ text: 'Número de telefone' }] },
      {
        type: 'li',
        children: [
          {
            text: 'Endereço, País, Estado, Província, CEP/Código Postal, Cidade'
          }
        ]
      },
      { type: 'li', children: [{ text: 'Cookies e Dados de Uso' }] }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar seus Dados Pessoais para contatá-lo com boletins informativos, materiais de marketing ou promocionais e outras informações que possam ser do seu interesse. Você pode optar por não receber nenhuma, ou todas, essas comunicações de nossa parte, seguindo o link de cancelamento de assinatura.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Dados de Uso' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Também podemos coletar informações que seu navegador envia sempre que você visita nosso Serviço ou quando acessa o Serviço por ou através de qualquer dispositivo ("Dados de Uso").'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Esses Dados de Uso podem incluir informações como o endereço IP do seu computador, tipo de navegador, versão do navegador, as páginas de nosso Serviço que você visita, a data e hora da sua visita, o tempo gasto nessas páginas, identificadores exclusivos de dispositivo e outros dados de diagnóstico.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Quando você acessa o Serviço com um dispositivo, esses Dados de Uso podem incluir informações como o tipo de dispositivo que você usa, o ID exclusivo do seu dispositivo, o endereço IP do seu dispositivo, o sistema operacional do seu dispositivo, o tipo de navegador de Internet que você usa, identificadores exclusivos de dispositivo e outros dados de diagnóstico.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Dados de Localização' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar e armazenar informações sobre sua localização se você nos der permissão para fazê-lo ("Dados de Localização"). Usamos esses dados para fornecer recursos do nosso Serviço, para melhorar e personalizar nosso Serviço.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode ativar ou desativar os serviços de localização quando usa nosso Serviço a qualquer momento, por meio das configurações do seu dispositivo.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Dados de Cookies e Rastreamento' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e manter certas informações.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Cookies são arquivos com uma pequena quantidade de dados, que podem incluir um identificador único anônimo. Os cookies são enviados para o seu navegador a partir de um site e armazenados no seu dispositivo. Outras tecnologias de rastreamento também são usadas, como beacons, tags e scripts para coletar e rastrear informações e para melhorar e analisar nosso Serviço.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode configurar seu navegador para recusar todos os cookies ou para avisar quando um cookie estiver sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes do nosso Serviço.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Exemplos de Cookies que usamos:' }]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [
          {
            text: 'Cookies de Sessão: Usamos Cookies de Sessão para operar nosso Serviço.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Cookies de Preferência: Usamos Cookies de Preferência para lembrar suas preferências e várias configurações.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Cookies de Segurança: Usamos Cookies de Segurança para fins de segurança.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Cookies de Publicidade: Cookies de Publicidade são usados para fornecer anúncios que podem ser relevantes para você e seus interesses.'
          }
        ]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [{ text: 'Outros Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Enquanto usa nosso Serviço, também podemos coletar as seguintes informações: sexo, idade, data de nascimento, local de nascimento, detalhes do passaporte, cidadania, registro no local de residência e endereço atual, número de telefone (trabalho, móvel), detalhes dos documentos de educação, qualificação, treinamento profissional, acordos de trabalho, acordos de NDA, informações sobre bônus e compensação, informações sobre estado civil, membros da família, número de segurança social (ou outro identificador de contribuinte), localização do escritório e outros dados.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '5. Uso dos Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O Portfólio de Richard Passos usa os dados coletados para diversos propósitos:'
      }
    ]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [{ text: 'para fornecer e manter nosso Serviço;' }]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para notificar você sobre mudanças em nosso Serviço;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para permitir que você participe de recursos interativos de nosso Serviço quando escolher fazê-lo;'
          }
        ]
      },
      {
        type: 'li',
        children: [{ text: 'para fornecer suporte ao cliente;' }]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para reunir análises ou informações valiosas para que possamos melhorar nosso Serviço;'
          }
        ]
      },
      {
        type: 'li',
        children: [{ text: 'para monitorar o uso de nosso Serviço;' }]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para detectar, prevenir e resolver problemas técnicos;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para cumprir qualquer outra finalidade para a qual você a forneça;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para cumprir nossas obrigações e fazer valer nossos direitos decorrentes de qualquer contrato celebrado entre você e nós, incluindo para faturamento e cobrança;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para fornecer a você notificações sobre sua conta e/ou assinatura, incluindo notificações de expiração e renovação, instruções por e-mail, etc.;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para fornecer a você notícias, ofertas especiais e informações gerais sobre outros produtos, serviços e eventos que oferecemos, semelhantes àqueles que você já comprou ou sobre os quais fez consultas, a menos que você tenha optado por não receber essas informações;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'de qualquer outra forma que possamos descrever quando você fornecer as informações;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'para qualquer outro propósito com seu consentimento.'
          }
        ]
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '6. Retenção de Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nós reteremos seus Dados Pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade. Reteremos e usaremos seus Dados Pessoais na medida necessária para cumprir nossas obrigações legais (por exemplo, se formos obrigados a reter seus dados para cumprir leis aplicáveis), resolver disputas e fazer cumprir nossos acordos e políticas legais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Também reteremos Dados de Uso para fins de análise interna. Dados de Uso geralmente são retidos por um período mais curto, exceto quando esses dados são usados para fortalecer a segurança ou melhorar a funcionalidade do nosso Serviço, ou quando somos legalmente obrigados a reter esses dados por períodos mais longos.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '7. Transferência de Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Suas informações, incluindo Dados Pessoais, podem ser transferidas para – e mantidas em – computadores localizados fora do seu estado, província, país ou outra jurisdição governamental onde as leis de proteção de dados podem diferir das leis da sua jurisdição.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você estiver localizado fora do Brasil e optar por fornecer informações a nós, observe que transferimos os dados, incluindo Dados Pessoais, para o Brasil e os processamos lá.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Seu consentimento a esta Política de Privacidade seguido do seu envio de tais informações representa sua concordância com essa transferência.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Richard Passos’ Portfolio tomará todas as medidas razoavelmente necessárias para garantir que seus dados sejam tratados de forma segura e de acordo com esta Política de Privacidade, e nenhuma transferência dos seus Dados Pessoais ocorrerá para uma organização ou país, a menos que haja controles adequados em vigor, incluindo a segurança dos seus dados e outras informações pessoais.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '8. Divulgação de Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos divulgar informações pessoais que coletamos ou que você fornece:'
      }
    ]
  },
  {
    type: 'list',
    listType: 'unordered',
    children: [
      {
        type: 'li',
        children: [{ text: 'Divulgação para Aplicação da Lei.' }]
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Sob certas circunstâncias, podemos ser obrigados a divulgar seus Dados Pessoais se for exigido por lei ou em resposta a solicitações válidas de autoridades públicas.'
          }
        ]
      },
      { type: 'li', children: [{ text: 'Transação Comercial.' }] },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Se nós ou nossas subsidiárias estivermos envolvidos em uma fusão, aquisição ou venda de ativos, seus Dados Pessoais podem ser transferidos.'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'Outros casos. Podemos divulgar suas informações também:'
          }
        ]
      },
      {
        type: 'list',
        listType: 'unordered',
        children: [
          {
            type: 'li',
            children: [{ text: 'para nossas subsidiárias e afiliadas;' }]
          },
          {
            type: 'li',
            children: [
              {
                text: 'para contratantes, prestadores de serviços e outros terceiros que utilizamos para apoiar nosso negócio;'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'para cumprir a finalidade para a qual você forneceu;'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'para fins de incluir o logotipo da sua empresa em nosso site;'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'para qualquer outro propósito divulgado por nós quando você fornecer a informação;'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'com seu consentimento em quaisquer outros casos;'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'se acreditarmos que a divulgação é necessária ou apropriada para proteger os direitos, propriedade ou segurança da Empresa, nossos clientes ou terceiros.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '9. Segurança dos Dados' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [
      {
        text: '10. Seus Direitos de Proteção de Dados sob o Regulamento Geral sobre a Proteção de Dados (GDPR)'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você é residente da União Europeia (UE) e do Espaço Econômico Europeu (EEE), você tem certos direitos de proteção de dados, cobertos pelo GDPR.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nos esforçamos para tomar medidas razoáveis para permitir que você corrija, modifique, exclua ou limite o uso de seus Dados Pessoais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você deseja saber quais Dados Pessoais mantemos sobre você e se deseja que eles sejam removidos de nossos sistemas, por favor, envie um e-mail para '
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      { text: '.' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Em certas circunstâncias, você tem os seguintes direitos de proteção de dados:'
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
            text: 'o direito de acessar, atualizar ou excluir as informações que temos sobre você;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'o direito de retificação. Você tem o direito de ter suas informações retificadas se essas informações estiverem incorretas ou incompletas;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'o direito de objeção. Você tem o direito de se opor ao nosso processamento dos seus Dados Pessoais;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'o direito de restrição. Você tem o direito de solicitar que restrinjamos o processamento de suas informações pessoais;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'o direito à portabilidade dos dados. Você tem o direito de receber uma cópia dos seus Dados Pessoais em um formato estruturado, legível por máquina e comumente usado;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'o direito de retirar o consentimento. Você também tem o direito de retirar seu consentimento a qualquer momento, quando dependemos do seu consentimento para processar suas informações pessoais;'
          }
        ]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Observe que podemos solicitar que você verifique sua identidade antes de responder a tais solicitações. Observe que talvez não possamos fornecer o Serviço sem alguns dados necessários.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você tem o direito de reclamar a uma Autoridade de Proteção de Dados sobre nossa coleta e uso dos seus Dados Pessoais. Para mais informações, entre em contato com a autoridade local de proteção de dados no Espaço Econômico Europeu (EEE).'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [
      {
        text: '11. Seus Direitos de Proteção de Dados sob a Lei de Proteção de Privacidade da Califórnia (CalOPPA)'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'CalOPPA é a primeira lei estadual do país a exigir que sites comerciais e serviços online publiquem uma política de privacidade. O alcance da lei vai além da Califórnia, exigindo que uma pessoa ou empresa nos Estados Unidos (e possivelmente no mundo) que opere sites coletando informações pessoais identificáveis de consumidores da Califórnia publique uma política de privacidade visível em seu site, informando exatamente as informações coletadas e com quais indivíduos elas estão sendo compartilhadas, e que cumpra com essa política.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'De acordo com a CalOPPA, concordamos com o seguinte:'
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
          { text: 'os usuários podem visitar nosso site anonimamente;' }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'nosso link de Política de Privacidade inclui a palavra “Privacidade”, e pode ser facilmente encontrado na página inicial do nosso site;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'os usuários serão notificados sobre quaisquer alterações na política de privacidade em nossa Página de Política de Privacidade;'
          }
        ]
      },
      {
        type: 'li',
        children: [
          {
            text: 'os usuários podem alterar suas informações pessoais enviando um e-mail para '
          },
          { text: 'richard.ac.passos12@gmail.com', bold: true },
          { text: '.' }
        ]
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nossa Política sobre Sinais de “Não Rastrear”:'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nós honramos os sinais de Não Rastrear e não rastreamos, plantamos cookies ou usamos publicidade quando um mecanismo de navegador Não Rastrear está em vigor. Não Rastrear é uma preferência que você pode definir em seu navegador para informar aos sites que você não deseja ser rastreado.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Você pode ativar ou desativar o Não Rastrear visitando a página de Preferências ou Configurações de seu navegador.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [
      {
        text: '12. Seus Direitos de Proteção de Dados sob a Lei de Privacidade do Consumidor da Califórnia (CCPA)'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você é um residente da Califórnia, tem o direito de saber quais dados coletamos sobre você, solicitar a exclusão de seus dados e não vendê-los (compartilhá-los). Para exercer seus direitos de proteção de dados, você pode fazer certas solicitações e nos perguntar:'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.1. Quais informações pessoais temos sobre você. Se você fizer essa solicitação, retornaremos para você:',
        bold: true
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.1. As categorias de informações pessoais que coletamos sobre você.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.2. As categorias de fontes das quais coletamos suas informações pessoais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.3. O propósito comercial ou empresarial de coletar ou vender suas informações pessoais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.4. As categorias de terceiros com quem compartilhamos informações pessoais.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.5. As informações pessoais específicas que coletamos sobre você.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.6. Uma lista das categorias de informações pessoais que vendemos, junto com a categoria de qualquer outra empresa para a qual vendemos. Se não vendemos suas informações pessoais, informaremos você sobre esse fato.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.0.7. Uma lista das categorias de informações pessoais que divulgamos para um propósito comercial, juntamente com a categoria de qualquer outra empresa com a qual compartilhamos.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Por favor, note que você tem o direito de nos pedir essas informações até duas vezes em um período de doze meses. Quando você fizer essa solicitação, as informações fornecidas podem ser limitadas às informações pessoais que coletamos sobre você nos últimos 12 meses.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.2. Para excluir suas informações pessoais. Se você fizer essa solicitação, excluiremos as informações pessoais que temos sobre você na data de sua solicitação de nossos registros e orientaremos quaisquer prestadores de serviços a fazer o mesmo. Em alguns casos, a exclusão pode ser realizada por meio da desidentificação das informações. Se você optar por excluir suas informações pessoais, pode não ser capaz de usar certas funções que exigem suas informações pessoais para funcionar.',
        bold: true
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '0.3. Para parar de vender suas informações pessoais. Não vendemos ou alugamos suas informações pessoais a terceiros para nenhum propósito. Não vendemos suas informações pessoais por consideração monetária. No entanto, em algumas circunstâncias, uma transferência de informações pessoais para um terceiro, ou dentro de nossa família de empresas, sem consideração monetária pode ser considerada uma “venda” de acordo com a lei da Califórnia. Você é o único proprietário de seus Dados Pessoais e pode solicitar divulgação ou exclusão a qualquer momento.',
        bold: true
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você enviar uma solicitação para parar de vender suas informações pessoais, pararemos de fazer tais transferências.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Por favor, note que, se você nos pedir para excluir ou parar de vender seus dados, isso pode impactar sua experiência conosco, e você pode não ser capaz de participar de certos programas ou serviços de membresia que exigem o uso de suas informações pessoais para funcionar. Mas, em nenhuma circunstância, iremos discriminar você por exercer seus direitos.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Para exercer seus direitos de proteção de dados na Califórnia descritos acima, por favor, envie suas solicitações por e-mail: ',
        bold: true
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      { text: '.' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Seus direitos de proteção de dados, descritos acima, são cobertos pela CCPA, abreviação de Lei de Privacidade do Consumidor da Califórnia. Para saber mais, visite o site oficial de Informação Legislativa da Califórnia. A CCPA entrou em vigor em 01/01/2020.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '13. Prestadores de Serviços' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos empregar empresas e indivíduos terceiros para facilitar nosso Serviço (',
        bold: true
      },
      { text: '“Prestadores de Serviços”', bold: true },
      {
        text: '), fornecer Serviço em nosso nome, realizar serviços relacionados ao Serviço ou nos ajudar a analisar como nosso Serviço é usado.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Esses terceiros têm acesso aos seus Dados Pessoais apenas para realizar essas tarefas em nosso nome e estão obrigados a não divulgar ou usar para qualquer outro propósito.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '14. Análises' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar Prestadores de Serviços terceiros para monitorar e analisar o uso de nosso Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '15. Ferramentas de CI/CD' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar Prestadores de Serviços terceiros para automatizar o processo de desenvolvimento de nosso Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '16. Remarketing Comportamental' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos usar serviços de remarketing para anunciar em sites de terceiros para você após você visitar nosso Serviço. Nós e nossos fornecedores terceiros usamos cookies para informar, otimizar e servir anúncios com base em suas visitas anteriores ao nosso Serviço.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '17. Links para Outros Sites' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nosso Serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, você será direcionado para o site desse terceiro. Recomendamos fortemente que você revise a Política de Privacidade de cada site que visitar.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Por exemplo, a ', bold: true },
      { text: 'política de privacidade', italic: true },
      { text: ' foi elaborada usando ', bold: true },
      { text: 'PolicyMaker.io', bold: true },
      {
        text: ', uma ferramenta gratuita que ajuda a criar documentos legais de alta qualidade. O ',
        bold: true
      },
      { text: 'gerador de políticas de privacidade', italic: true },
      {
        text: ' do PolicyMaker é uma ferramenta fácil de usar para criar uma ',
        bold: true
      },
      { text: 'política de privacidade para blog', italic: true },
      { text: ', site, loja de e-commerce ou aplicativo móvel.' }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '18. Privacidade das Crianças' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Nossos Serviços não são destinados ao uso por crianças menores de 18 anos (',
        bold: true
      },
      { text: '“Criança”', italic: true },
      { text: ' ou ', bold: true },
      { text: '“Crianças”', italic: true },
      { text: ').' }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Não coletamos conscientemente informações pessoais identificáveis de crianças menores de 18 anos. Se você souber que uma criança nos forneceu Dados Pessoais, entre em contato conosco. Se tomarmos conhecimento de que coletamos Dados Pessoais de crianças sem a verificação do consentimento dos pais, tomaremos medidas para remover essas informações de nossos servidores.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '19. Alterações a Esta Política de Privacidade' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer mudanças publicando a nova Política de Privacidade nesta página.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Informaremos você por e-mail e/ou por meio de um aviso destacado em nosso Serviço, antes que a mudança entre em vigor e atualizaremos a “data de vigência” no topo desta Política de Privacidade.'
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As mudanças a esta Política de Privacidade são efetivas quando são publicadas nesta página.'
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: '20. Contate-Nos' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco por e-mail: '
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true },
      { text: '.' }
    ]
  }
];

const footer = [
  {
    type: 'small',
    children: [
      { text: 'Esta ' },
      {
        type: 'link',
        url: 'https://policymaker.io/privacy-policy/',
        children: [{ text: 'Política de Privacidade' }]
      },
      { text: ' foi criada para ' },
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

const privacyPolicyTemplateData = createTemplateData<
  typeof privacyPolicyTemplate
>({
  hero: {}
});

export { privacyPolicyTemplateData };
