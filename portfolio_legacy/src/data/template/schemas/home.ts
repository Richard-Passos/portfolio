import {
  BentoGridBlock,
  ButBlock,
  CareerCatalogBlock,
  CtaTextBlock,
  ListMissionBlock,
  ListPageBlock,
  ProjectsCatalogBlock
} from '@/components/layout/Blocks';
import { PrimaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: PrimaryHero
  },
  mission: {
    theme: 'dark',
    Comp: ListMissionBlock
  },
  career: {
    theme: 'dark',
    Comp: CareerCatalogBlock
  },
  projects: {
    theme: 'dark',
    Comp: ProjectsCatalogBlock
  },
  but: {
    theme: 'light',
    Comp: ButBlock
  },
  about: {
    theme: 'dark',
    Comp: BentoGridBlock
  },
  listAboutPage: {
    theme: 'dark',
    Comp: ListPageBlock
  },
  cta: {
    theme: 'dark',
    Comp: CtaTextBlock
  }
} as const);

export { schema };
