import { TemplateConfig, entries } from '@/utils';

type PageTemplateProps = {
  hero?: TemplateConfig;
  blocks?: Record<string, TemplateConfig>;
};

const PageTemplate = ({ hero, blocks }: PageTemplateProps) => {
  const blocksEntries = entries(blocks);

  return (
    <>
      {hero && (
        <hero.Comp
          theme={hero.theme}
          data={hero.data}
        />
      )}

      {blocksEntries.map(([key, { Comp, theme, data }], i) => {
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
          <Comp
            key={key}
            theme={theme}
            className={radius}
            data={data}
          />
        );
      })}
    </>
  );
};

export { PageTemplate };
export type { PageTemplateProps };
