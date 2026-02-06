import { Metadata } from 'next';

import Blocks from '@/components/Blocks';
import Heros from '@/components/organisms/Heros';

import TypeVariants from './TypeVariants';

type Page = {
  type?: 'page';
  slug: string;
  isSelected?: boolean;
  label: string;
  hero: TypeVariants<typeof Heros>;
  blocks?: TypeVariants<typeof Blocks>[];
  metadata: Metadata;
};

export default Page;
