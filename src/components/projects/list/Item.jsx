'use client';

import { useContext } from 'react';

import { ProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../../link';

const ProjectsListItem = ({ className, index, ...props }) => {
  const { setActiveIdx } = useContext(ProjectsContext);

  return (
    <CursorLink
      className={cn(
        'relative top-px -mt-px flex w-full items-start gap-4 overflow-hidden border-y px-[7.5%] py-12 no-underline transition-[transform,opacity] duration-200 [--opacity:.25] last:border-b hover:z-10 dark:[--opacity:.05] group-hover:[&:not(:hover)]:scale-x-95 group-hover:[&:not(:hover)]:opacity-[--opacity]',
        className,
      )}
      content={{
        name: 'Eye',
        className: 'size-1/2',
      }}
      {...props}
      onMouseEnter={(ev) => {
        setActiveIdx(index);

        isFunctionThanCall(props.onMouseEnter, ev);
      }}
    />
  );
};

export default ProjectsListItem;
