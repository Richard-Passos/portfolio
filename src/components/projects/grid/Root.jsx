import { cn } from '@/utils';

const ProjectsGrid = ({ className, ...props }) => {
  return (
    <nav
      className={cn('grid w-full gap-sm sm:grid-cols-2', className)}
      {...props}
    />
  );
};

export default ProjectsGrid;
