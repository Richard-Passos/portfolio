import { cn } from '@/utils';

const ProjectsGridItem = ({ className, index, ...props }) => {
  return (
    <li
      className={cn(
        'grid grid-cols-4 gap-6 sm:even:mt-xl sm:[&:not(:last-child)]:even:-mb-xl',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGridItem;
