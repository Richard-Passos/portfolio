import { cn } from '@/utils';

const ProjectsViewShowRoles = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'isolate grid h-11 w-full max-w-sm grid-cols-3 gap-1 rounded-full border bg-main p-1 text-muted-content',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsViewShowRoles;
