'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import { NavigationMenuLink } from '../ui/navigation-menu';

const HeaderLink = ({ className, children,isActive,includesPathname, ...props }) => {
  return (
    <MagneticLink
      asChild
      className={cn(
        'group/link relative h-10 rounded-sm px-4 no-underline lowercase flex transition-none hover:z-10',
                className,
      )}
      {...props}
    >
      <NavigationMenuLink>
       <span className='first-letter:capitalize lowercase'>{children}</span>

        {isActive && (
          <motion.span
          className={cn('absolute bottom-1 w-1/3 h-[.15em] bg-primary', !includesPathname && 'opacity-0 group-hover:opacity-100 group-hover/link:opacity-100 transition-opacity')}
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
