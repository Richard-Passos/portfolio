import { Skill } from '@/types';

const skills: Record<string, Record<string, Skill>> = {
  soft: {
    puzzle: {
      title: 'Problem-solving',
      icon: '/icons/puzzle.svg'
    },
    eye: {
      title: 'Detail-oriented',
      icon: '/icons/eye.svg'
    },
    chat: {
      title: 'Communication',
      icon: '/icons/chat.svg'
    },
    adjustments: {
      title: 'Adaptability',
      icon: '/icons/adjustments.svg'
    },
    calendar: {
      title: 'Time management',
      icon: '/icons/calendar.svg'
    },
    compass: {
      title: 'Critical thinking',
      icon: '/icons/compass.svg'
    },
    share: {
      title: 'Synthetic thinking',
      icon: '/icons/share.svg'
    }
  },
  hard: {
    typescript: {
      title: 'TypeScript',
      icon: '/icons/typescript.svg'
    },
    nodejs: {
      title: 'Node.js',
      icon: '/icons/nodejs.svg'
    },
    react: {
      title: 'React Native',
      icon: '/icons/react.svg'
    },
    nextjs: {
      title: 'Next.js',
      icon: '/icons/nextjs.svg'
    },
    mongodb: {
      title: 'MongoDB',
      icon: '/icons/mongodb.svg'
    },
    mysql: {
      title: 'MySQL',
      icon: '/icons/mysql.svg'
    },
    git: {
      title: 'Git',
      icon: '/icons/git.svg'
    },
    ellipsis: {
      title: 'Many more',
      icon: '/icons/ellipsis.svg'
    }
  }
};

export { skills };
