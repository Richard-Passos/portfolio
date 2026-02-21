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
          nextTheme =
            i === blocksEntries.length - 1
              ? undefined
              : blocksEntries[i + 1]?.[1].theme,
          isLastThemeSame = prevTheme === theme,
          isNextThemeSame = nextTheme === theme;

        let radius;
        if (theme === 'dark') {
          radius = 'overflow-y-clip';
          if (!isLastThemeSame) radius += ' rounded-t-4xl';
          if (!isNextThemeSame) radius += ' rounded-b-4xl';
        }

        return (
          <RenderBlock
            key={key}
            theme={theme}
            className={cn(radius, className)}
            {...block}
          />
        );
      })}
    </>
  );
};

export default PageTemplate;
export type { PageTemplateProps };
