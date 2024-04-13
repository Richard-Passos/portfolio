import { cn } from '@/utils';

const ProjectsTableContent = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex w-full flex-wrap items-start gap-x-sm gap-y-4 sm:items-center',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTableContent;
