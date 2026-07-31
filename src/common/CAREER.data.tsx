import { Career } from '@/types/Career';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'career',
  content: [
    {
      id: 'napead',
      title: t({
        en: 'NAPEAD UFRGS — Multimedia Production for Education',
        pt: 'NAPEAD UFRGS — Produção Multimídia para a Educação'
      }),
      roles: t({
        en: ['Research Fellow', 'Web Developer', 'Turning ideas into solutions'],
        pt: ['Bolsista', 'Desenvolvedor Web', 'Ideias em soluções']
      }),
      start: new Date('2025-09-22').getTime(),
      end: null,
      text: t({
        en: (
          <div>
            <p>
              My first professional experience as a developer was at NAPEAD, where I was hired to
              modernize the <b>Lúmina</b> platform, built on top of Moodle. The goal was to
              transform courses that were, for the most part, little more than a sequence of PDFs
              and videos into experiences that were far more dynamic, accessible, and intuitive.
            </p>

            <p>
              To achieve this, I immersed myself in the Moodle ecosystem and developed a collection
              of <b>custom plugins</b>, including a template system with dynamic forms (CMS),
              allowing instructors to create rich pages without writing a single line of code. I
              also implemented global themes, automated enrollments across course editions, a
              centralized certificate history, and other tools focused on improving the experience
              for both students and administrators.
            </p>

            <p>
              These solutions transformed the way courses are built and maintained, enabling the
              educational team to create richer learning experiences without relying directly on
              developers.
            </p>

            <p>
              More than learning <b>PHP, JavaScript, Bootstrap, Git, and version control</b>, this
              was where I started thinking about software as a product. Architecture, documentation,
              accessibility, maintainability, internationalization, and user experience stopped
              being abstract concepts and became part of my everyday work.
            </p>
          </div>
        ),
        pt: (
          <div>
            <p>
              Minha primeira experiência profissional como desenvolvedor foi no NAPEAD, onde fui
              contratado para modernizar a plataforma <b>Lúmina</b>, construída sobre o Moodle. O
              objetivo era transformar cursos que até então eram, em grande parte, uma sequência de
              PDFs e vídeos, em experiências muito mais dinâmicas, acessíveis e intuitivas.
            </p>

            <p>
              Para isso, mergulhei no ecossistema do Moodle e desenvolvi um conjunto de{' '}
              <b>plugins próprios</b>, incluindo um sistema de templates com formulários dinâmicos
              (CMS), permitindo que professores criassem páginas ricas sem escrever uma única linha
              de código. Também implementei temas globais, automação de inscrições entre edições de
              cursos, histórico centralizado de certificados e outras ferramentas voltadas para
              melhorar a experiência de alunos e administradores.
            </p>

            <p>
              Essas soluções transformaram a forma como os cursos são construídos e mantidos,
              permitindo que a equipe pedagógica criasse experiências mais completas sem depender
              diretamente de desenvolvimento.
            </p>

            <p>
              Mais do que aprender <b>PHP, JavaScript, Bootstrap, Git e versionamento</b>, foi aqui
              que passei a pensar em software como produto: arquitetura, documentação,
              acessibilidade, manutenção, internacionalização e experiência do usuário deixaram de
              ser conceitos e passaram a fazer parte do meu dia a dia.
            </p>
          </div>
        )
      })
    },
    {
      id: 'ufrgs',
      title: t({
        en: 'UFRGS — Computer Science',
        pt: 'UFRGS — Ciência da Computação'
      }),
      roles: t({
        en: ['Student', 'Academic journey', 'Always learning'],
        pt: ['Estudante', 'Formação acadêmica', 'Constante evolução']
      }),
      start: new Date('2025-07-28').getTime(),
      end: null,
      text: t({
        en: (
          <div>
            <p>
              Being accepted into <b>Computer Science at UFRGS</b> was a defining milestone in my
              journey. As the first person in my family to attend a public university, it reinforced
              my commitment to building a career in technology.
            </p>

            <p>
              Beyond the academic curriculum, the university completely broadened my perspective on
              computing. I studied algorithms, data structures, mathematics, and computer
              architecture, while also participating in events, talks, and competitions such as the{' '}
              <b>Brazilian Olympiad in Informatics (OBI)</b>, where I had the opportunity to connect
              with companies, professionals, and different areas of computer science.
            </p>

            <p>
              Balancing a demanding degree with full-time work taught me discipline, organization,
              and consistency. Much of the way I study, solve problems, and build software today was
              shaped by that routine.
            </p>
          </div>
        ),
        pt: (
          <div>
            <p>
              Ingressar na <b>Ciência da Computação da UFRGS</b> foi um marco importante na minha
              trajetória. Ser o primeiro da família a entrar em uma universidade pública reforçou
              ainda mais minha dedicação em construir uma carreira na tecnologia.
            </p>

            <p>
              Além da formação acadêmica, a universidade ampliou completamente minha visão sobre
              computação. Tive contato com algoritmos, estruturas de dados, matemática, arquitetura
              de computadores e participei de eventos, palestras e competições como a{' '}
              <b>Olimpíada Brasileira de Informática (OBI)</b>, conhecendo empresas, profissionais e
              diferentes áreas da computação.
            </p>

            <p>
              Conciliar uma graduação exigente com o trabalho me ensinou disciplina, organização e
              constância. Hoje, boa parte da forma como estudo, resolvo problemas e desenvolvo
              software nasceu dessa rotina.
            </p>
          </div>
        )
      })
    },

    {
      id: 'hoepers',
      title: t({
        en: 'Hoepers — Credit Recovery Company',
        pt: 'Hoepers — Recuperadora de Crédito S/A'
      }),
      roles: t({
        en: ['Employee', 'Credit Recovery Agent', 'Communication'],
        pt: ['CLT', 'Recuperador de crédito', 'Comunicação']
      }),
      start: new Date('2025-02-24').getTime(),
      end: new Date('2025-07-31').getTime(),
      text: t({
        en: (
          <div>
            <p>
              Before transitioning into technology, I worked during the day as a credit recovery
              agent at <b>Hoepers</b> while spending Friday, Saturday, and Sunday nights working as
              a bartender. It was a period defined by hard work, discipline, and determination to
              build a different future.
            </p>

            <p>
              Every day I spoke with people facing difficult financial situations. Convincing
              someone was rarely easy, and each conversation demanded patience, empathy, and clear
              communication.
            </p>

            <p>
              It taught me how to deal with constant rejection without losing motivation, while
              developing a skill I still carry into every project: listening before trying to solve
              a problem.
            </p>

            <p>
              Despite individual goals and commissions, the team always supported one another. It
              was there that I learned collaborative environments consistently achieve better
              results than internal competition.
            </p>
          </div>
        ),
        pt: (
          <div>
            <p>
              Antes de entrar definitivamente na tecnologia, trabalhei durante o dia com recuperação
              de crédito na <b>Hoepers</b> e, nas madrugadas de sexta, sábado e domingo, conciliava
              essa rotina trabalhando como barman. Essa fase foi marcada por muito esforço,
              disciplina e vontade de construir um caminho diferente.
            </p>

            <p>
              Entrando em contato diariamente com pessoas em situações delicadas. Convencer alguém
              raramente era simples, e cada ligação exigia paciência, empatia e ótima comunicação.
            </p>

            <p>
              Foi um ambiente que me ensinou a lidar com rejeições constantes sem perder a
              motivação, além de desenvolver uma habilidade que levo para qualquer projeto: saber
              ouvir antes de tentar resolver um problema.
            </p>

            <p>
              Mesmo com metas individuais e comissões, a equipe sempre se ajudava. Foi ali que
              aprendi que ambientes colaborativos produzem resultados muito melhores do que qualquer
              competição interna.
            </p>
          </div>
        )
      })
    },

    {
      id: 'barman',
      title: t({
        en: 'Bartender — Contract',
        pt: 'Barman — Autônomo'
      }),
      roles: t({
        en: ['Contract', 'Customer Service', 'Operations'],
        pt: ['Autônomo', 'Atendimento ao público', 'Gestão operacional']
      }),
      start: new Date('2025-02-24').getTime(),
      end: new Date('2025-09-22').getTime(),
      text: t({
        en: (
          <div>
            <p>
              It was an intense routine, balancing two jobs while preparing to start university
              behind the bar. It was exhausting, but it brought me closer to the future I wanted.
            </p>

            <p>
              Besides preparing drinks, I was also responsible for cash handling, inventory
              management, and customer service, always in fast-paced environments where everything
              had to happen quickly.
            </p>

            <p>
              I learned to stay calm under pressure, prioritize effectively, and interact with
              people from all kinds of backgrounds. Those skills continue to make a difference years
              later, even in a completely different profession.
            </p>
          </div>
        ),
        pt: (
          <div>
            <p>
              Era uma rotina intensa, conciliando dois trabalhos enquanto atrás do balcão me
              preparava para iniciar a faculdade. Foi uma rotina cansativa, mas que me aproximou
              ainda mais dos meus objetivos.
            </p>

            <p>
              Além de preparar bebidas, também era responsável pelo caixa, controle de estoque e
              atendimento ao público, sempre em ambientes movimentados onde tudo precisava acontecer
              rapidamente.
            </p>

            <p>
              Aprendi a manter a calma sob pressão, organizar prioridades e lidar com pessoas dos
              mais diferentes perfis. São habilidades que continuam fazendo diferença, mesmo anos
              depois e em uma profissão completamente diferente.
            </p>
          </div>
        )
      })
    },

    {
      id: 'jt',
      title: t({
        en: 'JT — Tools Manufacturing & Commerce',
        pt: 'JT — Indústria e Comércio de Ferramentas LTDA'
      }),
      roles: t({
        en: ['Employee', 'Production Assistant', 'Where it all started'],
        pt: ['CLT', 'Auxiliar de produção', 'Onde tudo começou']
      }),
      start: new Date('2021-10-18').getTime(),
      end: new Date('2025-02-21').getTime(),
      text: t({
        en: (
          <div>
            <p>
              My first full-time job was as a production assistant in a metalworking factory.
              Working every day with machinery, heat, sawdust, and protective equipment gave me a
              firsthand understanding of demanding physical work and the importance of
              responsibility in every task.
            </p>

            <p>
              Ironically, it was in that environment that I discovered the path I wanted to follow.
              I realized I wanted something different for my future, so I invested in a laptop and
              started teaching myself programming.
            </p>

            <p>
              Looking back, that was the true starting point of my career. It taught me that
              opportunities rarely arrive ready-made; more often, they begin the moment we decide to
              change direction.
            </p>
          </div>
        ),
        pt: (
          <div>
            <p>
              Meu primeiro emprego CLT foi como auxiliar de produção em uma serralheria. Trabalhando
              diariamente com máquinas, calor, serragem e muito equipamento de proteção, conheci de
              perto a realidade do trabalho pesado e a importância da responsabilidade em cada
              tarefa.
            </p>

            <p>
              Curiosamente, foi justamente nesse ambiente que descobri o caminho que queria seguir.
              Percebi que precisava construir algo diferente para o meu futuro e decidi investir em
              um notebook para começar a estudar programação por conta própria.
            </p>

            <p>
              Olhando para trás, esse foi o ponto de partida da minha carreira. Foi ali que entendi
              que oportunidades nem sempre aparecem prontas; muitas vezes, elas começam quando
              decidimos mudar de direção.
            </p>
          </div>
        )
      })
    }
  ]
} satisfies Dictionary<Career[]>;
