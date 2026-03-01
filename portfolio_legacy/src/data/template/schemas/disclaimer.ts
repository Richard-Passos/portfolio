import { PrimaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: PrimaryHero
  }
});

export { schema };
