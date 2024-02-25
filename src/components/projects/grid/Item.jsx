import { cn } from '@/utils';

import { CursorLink } from '../../link';

const ProjectsGridItem = ({ className, content, children, ...props }) => {
  return (
    <CursorLink
      className={cn(
        'group relative grid aspect-square w-full grid-cols-4 items-end justify-normal overflow-hidden rounded-3xl p-sm no-underline md:even:mt-xl md:[&:not(:last-child)]:even:-mb-xl',
        className,
      )}
      content={{
        name: 'Eye',
        className: 'w-[45%] h-[45%]',
        ...content,
      }}
      {...props}
    >
      {children}

      <span className='absolute inset-0 rounded-inherit bg-main/95 opacity-0 backdrop-blur-sm transition-[transform,opacity] group-hover:opacity-100' />
    </CursorLink>
  );
};

export default ProjectsGridItem;
