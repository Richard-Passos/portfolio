import { Fragment } from 'react';

import { cn } from '@/utils';

const ProjectsGridRoles = ({ className, data, ...props }) => {
  return (
    <ul
      className={cn(
        'col-span-3 ml-3.5 flex flex-wrap gap-1.5 text-sm font-medium lowercase',
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
