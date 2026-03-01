import { Skill } from '@/types';

const skills: Record<string, Record<string, Skill>> = {
  soft: {
    puzzle: {
      icon: '/icons/puzzle.svg',
      title: 'Resolução de Problemas'
    },
    eye: {
      icon: '/icons/eye.svg',
      title: 'Atenção aos Detalhes'
    },
    chat: {
      icon: '/icons/chat.svg',
      title: 'Comunicação'
    },
    adjustments: {
      icon: '/icons/adjustments.svg',
      title: 'Adaptabilidade'
    },
    calendar: {
      icon: '/icons/calendar.svg',
      title: 'Gestão do Tempo'
    },
    compass: {
      icon: '/icons/compass.svg',
      title: 'Pensamento Crítico'
    },
    share: {
      icon: '/icons/share.svg',
      title: 'Pensamento Sintético'
    }
  },
  hard: {
    typescript: {
      icon: '/icons/typescript.svg',
      title: 'TypeScript'
    },
    nodejs: {
      icon: '/icons/nodejs.svg',
      title: 'Node.js'
    },
    react: {
      icon: '/icons/react.svg',
      title: 'React Native'
    },
    nextjs: {
      icon: '/icons/nextjs.svg',
      title: 'Next.js'
    },
    mongodb: {
      icon: '/icons/mongodb.svg',
      title: 'MongoDB'
    },
    mysql: {
      icon: '/icons/mysql.svg',
      title: 'MySQL'
    },
    git: {
      icon: '/icons/git.svg',
      title: 'Git'
    },
    ellipsis: {
      icon: '/icons/ellipsis.svg',
      title: 'Muito mais'
    }
  }
};

export { skills };
