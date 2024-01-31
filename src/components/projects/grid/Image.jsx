'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { Image } from '../../ui';

const ProjectsGridImage = ({ index, className, ...props }) => {
  const { images } = useContext(ProjectsContext);

  const img = images[index];

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-inherit border border-transparent transition-transform duration-300 group-hover:scale-[.98]',
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        className='h-full w-full object-cover'
        {...img}
      />

      <span className='absolute inset-0 -z-10 rounded-inherit bg-muted transition-bg' />
    </div>
  );
};

export default ProjectsGridImage;
