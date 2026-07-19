import { TypescriptIcon } from '@/components/system/Icon/Typescript';
import { NodejsIcon } from '@/components/system/Icon/Nodejs';
import { ReactIcon } from '@/components/system/Icon/React';
import { NextjsIcon } from '@/components/system/Icon/Nextjs';
import { MongodbIcon } from '@/components/system/Icon/Mongodb';
import { MysqlIcon } from '@/components/system/Icon/Mysql';
import { GitIcon } from '@/components/system/Icon/Git';
import { EllipsisIcon } from '@/components/system/Icon/Ellipsis';
import { Skill } from '@/types/Skill';
import { PhpIcon } from '@/components/system/Icon/Php';
import { CppIcon } from '@/components/system/Icon/Cpp';
import { PythonIcon } from '@/components/system/Icon/Python';
import { TailwindcssIcon } from '@/components/system/Icon/Tailwindcss';
import { BootstrapIcon } from '@/components/system/Icon/Bootstrap';

export const SKILLS = [
  {
    id: 'typescript',
    icon: <TypescriptIcon />,
    title: 'TypeScript'
  },
  {
    id: 'react',
    icon: <ReactIcon />,
    title: 'React'
  },
  {
    id: 'nextjs',
    icon: <NextjsIcon />,
    title: 'Next.js'
  },
  {
    id: 'nodejs',
    icon: <NodejsIcon />,
    title: 'Node.js'
  },
  {
    id: 'php',
    icon: <PhpIcon />,
    title: 'PHP'
  },
  {
    id: 'python',
    icon: <PythonIcon />,
    title: 'Python'
  },
  {
    id: 'cpp',
    icon: <CppIcon />,
    title: 'C++'
  },
  {
    id: 'mongodb',
    icon: <MongodbIcon />,
    title: 'MongoDB'
  },
  {
    id: 'mysql',
    icon: <MysqlIcon />,
    title: 'MySQL'
  },
  {
    id: 'git',
    icon: <GitIcon />,
    title: 'Git'
  },
  {
    id: 'tailwindcss',
    icon: <TailwindcssIcon />,
    title: 'Tailwind CSS'
  },
  {
    id: 'bootstrap',
    icon: <BootstrapIcon />,
    title: 'Bootstrap'
  },
  {
    id: 'ellipsis',
    icon: <EllipsisIcon />,
    title: 'Muito mais'
  }
] satisfies Skill[];
