'use client';

import { useContext } from 'react';

import { MagneticButton } from '@/components/button';
import { Icon } from '@/components/ui';
import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const TYPES = [
  { data: 'list', icon: 'Rows' },
  { data: 'grid', icon: 'Dashboard' },
];

const ProjectsShowTypes = ({ className, ...props }) => {
  const { type, setType } = useContext(ProjectsShowContext);

  return (
    <ul
      className={cn(
        'flex shrink-0 flex-wrap items-center justify-center gap-3',
        className,
      )}
      {...props}
    >
      {TYPES.map(({ data, icon }) => (
        <MagneticButton
          aria-label={`Toggle to ${data}`}
          className={cn(
            'hover:z-10',
            type !== data && 'focus-visible:outline-variant-content',
          )}
          key={data}
          limit={0.35}
          onClick={() => setType(data)}
          variants={{ color: type === data ? 'primary' : 'main', size: 'sm' }}
        >
          <Icon
            aria-hidden
            className='h-[35%] w-[35%]'
            name={icon}
          />
        </MagneticButton>
      ))}
    </ul>
  );
};

export default ProjectsShowTypes;
