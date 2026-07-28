import { Project } from '@/types/Project';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'projects',
  content: [
    {
      id: 'portal-ead',
      url: 'https://fe-portal-ead.vercel.app',
      title: 'Portal Ead - Sead/UFRGS',
      roles: t({
        en: ['Design', 'Development'],
        pt: ['Design', 'Desenvolvimento']
      }),
      year: 2025,
      text: t({
        en: 'Portal EAD is a web portal developed as part of a Web Developer selection process at SEAD/UFRGS. The project showcases proficiency in HTML, CSS, JavaScript, and Bootstrap, with additional features built using TypeScript for strong typing and safer DOM manipulation.',
        pt: 'Portal-EAD é um portal web desenvolvido para um processo seletivo de desenvolvedor web na SEAD/UFRGS. O projeto demonstra proficiência em HTML, CSS, JavaScript e Bootstrap, com funcionalidades adicionais implementadas usando TypeScript para tipagem forte e manipulação segura do DOM.'
      }),
      prev: 'in-progress',
      next: 'richard-portfolio',
      thumbnail: '/images/portal-ead-thumbnail.png',
      images: [
        '/images/portal-ead-00.png',
        '/images/portal-ead-01.png',
        '/images/portal-ead-02.png'
      ]
    },
    {
      id: 'richard-portfolio',
      url: 'https://richardp.vercel.app',
      title: 'Richard Portfolio',
      roles: t({
        en: ['Design', 'Development'],
        pt: ['Design', 'Desenvolvimento']
      }),
      year: 2024,
      text: t({
        en: 'A missing portfolio limits opportunities. I designed and built my personal portfolio to showcase my skills, projects, and experience, creating a professional space to connect with recruiters, clients, and other developers.',
        pt: 'A falta de um portfólio limita oportunidades; eu projetei e construí um portfólio pessoal para exibir habilidades, projetos e experiência, oferecendo uma plataforma profissional para atrair potenciais clientes e empregadores.'
      }),
      prev: 'portal-ead',
      next: 'figma-store',
      thumbnail: t({
        en: '/images/portfolio-en-thumbnail.webp',
        pt: '/images/portfolio-pt-thumbnail.webp'
      }),
      images: t({
        en: [
          '/images/portfolio-en-00.webp',
          '/images/portfolio-en-01.webp',
          '/images/portfolio-en-02.webp',
          '/images/portfolio-en-03.webp',
          '/images/portfolio-en-04.webp'
        ],
        pt: [
          '/images/portfolio-pt-00.webp',
          '/images/portfolio-pt-01.webp',
          '/images/portfolio-pt-02.webp',
          '/images/portfolio-pt-03.webp',
          '/images/portfolio-pt-04.webp'
        ]
      })
    },
    {
      id: 'figma-store',
      url: 'https://festore.vercel.app/pt',
      title: 'Figma Store',
      roles: t({
        en: ['Development'],
        pt: ['Desenvolvimento']
      }),
      year: 2024,
      text: t({
        en: 'Limited product visibility can hurt sales. I built a vibrant Figma merchandise store, combining a polished shopping experience with a purpose: supporting reforestation through every purchase.',
        pt: 'A visibilidade limitada de produtos prejudica vendas; eu criei uma coleção vibrante da Figma, aumentando o engajamento e apoiando esforços de reflorestamento com cada compra.'
      }),
      prev: 'richard-portfolio',
      next: 'nextflix',
      thumbnail: t({
        en: '/images/store-en-thumbnail.webp',
        pt: '/images/store-pt-thumbnail.webp'
      }),
      images: t({
        en: [
          '/images/store-en-00.webp',
          '/images/store-en-01.webp',
          '/images/store-en-02.webp',
          '/images/store-en-03.webp'
        ],
        pt: [
          '/images/store-pt-00.webp',
          '/images/store-pt-01.webp',
          '/images/store-pt-02.webp',
          '/images/store-pt-03.webp'
        ]
      })
    },
    {
      id: 'nextflix',
      url: 'https://nextflix-coral-seven.vercel.app',
      title: 'NextFlix',
      roles: t({
        en: ['Design', 'Development'],
        pt: ['Design', 'Desenvolvimento']
      }),
      year: 2023,
      text: t({
        en: 'Finding movies and TV shows should feel effortless. Using the TMDB API, I built a streaming-inspired platform featuring carousels, pagination, Redux state management, and theme switching for a smooth browsing experience.',
        pt: 'Um site de mídia desorganizado frustra os usuários; eu criei um site de listagem de filmes/séries com a API TMDB. Resolvi problemas de organização usando carrosséis, paginação, Redux para estado e troca de tema para personalização.'
      }),
      prev: 'figma-store',
      next: 'todo-list',
      thumbnail: '/images/nextflix-thumbnail.webp',
      images: ['/images/nextflix-00.webp', '/images/nextflix-01.webp', '/images/nextflix-02.webp']
    },
    {
      id: 'todo-list',
      url: 'https://fe-todo-list-next.vercel.app',
      title: 'Todo List',
      roles: t({
        en: ['Development'],
        pt: ['Desenvolvimento']
      }),
      year: 2024,
      text: t({
        en: 'Managing daily tasks can quickly become overwhelming. I built a task management app with drag-and-drop interactions and customizable themes to make staying organized simpler and more enjoyable.',
        pt: 'Gerenciar tarefas diárias pode ser caótico; eu criei um site com drag and drop e opções de temas para organizar melhor e aumentar a produtividade.'
      }),
      prev: 'nextflix',
      next: 'in-progress',
      thumbnail: '/images/todo-thumbnail.webp',
      images: ['/images/todo-00.webp']
    },
    {
      id: 'in-progress',
      url: null,
      title: t({
        en: 'In Progress',
        pt: 'Em Progresso'
      }),
      roles: t({
        en: ['Development'],
        pt: ['Desenvolvimento']
      }),
      year: null,
      text: t({
        en: "I'm currently working on an exciting new project, refining ideas and building new features. Stay tuned for updates!",
        pt: 'Desenvolvendo um projeto empolgante, refinando ideias e implementando novas funcionalidades. Fique atento para atualizações!'
      }),
      prev: 'todo-list',
      next: 'portal-ead',
      thumbnail: '/images/in-progress.webp',
      images: null
    }
  ]
} satisfies Dictionary<Project[]>;
