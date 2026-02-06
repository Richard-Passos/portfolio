import { ComponentType } from 'react';

import Blocks from '@/components/Blocks';
import Heros from '@/components/Heros';
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
        let radius = '';
        if (!isSameTheme)
          radius =
            theme === 'dark' ? 'rounded-t-4xl' : '[*:has(+&)]:rounded-b-4xl';

        const Component = (
          <Block
            className={cn(
              `overflow-y-clip last:rounded-b-4xl`,
              radius,
              className
            )}
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
