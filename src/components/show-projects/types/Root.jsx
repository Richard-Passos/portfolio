import { cn } from '@/utils';

const ProjectsViewShowTypes = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex flex-wrap w-fit sm:max-w-md items-center justify-center gap-3',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsViewShowTypes;
