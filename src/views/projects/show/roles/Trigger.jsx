'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';

import { ProjectsShowContext } from '@/contexts';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn, isFunctionThanCall } from '@/utils';

const ProjectsViewShowRolesTrigger = ({
  className,
  role,
  children,
  ...props
}) => {
  const { role: activeRole, setRole } = useContext(ProjectsShowContext);

  const isActive = activeRole === role;

  return (
    <button
      className={cn(
        'relative flex size-full items-center justify-center rounded-sm px-4 text-xs font-medium uppercase transition-colors hover:text-content data-[state=active]:text-primary-content data-[state=active]:focus-visible:outline-primary',
        className,
      )}
      data-state={isActive ? 'active' : 'inactive'}
      key={role}
      {...props}
      onClick={(ev) => {
        setRole(role);

        isFunctionThanCall(props.click, ev);
      }}
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
    </button>
  );
};

export default ProjectsViewShowRolesTrigger;
