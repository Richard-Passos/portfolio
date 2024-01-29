'use client';

import { useContext } from 'react';

import { MagneticButton } from '@/components/button';
import { Icon } from '@/components/ui';
import { ProjectsShowContext } from '@/contexts';
import { cn } from '@/utils';

const TYPES = [
  { data: 'list', icon: 'List' },
  { data: 'grid', icon: 'Grid' },
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
            'hover:z-10 [&_svg]:h-[40%] [&_svg]:w-[40%]',
            type !== data && 'focus-visible:outline-variant-content',
          )}
          key={data}
          limit={0.35}
          onClick={() => setType(data)}
          variants={{ color: type === data ? 'primary' : 'main', size: 'sm' }}
        >
          <Icon
            aria-hidden
            name={icon}
          />
        </MagneticButton>
      ))}
    </ul>
  );
};

export default ProjectsShowTypes;
