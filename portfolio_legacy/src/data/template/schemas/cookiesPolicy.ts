import { PrimaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const cookiesPolicyTemplateSchema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: PrimaryHero
  }
});

export { cookiesPolicyTemplateSchema };
