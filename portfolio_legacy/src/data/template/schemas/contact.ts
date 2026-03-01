import { ContactFormBlock, SkillsBlock } from '@/components/layout/Blocks';
import { SecondaryHero } from '@/components/layout/Heros';
import { createTemplateSchema } from '@/utils';

const schema = createTemplateSchema({
  hero: {
    theme: 'light',
    Comp: SecondaryHero
  },
  form: {
    theme: 'dark',
    Comp: ContactFormBlock
  },
  skills: {
    theme: 'dark',
    Comp: SkillsBlock
  }
} as const);

export { schema };
