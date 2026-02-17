import { Metadata } from 'next';

import { ProjectHeroProps } from '@/components/organisms/Heros/Project';
import { TBlocks } from '@/utils/getBlock';

import TypeVariants from './TypeVariants';

type ProjectPage = {
  type: 'project';
  hero?: ProjectHeroProps;
  blocks?: Record<string, TypeVariants<TBlocks>>;
  metadata?: Metadata;
};

export default ProjectPage;
