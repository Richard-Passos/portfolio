import { cn } from '@/utils';

const ProjectsViewShowRoles = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'isolate grid h-10 w-fit grid-cols-3 gap-1 rounded-md border bg-main p-1 text-muted-content',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsViewShowRoles;
