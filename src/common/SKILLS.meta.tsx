import { TypescriptIcon } from '@/components/system/Icon/Typescript';
import { NodejsIcon } from '@/components/system/Icon/Nodejs';
import { ReactIcon } from '@/components/system/Icon/React';
import { NextjsIcon } from '@/components/system/Icon/Nextjs';
import { MongodbIcon } from '@/components/system/Icon/Mongodb';
import { MysqlIcon } from '@/components/system/Icon/Mysql';
import { GitIcon } from '@/components/system/Icon/Git';
import { EllipsisIcon } from '@/components/system/Icon/Ellipsis';
import { PhpIcon } from '@/components/system/Icon/Php';
import { CppIcon } from '@/components/system/Icon/Cpp';
import { PythonIcon } from '@/components/system/Icon/Python';
import { TailwindcssIcon } from '@/components/system/Icon/Tailwindcss';
import { BootstrapIcon } from '@/components/system/Icon/Bootstrap';
import { Skill } from '@/types/Skill';

export default {
  typescript: {
    Icon: TypescriptIcon
  },
  react: {
    Icon: ReactIcon
  },
  nextjs: {
    Icon: NextjsIcon
  },
  nodejs: {
    Icon: NodejsIcon
  },
  php: {
    Icon: PhpIcon
  },
  python: {
    Icon: PythonIcon
  },
  cpp: {
    Icon: CppIcon
  },
  mongodb: {
    Icon: MongodbIcon
  },
  mysql: {
    Icon: MysqlIcon
  },
  git: {
    Icon: GitIcon
  },
  tailwindcss: {
    Icon: TailwindcssIcon
  },
  bootstrap: {
    Icon: BootstrapIcon
  },
  ellipsis: {
    Icon: EllipsisIcon
  }
} satisfies Record<string, Pick<Skill, 'Icon'>>;
