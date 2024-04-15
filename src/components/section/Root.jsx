import { forwardRef } from 'react';

import { cn } from '@/utils';

import ChangeTheme from '../change-theme';

const Section = (props, ref) => {
  const {
    as,
    hasTransition = true,
    theme,
    className,
    children,
    forceHeaderTheme,
    ...rest
  } = props;
  const Tag = as || 'section';

  return (
    <Tag
      className={cn(
        'relative min-h-screen w-full py-[--py] [--py:theme(spacing.lg)] 2xl:min-h-bounds',
        hasTransition && 'pt-[calc(var(--py)*1.5)]',
        `theme-${theme}`,
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}

      <ChangeTheme
        hasTransition={hasTransition}
        forceHeaderTheme={forceHeaderTheme}
        theme={theme}
      />
    </Tag>
  );
};

export default forwardRef(Section);
