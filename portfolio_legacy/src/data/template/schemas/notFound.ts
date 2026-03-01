import { SecondaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const notFoundTemplateSchema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: SecondaryHero
  }
});

export { notFoundTemplateSchema };
