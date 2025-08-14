import { Skill } from '@/types';

const skills = async (): Promise<{
  hard: Skill[];
  soft: Skill[];
}> => {
  return {
    hard: [
      {
        slug: 'php',
        title: 'PHP',
        icon: '/icons/php.svg'
      },
      {
        slug: 'yii2',
        title: 'Yii2',
        icon: '/icons/yii2.svg'
      },
      {
        slug: 'mysql',
        title: 'MySQL',
        icon: '/icons/mysql.svg'
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
        slug: 'TypeScript',
        title: 'TypeScript',
        icon: '/icons/typescript.svg'
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
        slug: 'git',
        title: 'Git',
        icon: '/icons/git.svg'
      },
      {
        slug: 'tailwindCSS',
        title: 'TailwindCSS',
        icon: '/icons/tailwindcss.svg'
      },
      {
        slug: 'styledComponents',
        title: 'Styled-components',
        icon: '/icons/styled-components.svg'
      }
    ],
    soft: [
      {
        slug: 'problemSolving',
        title: 'Problem-solving',
        icon: '/icons/puzzle.svg'
      },
      {
        slug: 'detailOriented',
        title: 'Detail-oriented',
        icon: '/icons/eye.svg'
      },
      {
        slug: 'communication6',
        title: 'Communication',
        icon: '/icons/chat.svg'
      },
      {
        slug: 'adaptability',
        title: 'Adaptability',
        icon: '/icons/adjustments.svg'
      },
      {
        slug: 'timeManagement',
        title: 'Time management',
        icon: '/icons/calendar.svg'
      },
      {
        slug: 'criticalThinking',
        title: 'Critical thinking',
        icon: '/icons/compass.svg'
      },
      {
        slug: 'syntheticThinking',
        title: 'Synthetic thinking',
        icon: '/icons/share.svg'
      }
    ]
  };
};

export default skills;
