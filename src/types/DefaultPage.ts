import { Metadata } from 'next';

import { TBlocks } from '@/utils/getBlock';
import { THeros } from '@/utils/getHero';

import TypeVariants from './TypeVariants';

type DefaultPage = {
  type?: 'default';
  isSelected: boolean;
  label: string;
  hero?: TypeVariants<THeros>;
  blocks?: Record<string, TypeVariants<TBlocks>>;
  metadata?: Metadata;
};

export default DefaultPage;
