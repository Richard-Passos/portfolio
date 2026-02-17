import { Metadata } from 'next';

import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';
import { TBlocks } from '@/utils/getBlock';

import TypeVariants from './TypeVariants';

type ErrorPage = {
  type: 'error';
  hero?: SecondaryHeroProps;
  blocks?: Record<string, TypeVariants<TBlocks>>;
  metadata?: Metadata;
};

export default ErrorPage;
