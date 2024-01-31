import { cn } from '@/utils';

import { CursorLink } from '../../link';

const ProjectsGridLink = ({ className, content, children, ...props }) => {
  return (
    <CursorLink
      className={cn(
        'group relative col-span-full aspect-square w-full rounded-lg',
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

      <span className='absolute inset-0 bg-main/75 opacity-0 backdrop-blur-sm transition-[background-color,opacity] group-hover:opacity-100' />
    </CursorLink>
  );
};

export default ProjectsGridLink;
