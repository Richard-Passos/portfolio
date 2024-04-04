import { forwardRef } from 'react';

import { cn } from '@/utils';

import ChangeTheme from '../change-theme';

const Section = (props, ref) => {
  const { as, hasTransition = true, theme, className, children, forceHeaderTheme, ...rest } = props
  const Tag = as || 'section';

  return (
    <Tag
      className={cn(
        'relative w-full py-lg max-2xl:min-h-screen',
        hasTransition && 'pt-[calc(theme(spacing.lg)*1.5)]',
        theme,
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}

      <ChangeTheme hasTransition={hasTransition} forceHeaderTheme={forceHeaderTheme} theme={theme} />
    </Tag>
  );
};

export default forwardRef(Section);
