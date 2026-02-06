import { Metadata } from 'next';

import { SecondaryHeroProps } from '@/components/templates/Heros/Secondary';
import Blocks from '@/components/tem@/components/templates/Heros/Secondary

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
