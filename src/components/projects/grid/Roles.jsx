import { Fragment } from 'react';

import { cn } from '@/utils';

const ProjectsGridRoles = ({ className, data, ...props }) => {
  return (
    <ul
      className={cn(
        'relative z-10 col-span-3 flex translate-y-full flex-wrap gap-1.5 text-sm font-normal lowercase transition-[transform,clip-path] duration-300 [clip-path:inset(0_0_100%_0)] group-hover:translate-y-0 group-hover:[clip-path:inset(0)]',
        className,
      )}
      {...props}
    >
      {data
        .sort((a, b) => a.localeCompare(b))
        .map((role, i, arr) => (
          <Fragment key={i}>
            <li className='line-clamp-1 break-all'>{role}</li>

            {i < arr.length - 1 && <li aria-hidden>&</li>}
          </Fragment>
        ))}
    </ul>
  );
};

export default ProjectsGridRoles;
