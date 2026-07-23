import { Career } from '@/types/Career';

export const CAREER = [
  {
    id: 'napead',
    title: 'NAPEAD UFRGS — Produção Multimídia para a Educação',
    roles: ['Bolsista', 'Desenvolvedor Web', 'Ideias em soluções'],
    start: new Date('2025-09-22').getTime(),
    end: undefined,
    text: (
      <>
        <p>
          Minha primeira experiência profissional como desenvolvedor foi no NAPEAD, onde fui
          contratado para modernizar a plataforma <b>Lúmina</b>, construída sobre o Moodle. O
          objetivo era transformar cursos que até então eram, em grande parte, uma sequência de PDFs
          e vídeos, em experiências muito mais dinâmicas, acessíveis e intuitivas.
        </p>

        <p>
          Para isso, mergulhei no ecossistema do Moodle e desenvolvi um conjunto de{' '}
          <b>plugins próprios</b>, incluindo um sistema de templates com formulários dinâmicos
          (CMS), permitindo que professores criassem páginas ricas sem escrever uma única linha de
          código. Também implementei temas globais, automação de inscrições entre edições de cursos,
          histórico centralizado de certificados e outras ferramentas voltadas para melhorar a
          experiência de alunos e administradores.
        </p>

        <p>
          Essas soluções transformaram a forma como os cursos são construídos e mantidos, permitindo
          que a equipe pedagógica criasse experiências mais completas sem depender diretamente de
          desenvolvimento.
        </p>

        <p>
          Mais do que aprender <b>PHP, JavaScript, Bootstrap, Git e versionamento</b>, foi aqui que
          passei a pensar em software como produto: arquitetura, documentação, acessibilidade,
          manutenção, internacionalização e experiência do usuário deixaram de ser conceitos e
          passaram a fazer parte do meu dia a dia.
        </p>
      </>
    )
  },
  {
    id: 'ufrgs',
    title: 'UFRGS — Ciência da Computação',
    roles: ['Estudante', 'Formação acadêmica', 'Constante evolução'],
    start: new Date('2025-07-28').getTime(),
    end: undefined,
    text: (
      <>
        <p>
          Ingressar na <b>Ciência da Computação da UFRGS</b> foi um marco importante na minha
          trajetória. Ser o primeiro da família a entrar em uma universidade pública reforçou ainda
          mais minha dedicação em construir uma carreira na tecnologia.
        </p>

        <p>
          Além da formação acadêmica, a universidade ampliou completamente minha visão sobre
          computação. Tive contato com algoritmos, estruturas de dados, matemática, arquitetura de
          computadores e participei de eventos, palestras e competições como a{' '}
          <b>Olimpíada Brasileira de Informática (OBI)</b>, conhecendo empresas, profissionais e
          diferentes áreas da computação.
        </p>

        <p>
          Conciliar uma graduação exigente com o trabalho me ensinou disciplina, organização e
          constância. Hoje, boa parte da forma como estudo, resolvo problemas e desenvolvo software
          nasceu dessa rotina.
        </p>
      </>
    )
  },
  {
    id: 'hoepers',
    title: 'Hoepers — Recuperadora de Crédito S/A',
    roles: ['CLT', 'Recuperador de crédito', 'Comunicação'],
    start: new Date('2025-02-24').getTime(),
    end: new Date('2025-07-31').getTime(),
    text: (
      <>
        <p>
          Antes de entrar definitivamente na tecnologia, trabalhei durante o dia com recuperação de
          crédito na <b>Hoepers</b> e, nas madrugadas de sexta, sábado e domingo, conciliava essa
          rotina trabalhando como barman. Essa fase foi marcada por muito esforço, disciplina e
          vontade de construir um caminho diefrente.
        </p>

        <p>
          Entrando em contato diariamente com pessoas em situações delicadas. Convencer alguém
          raramente era simples, e cada ligação exigia paciência, empatia e ótima comunicação.
        </p>

        <p>
          Foi um ambiente que me ensinou a lidar com rejeições constantes sem perder a motivação,
          além de desenvolver uma habilidade que levo para qualquer projeto: saber ouvir antes de
          tentar resolver um problema.
        </p>

        <p>
          Mesmo com metas individuais e comissões, a equipe sempre se ajudava. Foi ali que aprendi
          que ambientes colaborativos produzem resultados muito melhores do que qualquer competição
          interna.
        </p>
      </>
    )
  },
  {
    id: 'barman',
    title: 'Barman — Autônomo',
    roles: ['Autônomo', 'Atendimento ao público', 'Gestão operacional'],
    start: new Date('2025-02-24').getTime(),
    end: new Date('2025-09-22').getTime(),
    text: (
      <>
        <p>
          Era uma rotina intensa, conciliando dois trabalhos enquanto atrás do balcão me preparava
          para iniciar a faculdade. Foi uma rotina cansativa, mas que me aproximou ainda mais dos
          meus objetivos.
        </p>

        <p>
          Além de preparar bebidas, também era responsável pelo caixa, controle de estoque e
          atendimento ao público, sempre em ambientes movimentados onde tudo precisava acontecer
          rapidamente.
        </p>

        <p>
          Aprendi a manter a calma sob pressão, organizar prioridades e lidar com pessoas dos mais
          diferentes perfis. São habilidades que continuam fazendo diferença, mesmo anos depois e em
          uma profissão completamente diferente.
        </p>
      </>
    )
  },
  {
    id: 'jt',
    title: 'JT — Indústria e Comércio de Ferramentas LTDA',
    roles: ['CLT', 'Auxiliar de produção', 'Onde tudo começou'],
    start: new Date('2021-10-18').getTime(),
    end: new Date('2025-02-21').getTime(),
    text: (
      <>
        <p>
          Meu primeiro emprego CLT foi como auxiliar de produção em uma serralheria. Trabalhando
          diariamente com máquinas, calor, serragem e muito equipamento de proteção, conheci de
          perto a realidade do trabalho pesado e a importância da responsabilidade em cada tarefa.
        </p>

        <p>
          Curiosamente, foi justamente nesse ambiente que descobri o caminho que queria seguir.
          Percebi que precisava construir algo diferente para o meu futuro e decidi investir em um
          notebook para começar a estudar programação por conta própria.
        </p>

        <p>
          Olhando para trás, esse foi o ponto de partida da minha carreira. Foi ali que entendi que
          oportunidades nem sempre aparecem prontas; muitas vezes, elas começam quando decidimos
          mudar de direção.
        </p>
      </>
    )
  }
] satisfies Career[];
