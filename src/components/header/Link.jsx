'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import Magnetic from '../magnetic';
import { NavigationMenuLink } from '../ui/navigation-menu';

const HeaderLink = ({ isActive, className, children, ...props }) => {
  return (
    <MagneticLink
      asChild
      className={cn('relative h-10 rounded-sm', isActive && '-z-10', className)}
      {...props}
    >
      <NavigationMenuLink>
        <Magnetic limit={0.15}>
          <span className='flex h-full items-center rounded-inherit px-4'>
            {children}
          </span>
        </Magnetic>

        {isActive && (
          <motion.span
            className={cn(
              'absolute inset-0 -z-10 w-auto rounded-inherit bg-muted',
            )}
            layoutId='HeaderLinkActiveIndicator'
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
