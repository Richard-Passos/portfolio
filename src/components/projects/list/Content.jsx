import { cn } from '@/utils';

const ProjectsListContent = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'sm:5 grid w-full place-items-start gap-x-12 gap-y-3 sm:grid-cols-3 sm:place-items-center',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsListContent;
