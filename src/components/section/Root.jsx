import { forwardRef } from 'react';

import { cn } from '@/utils';

import ChangeTheme from '../change-theme';

const Section = (
  { as = 'section', theme, className, children, ...props },
  ref,
) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        'relative pb-[--spacing-y] pt-[calc(var(--spacing-y)*1.5)] [--spacing-y:min(28vh,theme(spacing.28))] max-2xl:min-h-screen',
        theme,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}

      <ChangeTheme theme={theme} />
    </Tag>
  );
};

export default forwardRef(Section);
