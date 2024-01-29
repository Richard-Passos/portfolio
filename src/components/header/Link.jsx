'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import { NavigationMenuLink } from '../ui/navigation-menu';

const HeaderLink = ({ isActive, className, children, ...props }) => {
  return (
    <MagneticLink
      asChild
      className={cn(
        'relative h-10 rounded-sm px-4 no-underline hover:z-10',
        isActive && '-z-10',
        className,
      )}
      {...props}
    >
      <NavigationMenuLink>
        {children}

        {isActive && (
          <motion.span
            className={cn(
              'absolute bottom-1.5 h-0.5 w-[calc(50%-theme(spacing.4))] bg-current transition-bg',
            )}
            layoutId='headerLinkActiveIndicator'
            style={{ borderRadius: '9999px' }}
            transition={{
              type: 'spring',
              ...smoothConfig,
            }}
          />
        )}
      </NavigationMenuLink>
    </MagneticLink>
  );
};

export default HeaderLink;
