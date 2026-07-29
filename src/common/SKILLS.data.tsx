import { Skill } from '@/types/Skill';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'skills',
  content: [
    {
      id: 'typescript',
      title: 'TypeScript'
    },
    {
      id: 'react',
      title: 'React'
    },
    {
      id: 'nextjs',
      title: 'Next.js'
    },
    {
      id: 'nodejs',
      title: 'Node.js'
    },
    {
      id: 'php',
      title: 'PHP'
    },
    {
      id: 'python',
      title: 'Python'
    },
    {
      id: 'cpp',
      title: 'C++'
    },
    {
      id: 'mongodb',
      title: 'MongoDB'
    },
    {
      id: 'mysql',
      title: 'MySQL'
    },
    {
      id: 'git',
      title: 'Git'
    },
    {
      id: 'tailwindcss',
      title: 'Tailwind CSS'
    },
    {
      id: 'bootstrap',
      title: 'Bootstrap'
    },
    {
      id: 'ellipsis',
      title: t({ en: 'Much more', pt: 'Muito mais' })
    }
  ]
} satisfies Dictionary<Pick<Skill, 'id' | 'title'>[]>;
