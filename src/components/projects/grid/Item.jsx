import { cn } from '@/utils';

const ProjectsGridItem = ({ className, index, style, ...props }) => {
  return (
    <li
      className={cn(
        'grid grid-cols-4 gap-6 sm:row-span-2 sm:even:col-start-2 sm:even:row-start-[calc(var(--idx)+1)]',
        className,
      )}
      style={{
        '--idx': index,
        ...style,
      }}
      {...props}
    />
  );
};

export default ProjectsGridItem;
