'use client';

import { motion } from 'framer-motion';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn, } from '@/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { Link } from '../../ui';
import { useQueryString } from '@/hooks';

const ProjectsViewShowRolesTrigger = ({
  className,
  role,
  children,
  ...props
}) => {
  const pathame = usePathname(),
   searchParams = useSearchParams(),
   query = useQueryString([['role', role], ['page', 2]])

   const activeRole = searchParams.get('role'),
   isActive = activeRole === role;

  return (
    <Link
    className={cn(
      'relative no-underline grow basis-24 z-10 border-none break-all h-8 rounded-sm text-xs uppercase transition-color hover:text-content data-active:text-primary-content focus-visible:outline-content',
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
          layoutId='projectsViewShowRolesTriggerActiveIndicator'
          transition={{
            type: 'spring',
            ...smoothConfig,
          }}
        />
      )}
    </Link>
  );
};

export default ProjectsViewShowRolesTrigger;
