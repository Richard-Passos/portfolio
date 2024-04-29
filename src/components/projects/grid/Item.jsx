import { cn } from '@/utils';

import { CursorLink } from '../../link';

const ProjectsGridItem = ({ className, content, children, ...props }) => {
  return (
    <CursorLink
      className={cn(
        'group relative grid aspect-square w-full grid-cols-4 items-end overflow-hidden rounded-3xl p-sm no-underline transition-transform duration-300 group-hover:scale-95 md:even:mt-xl md:[&:not(:last-child)]:even:-mb-xl',
        className,
      )}
      content={{
        src: '/images/eye.svg',
        className: 'size-[40%]',
        ...content,
      }}
      {...props}
    >
      {children}

      <span className='absolute inset-0 rounded-inherit bg-main/60 opacity-0 transition-[transform,opacity] duration-300 group-hover:opacity-100' />
    </CursorLink>
  );
};

export default ProjectsGridItem;
