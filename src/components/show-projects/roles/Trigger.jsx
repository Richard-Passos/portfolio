'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

import { useQueryString } from '@/hooks';
import { smoothConfig } from '@/hooks/useSmooth';
import { usePathname, useRouter } from '@/navigation';
import { cn, normId } from '@/utils';

const ShowProjectsRolesTrigger = ({
  className,
  role = '',
  children,
  ...props
}) => {
  const router = useRouter(),
    pathame = usePathname(),
    searchParams = useSearchParams(),
    query = useQueryString({ role });

  const activeRole = normId(searchParams.get('role')) || 'all',
    isActive = activeRole === normId(role);

  return (
    <button
      className={cn(
        'relative z-10 h-8 grow basis-24 break-all rounded-sm text-xs font-semibold uppercase transition-color hover:text-content focus-visible:outline-content data-active:text-primary-content',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={() => router.replace(pathame + query)}
      {...props}
    >
      {children}

      {isActive && (
        <motion.span
          className='absolute inset-0 -z-10 bg-primary'
          style={{
            borderRadius: 'var(--radius-sm)',
          }}
          layoutId='showProjectsRolesTriggerActiveIndicator'
          transition={{
            type: 'spring',
            ...smoothConfig,
          }}
        />
      )}
    </button>
  );
};

export default ShowProjectsRolesTrigger;
