'use client';

import { motion } from 'motion/react';
import { ComponentProps } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

type HeaderNavLinkIndicatorOrganismOwnProps = {
  shouldHide?: boolean;
};

type HeaderNavLinkIndicatorOrganismProps =
  HeaderNavLinkIndicatorOrganismOwnProps &
    Omit<
      ComponentProps<typeof motion.span>,
      keyof HeaderNavLinkIndicatorOrganismOwnProps
    >;

const HeaderNavLinkIndicatorOrganism = ({
  shouldHide,
  className,
  style,
  transition,
  ...props
}: HeaderNavLinkIndicatorOrganismProps) => {
  return (
    <motion.span
      className={cn(
        'bg-primary-filled absolute',
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

export default HeaderNavLinkIndicatorOrganism;
export type { HeaderNavLinkIndicatorOrganismProps };
