import { Metadata } from 'next';

import Blocks from '@/components/Blocks';
import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';

import TypeVariants from './TypeVariants';

type ErrorPage = {
  type?: 'error';
  slug: string;
  isSelected?: never;
  label?: never;
  hero: SecondaryHeroProps;
  blocks?: TypeVariants<typeof Blocks>[];
  metadata: Metadata;
};

export default ErrorPage;
