import { ComponentType } from 'react';

import Blocks from '@/components/organisms/Blocks';
import Heros from '@/components/organisms/Heros';
import { Theme, TypeVariants } from '@/types';
import { cn } from '@/utils';

type PageTemplateProps = {
  hero: TypeVariants<typeof Heros>;
  blocks?: TypeVariants<typeof Blocks>[];
};

const PageTemplate = ({ hero, blocks }: PageTemplateProps) => {
  let lastTheme: Theme = hero.theme;

  const Hero = Heros[hero.type] as ComponentType<any>;

  return (
    <>
      <Hero {...hero} />

      {blocks?.map(({ type, id, className, theme, ...props }) => {
        const Block = Blocks[type] as ComponentType<any>;

        const isSameTheme = lastTheme === theme;

        const Component = (
          <Block
            className={cn(
              `last:pb-(--section-spacing-lg) has-[+[data-has-transition="true"]]:pb-(--section-spacing-lg)`,
              className
            )}
            hasTransition={!isSameTheme}
            id={id}
            key={id}
            theme={theme}
            {...props}
          />
        );

        lastTheme = theme;

        return Component;
      })}
    </>
  );
};
export default PageTemplate;
export type { PageTemplateProps };
