import { cn } from '@/utils';

const ProjectsTableContent = ({ className, ...props }) => {
  return (
    <div
       className={cn(
        'flex w-full gap-x-sm gap-y-4 flex-wrap items-start sm:items-center',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsTableContent;
