'use client';

import { motion } from 'motion/react';
import { ComponentProps } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type HeaderNavLinkIndicatorProps = MergeProps<
  {
    shouldHide?: boolean;
  },
  ComponentProps<typeof motion.span>
>;

const HeaderNavLinkIndicator = ({
  shouldHide,
  className,
  style,
  transition,
  ...props
}: HeaderNavLinkIndicatorProps) => {
  return (
    <motion.span
      className={cn(
        'absolute bg-black dark:bg-white',
        shouldHide &&
          `opacity-0! transition-opacity delay-150 group-hover/link:opacity-100! group-hover/nav:delay-0`,
        className
      )}
      layout
      layoutId='headerLinkActiveIndicator'
      style={{
        borderRadius: '9999px',
        ...style
      }}
      transition={{
        type: 'spring',
        ...smoothConfig,
        ...transition
      }}
      {...props}
    />
  );
};

export { HeaderNavLinkIndicator };
export type { HeaderNavLinkIndicatorProps };
