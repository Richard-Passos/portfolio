import { PrimaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const termsNConditionsTemplateSchema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: PrimaryHero
  }
});

export { termsNConditionsTemplateSchema };
