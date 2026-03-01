import { Project } from '@/types';

const projects: Record<string, Project> = {
  'portal-ead': {
    isSelected: true,
    href: 'https://fe-portal-ead.vercel.app',
    title: 'Portal Ead - Sead/UFRGS',
    roles: ['Design', 'Development'],
    year: 2025,
    description:
      'Portal-EAD is a web portal developed for a web developer selection process at SEAD/UFRGS. The project demonstrates proficiency in HTML, CSS, JavaScript, and Bootstrap, with additional functionality implemented using TypeScript for strong typing and safe DOM manipulation.',
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
    href: 'https://richardp.vercel.app/en',
    title: 'Richard Portfolio',
    roles: ['Design', 'Development'],
    year: 2024,
    description:
      'A missing portfolio limits opportunities; I designed and built a personal portfolio to showcase skills, projects, and experience, offering a professional platform to attract potential clients and employers.',
    thumbnail: {
      src: '/images/portfolio-en-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/portfolio-en-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/portfolio-en-00.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-en-01.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-en-02.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-en-03.webp',
        alt: ''
      },
      {
        src: '/images/portfolio-en-04.webp',
        alt: ''
      }
    ]
  },
  'figma-store': {
    isSelected: true,
    href: 'https://festore.vercel.app/en',
    title: 'Figma Store',
    roles: ['Development'],
    year: 2024,
    description:
      'Limited product visibility hurts sales; I created a vibrant Figma collection for eco-conscious ecommerce, enhancing user engagement and supporting reforestation efforts with every purchase.',
    thumbnail: {
      src: '/images/store-en-thumbnail.webp',
      alt: ''
    },
    banner: {
      src: '/images/store-en-banner.webp',
      alt: ''
    },
    images: [
      {
        src: '/images/store-en-00.webp',
        alt: ''
      },

      {
        src: '/images/store-en-01.webp',
        alt: ''
      },
      {
        src: '/images/store-en-02.webp',
        alt: ''
      },
      {
        src: '/images/store-en-03.webp',
        alt: ''
      }
    ]
  },
  nextflix: {
    isSelected: true,
    href: 'https://nextflix-coral-seven.vercel.app',
    title: 'NextFlix',
    roles: ['Design', 'Development'],
    year: 2023,
    description:
      'A disorganized media site frustrates users; Built a movie/TV listing site with TMDB API. Solved organization issues using carousels, pagination, Redux for state, and theme switching for customization.',
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
    roles: ['Development'],
    year: 2024,
    description:
      'Managing daily tasks can be chaotic; I built a website with drag-and-drop and theme options to streamline task organization and improve productivity.',
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
    title: 'In Progress',
    roles: ['Development'],
    year: '...',
    description:
      'Currently developing an exciting project, refining ideas and implementing new features. Stay tuned for updates!',
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
