'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticLink } from '../link';

const HeaderLink = ({
  className,
  children,
  isActive,
  shouldHide,
  ...props
}) => {
  return (
    <MagneticLink
      className={cn(
        'group/link relative flex h-10 rounded-sm px-4 no-underline transition-none hover:z-10',
        className,
      )}
      {...props}
    >
        <span className='lowercase first-letter:capitalize'>{children}</span>

        {isActive && (
          <motion.span
            className={cn(
              'absolute bottom-1 h-[.15em] w-1/3 bg-primary',
                shouldHide &&
                '!opacity-0 transition-opacity group-hover/link:!opacity-100 delay-150 group-hover:delay-0',
            )}
            layoutId='headerLinkActiveIndicator'
            style={{ borderRadius: '9999px' }}
            transition={{
              type: 'spring',
              ...smoothConfig,
            }}
          />
        )}
    </MagneticLink>
  );
};

export default HeaderLink;
