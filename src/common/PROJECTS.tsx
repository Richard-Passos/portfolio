import { Project } from '@/types/Project';

export default [
  {
    id: 'portal-ead',
    url: 'https://fe-portal-ead.vercel.app',
    title: 'Portal Ead - Sead/UFRGS',
    roles: ['Design', 'Desenvolvimento'],
    year: 2025,
    text: 'Portal-EAD é um portal web desenvolvido para um processo seletivo de desenvolvedor web na SEAD/UFRGS. O projeto demonstra proficiência em HTML, CSS, JavaScript e Bootstrap, com funcionalidades adicionais implementadas usando TypeScript para tipagem forte e manipulação segura do DOM.',
    prev: 'in-progress',
    next: 'richard-portfolio',
    thumbnail: '/images/portal-ead-thumbnail.png',
    banner: '/images/portal-ead-banner.png',
    images: ['/images/portal-ead-00.png', '/images/portal-ead-01.png', '/images/portal-ead-02.png']
  },
  {
    id: 'richard-portfolio',
    url: 'https://richardp.vercel.app',
    title: 'Richard Portfólio',
    roles: ['Design', 'Desenvolvimento'],
    year: 2024,
    text: 'A falta de um portfólio limita oportunidades; eu projetei e construí um portfólio pessoal para exibir habilidades, projetos e experiência, oferecendo uma plataforma profissional para atrair potenciais clientes e empregadores.',
    prev: 'portal-ead',
    next: 'figma-store',
    thumbnail: '/images/portfolio-pt-thumbnail.webp',
    banner: '/images/portfolio-pt-banner.webp',
    images: [
      '/images/portfolio-pt-00.webp',
      '/images/portfolio-pt-01.webp',
      '/images/portfolio-pt-02.webp',
      '/images/portfolio-pt-03.webp',
      '/images/portfolio-pt-04.webp'
    ]
  },
  {
    id: 'figma-store',
    url: 'https://festore.vercel.app/pt',
    title: 'Loja Figma',
    roles: ['Desenvolvimento'],
    year: 2024,
    text: 'A visibilidade limitada de produtos prejudica vendas; eu criei uma coleção vibrante da Figma, aumentando o engajamento e apoiando esforços de reflorestamento com cada compra.',
    prev: 'richard-portfolio',
    next: 'nextflix',
    thumbnail: '/images/store-pt-thumbnail.webp',
    banner: '/images/store-pt-banner.webp',
    images: [
      '/images/store-pt-00.webp',
      '/images/store-pt-01.webp',
      '/images/store-pt-02.webp',
      '/images/store-pt-03.webp'
    ]
  },
  {
    id: 'nextflix',
    url: 'https://nextflix-coral-seven.vercel.app',
    title: 'NextFlix',
    roles: ['Design', 'Desenvolvimento'],
    year: 2023,
    text: 'Um site de mídia desorganizado frustra os usuários; eu criei um site de listagem de filmes/séries com a API TMDB. Resolvi problemas de organização usando carrosséis, paginação, Redux para estado e troca de tema para personalização.',
    prev: 'figma-store',
    next: 'todo-list',
    thumbnail: '/images/nextflix-thumbnail.webp',
    banner: '/images/nextflix-banner.webp',
    images: ['/images/nextflix-00.webp', '/images/nextflix-01.webp', '/images/nextflix-02.webp']
  },
  {
    id: 'todo-list',
    url: 'https://fe-todo-list-next.vercel.app',
    title: 'Todo List',
    roles: ['Desenvolvimento'],
    year: 2024,
    text: 'Gerenciar tarefas diárias pode ser caótico; eu criei um site com drag and drop e opções de temas para organizar melhor e aumentar a produtividade.',
    prev: 'nextflix',
    next: 'in-progress',
    thumbnail: '/images/todo-thumbnail.webp',
    banner: '/images/todo-banner.webp',
    images: ['/images/todo-00.webp']
  },
  {
    id: 'in-progress',
    url: null,
    title: 'Em Progresso',
    roles: ['Desenvolvimento'],
    year: null,
    text: 'Desenvolvendo um projeto empolgante, refinando ideias e implementando novas funcionalidades. Fique atento para atualizações!',
    prev: 'todo-list',
    next: 'portal-ead',
    thumbnail: '/images/in-progress.webp',
    banner: '/images/in-progress.webp',
    images: null
  }
] satisfies Project[];
