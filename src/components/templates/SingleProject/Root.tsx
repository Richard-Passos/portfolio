import { ComponentType } from 'react';

import { Theme, TypeVariants } from '@/types';
import { cn } from '@/utils';

import Blocks from './Blocks';
import SingleProjectHero, { SingleProjectHeroProps } from './Hero';

type SingleProjectTemplateProps = {
  hero: SingleProjectHeroProps;
  blocks?: TypeVariants<typeof Blocks>[];
};

const SingleProjectTemplate = ({
  hero,
  blocks
}: SingleProjectTemplateProps) => {
  let lastTheme: Theme = hero.theme;

  return (
    <>
      <SingleProjectHero {...hero} />

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
export default SingleProjectTemplate;
export type { SingleProjectTemplateProps };
