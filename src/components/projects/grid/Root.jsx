import { cn } from '@/utils';

const ProjectsGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid w-full gap-md sm:grid-cols-2', className)}
      {...props}
    />
  );
};

export default ProjectsGrid;
