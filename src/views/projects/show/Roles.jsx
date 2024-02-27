'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';

import { Select } from '@/components/ui';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@/components/ui/icon/icons';
import { ProjectsShowContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const ROLES = ['all', 'design', 'development'];

const ProjectsViewShowRoles = ({ className, ...props }) => {
  const { role, setRole } = useContext(ProjectsShowContext);

  return (
    <section className='rounded-full bg-muted p-1'>
      {ROLES.map(() => (
        <button
          className='flex h-10 items-center justify-center px-4 text-xs uppercase text-muted-content transition-colors data-[state=active]:text-content'
          key={role}
          onClick={() => setRole(role)}
        >
          {role}

          {isActive && (
            <motion.span
              className={cn(
                'absolute bottom-1.5 h-0.5 w-[calc(50%-theme(spacing.4))] bg-current',
              )}
              layoutId='headerLinkActiveIndicator'
              style={{ borderRadius: '9999px' }}
              transition={{
                type: 'spring',
                ...smoothConfig,
              }}
            />
          )}
        </button>
      ))}
    </section>
  );
};

export default ProjectsViewShowRoles;
