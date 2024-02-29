import { cn } from '@/utils';

import { CursorLink } from '../../link';

const ProjectsGridItem = ({ className, content, children, ...props }) => {
  return (
    <CursorLink
      className={cn(
        'group aspect-square w-full rounded-3xl no-underline md:even:mt-xl md:[&:not(:last-child)]:even:-mb-xl',
        className,
      )}
      content={{
        name: 'Eye',
        className: 'size-1/2',
        ...content,
      }}
      {...props}
    >
      <div className='relative grid size-full grid-cols-4 items-end overflow-hidden rounded-inherit p-sm transition-transform duration-300 group-hover:scale-95'>
        {children}

        <span className='absolute inset-0 rounded-inherit bg-main/60 opacity-0 backdrop-blur-sm transition-[transform,opacity] duration-300 group-hover:opacity-100' />
      </div>
    </CursorLink>
  );
};

export default ProjectsGridItem;
