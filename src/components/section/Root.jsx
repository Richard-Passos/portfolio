import { forwardRef } from 'react';

import { cn } from '@/utils';

import ChangeTheme from '../change-theme';

const Section = (
  { as, theme, className, children, ...props },
  ref,
) => {
  const Tag = as || 'section';

  return (
    <Tag
      className={cn(
        'relative w-full pb-lg pt-[calc(theme(spacing.lg)*1.5)] max-2xl:min-h-screen',
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
