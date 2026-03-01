import { RevalidateFormBlock } from '@/components/layout/Blocks';
import { SecondaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: SecondaryHero
  },
  form: {
    theme: 'dark',
    Comp: RevalidateFormBlock
  }
});

export { schema };
