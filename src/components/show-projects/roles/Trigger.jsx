'use client';

import { motion } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

import { useQueryString } from '@/hooks';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { Link } from '../../ui';

const ShowProjectsRolesTrigger = ({ className, role, children, ...props }) => {
  const pathame = usePathname(),
    searchParams = useSearchParams(),
    query = useQueryString([['role', role]]);

  const activeRole = searchParams.get('role'),
    isActive = activeRole === role;

  return (
    <Link
      className={cn(
        'relative z-10 h-8 grow basis-24 break-all rounded-sm border-none text-xs uppercase no-underline hover:text-content focus-visible:outline-content data-active:text-primary-content',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      href={pathame + query}
      {...props}
    >
      {children}

      {isActive && (
        <motion.span
          className='absolute inset-0 -z-10 rounded-inherit bg-primary'
          layoutId='showProjectsRolesTriggerActiveIndicator'
          transition={{
            type: 'spring',
            ...smoothConfig,
          }}
        />
      )}
    </Link>
  );
};

export default ShowProjectsRolesTrigger;
