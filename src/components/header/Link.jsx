'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import { NavigationMenuLink } from '../ui/navigation-menu';

const HeaderLink = ({
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
        'group/link relative flex h-10 rounded-sm px-4 lowercase no-underline transition-none hover:z-10',
        className,
      )}
      {...props}
    >
      <NavigationMenuLink>
        <span className='lowercase first-letter:capitalize'>{children}</span>

        {isActive && (
          <motion.span
            className={cn(
              'absolute bottom-1 h-[.15em] w-1/3 bg-primary',
              !includesPathname &&
                'opacity-0 transition-opacity group-hover/link:opacity-100 group-hover:opacity-100',
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
