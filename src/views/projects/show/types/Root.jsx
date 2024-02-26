import { cn } from '@/utils';

const ProjectsViewShowTypes = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex flex-wrap items-center justify-center gap-3',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsViewShowTypes;
