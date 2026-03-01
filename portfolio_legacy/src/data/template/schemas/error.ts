import { SecondaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: SecondaryHero
  }
});

export { schema };
