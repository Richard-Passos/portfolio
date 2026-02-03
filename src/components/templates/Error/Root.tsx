import { ComponentType } from 'react';

import { Blocks } from '@/components/organisms';
import { SecondaryHero } from '@/components/organisms/Heros';
import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';
import { Theme, TypeVariants } from '@/types';
import { cn } from '@/utils';

type ErrorTemplateProps = {
  hero: SecondaryHeroProps;
  blocks?: TypeVariants<typeof Blocks>[];
};

const ErrorTemplate = ({ hero, blocks }: ErrorTemplateProps) => {
  let lastTheme: Theme;

  return (
    <>
      <SecondaryHero {...hero} />

      {blocks?.map(({ type, id, theme, className, ...props }) => {
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
export default ErrorTemplate;
export type { ErrorTemplateProps };
