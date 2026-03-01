import {
  AboutBlock,
  ImagesBlock,
  ValuesBlock
} from '@/components/layout/Blocks';
import { SecondaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'dark',
    Comp: SecondaryHero
  },
  images: {
    theme: 'dark',
    Comp: ImagesBlock
  },
  about: {
    theme: 'dark',
    Comp: AboutBlock
  },
  values: {
    theme: 'dark',
    Comp: ValuesBlock
  }
} as const);

export { schema };
