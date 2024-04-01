'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import { NavigationMenuLink } from '../ui/navigation-menu';

const MenuLink = ({
  className,
  children,
  isActive,
  includesPathname,
  ...props
}) => {
  return (
    <MagneticLink
      asChild
      className={cn(
        'group/link relative inline-flex w-fit items-center justify-start rounded-sm px-8 py-4 text-6xl font-bold uppercase tracking-tight no-underline hover:z-10',
        className,
      )}
      limit={0.15}
      {...props}
    >
      <NavigationMenuLink>
        {children}

        {isActive && (
          <motion.span
            className={cn(
              'absolute left-1 h-1/3 w-[.15em] bg-current',
              !includesPathname &&
                'opacity-0 transition-opacity group-hover/link:opacity-100 group-hover:opacity-100',
            )}
            layoutId='menuLinkActiveIndicator'
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

export default MenuLink;
