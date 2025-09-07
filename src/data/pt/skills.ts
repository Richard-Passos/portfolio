import { Skill } from '@/types';

const skills = async (): Promise<{
  hard: Skill[];
  soft: Skill[];
}> => {
  return {
    hard: [
      {
        slug: 'javaScript',
        title: 'JavaScript',
        icon: '/icons/javascript.svg'
      },
      {
        slug: 'html',
        title: 'HTML',
        icon: '/icons/html.svg'
      },
      {
        slug: 'css',
        title: 'CSS',
        icon: '/icons/css.svg'
      },
      {
        slug: 'typeScript',
        title: 'TypeScript',
        icon: '/icons/typescript.svg'
      },
      {
        slug: 'reactjs',
        title: 'React.js',
        icon: '/icons/react.svg'
      },
      {
        slug: 'nodejs',
        title: 'Node.js',
        icon: '/icons/nodejs.svg'
      },
      {
        slug: 'reactNative',
        title: 'React Native',
        icon: '/icons/react.svg'
      },
      {
        slug: 'nextjs',
        title: 'Next.js',
        icon: '/icons/nextjs.svg'
      },
      {
        slug: 'jest',
        title: 'Jest',
        icon: '/icons/jest.svg'
      },
      {
        slug: 'mongoDB',
        title: 'MongoDB',
        icon: '/icons/mongodb.svg'
      },
      {
        slug: 'mysql',
        title: 'MySQL',
        icon: '/icons/mysql.svg'
      },
      {
        slug: 'git',
        title: 'Git',
        icon: '/icons/git.svg'
      },
      {
        slug: 'tailwindCSS',
        title: 'TailwindCSS',
        icon: '/icons/tailwindcss.svg'
      }
    ],
    soft: [
      {
        slug: 'problemSolving',
        title: 'Resolução de Problemas',
        icon: '/icons/puzzle.svg'
      },
      {
        slug: 'detailOriented',
        title: 'Atenção aos Detalhes',
        icon: '/icons/eye.svg'
      },
      {
        slug: 'communication6',
        title: 'Comunicação',
        icon: '/icons/chat.svg'
      },
      {
        slug: 'adaptability',
        title: 'Adaptabilidade',
        icon: '/icons/adjustments.svg'
      },
      {
        slug: 'timeManagement',
        title: 'Gestão do Tempo',
        icon: '/icons/calendar.svg'
      },
      {
        slug: 'criticalThinking',
        title: 'Pensamento Crítico',
        icon: '/icons/compass.svg'
      },
      {
        slug: 'syntheticThinking',
        title: 'Pensamento Sintético',
        icon: '/icons/share.svg'
      }
    ]
  };
};

export default skills;
