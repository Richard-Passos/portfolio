import { Project } from '@/types';

const projects: Record<string, Project> = {
  'portal-ead': {
    isSelected: true,
    href: 'https://fe-portal-ead.vercel.app',
    title: 'Portal Ead - Sead/UFRGS',
    roles: ['Design', 'Desenvolvimento'],
    year: 2025,
    description:
      'Portal-EAD é um portal web desenvolvido para um processo seletivo de desenvolvedor web na SEAD/UFRGS. O projeto demonstra proficiência em HTML, CSS, JavaScript e Bootstrap, com funcionalidades adicionais implementadas usando TypeScript para tipagem forte e manipulação segura do DOM.',
    thumbnail: {
      src: '/images/portal-ead-thumbnail.png',
      alt: ''
    },
    banner: {
      src: '/images/portal-ead-banner.png',
      alt: ''
    },
    images: [
      {
        src: '/images/portal-ead-00.png',
        alt: ''
      },
      {
        src: '/images/portal-ead-01.png',
        alt: ''
      },
      {
        src: '/images/portal-ead-02.png',
        alt: ''
      }
    ]
  },
  'richard-portfolio': {
    isSelected: true,
    href: 'https://richardp.vercel.app/pt',
    title: 'Richard Portfólio',
    roles: ['Design', 'Desenvolvimento'],
    year: 2024,
    description:
      'A falta de um portfólio limita oportunidades; eu projetei e construí um portfólio pessoal para exibir habilidades, projetos e experiência, oferecendo uma plataforma profissional para atrair potenciais clientes e empregadores.',
    thumbnail: {
      src: '/images/portfolio-pt-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/portfolio-pt-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/portfolio-pt-00.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-pt-01.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-pt-02.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-pt-03.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-pt-04.webp',
        alt: ''
      }
    ]
  },
  'figma-store': {
    isSelected: true,
    href: 'https://festore.vercel.app/pt',
    title: 'Loja Figma',
    roles: ['Desenvolvimento'],
    year: 2024,
    description:
      'A visibilidade limitada de produtos prejudica vendas; eu criei uma coleção vibrante da Figma, aumentando o engajamento e apoiando esforços de reflorestamento com cada compra.',
    thumbnail: {
      src: '/images/store-pt-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/store-pt-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/store-pt-00.webp',
        alt: ''
      },
      {
        src: '/images/store-pt-01.webp',
        alt: ''
      },
      {
        src: '/images/store-pt-02.webp',
        alt: ''
      },
      {
        src: '/images/store-pt-03.webp',
        alt: ''
      }
    ]
  },
  nextflix: {
    isSelected: true,
    href: 'https://nextflix-coral-seven.vercel.app',
    title: 'NextFlix',
    roles: ['Design', 'Desenvolvimento'],
    year: 2023,
    description:
      'Um site de mídia desorganizado frustra os usuários; eu criei um site de listagem de filmes/séries com a API TMDB. Resolvi problemas de organização usando carrosséis, paginação, Redux para estado e troca de tema para personalização.',
    thumbnail: {
      src: '/images/nextflix-en-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/nextflix-en-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/nextflix-en-00.webp',
        alt: ''
      },
      {
        src: '/images/nextflix-en-01.webp',
        alt: ''
      },
      {
        src: '/images/nextflix-en-02.webp',
        alt: ''
      }
    ]
  },
  'todo-list': {
    isSelected: true,
    href: 'https://fe-todo-list-next.vercel.app',
    title: 'Todo List',
    roles: ['Desenvolvimento'],
    year: 2024,
    description:
      'Gerenciar tarefas diárias pode ser caótico; eu criei um site com drag and drop e opções de temas para organizar melhor e aumentar a produtividade.',
    thumbnail: {
      src: '/images/todo-en-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/todo-en-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/todo-en-00.webp',
        alt: ''
      }
    ]
  },
  'in-progress': {
    isSelected: true,
    href: '',
    title: 'Em Progresso',
    roles: ['Desenvolvimento'],
    year: '...',
    description:
      'Desenvolvendo um projeto empolgante, refinando ideias e implementando novas funcionalidades. Fique atento para atualizações!',
    thumbnail: {
      src: '/images/in-progress.webp',
      alt: ''
    },
    banner: {
      src: '/images/in-progress.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/in-progress.webp',
        alt: ''
      }
    ]
  }
};

export { projects };
