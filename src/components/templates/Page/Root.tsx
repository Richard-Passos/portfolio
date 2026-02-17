import { RenderBlock, RenderHero } from '@/components/organisms/Render';
import { DefaultPage } from '@/types';
import { cn, entries } from '@/utils';

type PageTemplateProps = {
  hero: DefaultPage['hero'];
  blocks: DefaultPage['blocks'];
};

const PageTemplate = ({ hero, blocks }: PageTemplateProps) => {
  const blocksEntries = entries(blocks);

  return (
    <>
      {hero && <RenderHero {...hero} />}

      {blocksEntries.map(([key, { theme, className, ...block }], i) => {
        const prevTheme =
            i === 0 ? hero?.theme : blocksEntries[i - 1]?.[1].theme,
          isSameTheme = prevTheme === theme;

        let radius;
        if (!isSameTheme)
          radius =
            theme === 'dark' ? 'rounded-t-4xl' : '[*:has(+&)]:rounded-b-4xl';

        return (
          <RenderBlock
            key={key}
            theme={theme}
            className={cn(
              'overflow-y-clip last:rounded-b-4xl',
              radius,
              className
            )}
            {...block}
          />
        );
      })}
    </>
  );
};

export default PageTemplate;
export type { PageTemplateProps };
