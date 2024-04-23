const globals = [
  {
    slug: 'header',
    data: {
      navItems: [
        {
          type: '',
          data: {
            href: '/pt',
            label: 'Início',
          },
        },
        {
          type: '',
          data: {
            href: '/pt/work',
            label: 'Trabalho',
          },
        },
        {
          type: '',
          data: {
            href: '/pt/about',
            label: 'Sobre',
          },
        },
        {
          type: '',
          data: {
            href: '/pt/contact',
            label: 'Contato',
          },
        },
      ],
    },
  },
  {
    slug: 'footer',
    theme: 'light',
    data: {
      cta: {
        title: `Vamos fazê\n-las voar`,
        subtitle: 'Suas ótimas ideias estão prontas?',
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            href: '/pt/contact',
            label: 'Ir para página de contato',
            variants: {
              size: 'lg',
            },
          },
        },
      },
      personal: {
        smalls: [
          {
            href: 'https://github.com/Richard-Passos',
            label: 'Feito com ❤️ por <a>Richard</a>',
          },
          {
            href: 'https://www.linkedin.com/in/richardp-dev/',
            label: '© 2024 <a>Richard Passos</a>',
          },
        ],
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up.svg',
          },
          animation: 'slideUp',
          data: {
            label: 'Início',
            variants: {
              color: 'main',
              size: 'sm',
            },
          },
        },
        socialsTitle: 'Redes Sociais',
      },
    },
  },
  {
    slug: 'personal-info',
    data: {
      name: {
        first: 'Richard',
        last: 'Passos',
      },
      description: 'Um ótimo dev full stack para atender suas necessidades.',
      email: 'hi.richardp@gmail.com',
      job: 'Desenvolvedor full stack',
      location: {
        country: 'Brasil',
        state: 'RS',
        gmt: 'GMT-3',
      },
      logo: {
        src: '/images/logo.svg',
        alt: 'Logotipo de Richard Passos',
        width: 220,
        height: 110,
      },
      socials: [
        {
          icon: { src: '/images/github.svg' },
          label: 'Github',
          href: 'https://github.com/Richard-Passos',
        },
        {
          icon: { src: '/images/instagram.svg' },
          label: 'Instagram',
          href: 'https://www.instagram.com/richardp.dev',
        },
        {
          icon: { src: '/images/linkedin.svg' },
          label: 'Linkedin',
          href: 'https://www.linkedin.com/in/richardp-dev',
        },
      ],
      buyCoffee: {
        label: 'Me compre um café',
        href: 'https://www.buymeacoffee.com/richardp.dev',
      },
      availability: 'Disponível para trabalho',
      services: [
        {
          title: 'Front-end',
          description:
            'Crio interfaces de usuário cativantes com cuidado em cada detalhe, priorizando ótimas interações e microanimações encantadoras para elevar o engajamento do usuário.',
        },
        {
          title: 'Back-end',
          description:
            'Crio sistemas robustos no backend que alimentam sua plataforma com eficiência e confiabilidade, garantindo gerenciamento de dados perfeito e funcionalidade escalável.',
        },
        {
          title: 'Full stack',
          description:
          'Integro soluções de ponta a ponta usando tecnologias front e back end de última geração para oferecer resultados impactantes que priorizam a experiência do usuário, escalabilidade e desempenho, garantindo uma experiência digital perfeita.',
        },
      ],
      stats: [
        {
          title: '10ᐩ',
          description: `Projetos \ncompletados`,
        },
        {
          title: '1ᐩ',
          description: `Ano de \nexperiência`,
        },
        {
          title: '100%',
          description: `Ótimos \nprojetos`,
        },
        {
          title: '100%',
          description: `Entregas \npontuais`,
        },
      ],
      values: {
        work: [
          {
            icon: {
              src: '/images/graduation-cap.svg',
              alt: 'Ícone de aprendizado',
              width: 24,
              height: 24,
            },
            title: 'Aprendizado',
            description:
              'Adotando uma mentalidade de aprendizado contínuo para se manter atualizado com as tecnologias, frameworks e melhores práticas.',
          },
          {
            icon: {
              src: '/images/trophy.svg',
              alt: 'Ícone de troféu',
              width: 24,
              height: 24,
            },
            title: 'Excelência',
            description:
              'O compromisso com a excelência impulsiona a busca pela maestria em todos os aspectos do desenvolvimento, garantindo a entrega de soluções de alto nível.',
          },
          {
            icon: {
              src: '/images/check-badge.svg',
              alt: 'Ícone de distintivo de qualidade',
              width: 24,
              height: 24,
            },
            title: 'Foco em qualidade',
            description:
              'Dedicado a dominar todos os aspectos do desenvolvimento, meu compromisso com a qualidade garante soluções de alto nível.',
          },
          {
            icon: {
              src: '/images/smile.svg',
              alt: 'Ícone de sorriso',
              width: 24,
              height: 24,
            },
            title: 'Foco no cliente',
            description:
              'Mantenho o usuário final em mente ao desenvolver um software, garantindo que suas necessidades e expectativas sejam atendidas ou superadas.',
          },
      ],
        personal: [
          {
            icon: {
              src: '/images/shield.svg',
              alt: 'Ícone de integridade',
              width: 24,
              height: 24,
            },
            title: 'Integridade',
            description:
              'Permaneço fiel aos meus valores, me esforçando para agir com honestidade e transparência. Isso me permite construir relacionamentos sólidos e genuínos.',
          },
          {
            icon: {
              src: '/images/globe.svg',
              alt: 'Ícone de curiosidade',
              width: 24,
              height: 24,
            },
            title: 'Curiosidade',
            description:
              'Minha curiosidade inata me leva a explorar novas ideias e descobrir novos caminhos. Cada desafio é uma oportunidade de aprendizado e crescimento pessoal.',
          },
          {
            icon: {
              src: '/images/puzzle.svg',
              alt: 'Ícone de respeito',
              width: 24,
              height: 24,
            },
            title: 'Respeito',
            description:
              'Valorizo profundamente as pessoas ao meu redor e suas histórias únicas. Estou sempre aberto a ouvir e aprender com os outros, reconhecendo a importância de cada voz e experiência.',
          },
          {
            icon: {
              src: '/images/smile.svg',
              alt: 'Ícone de gratidão',
              width: 24,
              height: 24,
            },
            title: 'Gratidão',
            description:
              'Cultivo uma mentalidade de gratidão, reconhecendo e apreciando as pequenas coisas da vida. A gratidão me mantém focado e me inspira a viver com propósito e realização.',
          },
        ],
      },
    },
  },
];

export default globals;
