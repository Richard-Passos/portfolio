import { Metadata } from 'next';

import Heros from '@/components/Heros';
import Blocks from @/components/templates/Heroslates/Blocks';

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
