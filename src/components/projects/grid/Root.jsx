import { cn } from '@/utils';

const ProjectsGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid w-full [--gap:clamp(theme(spacing.10),40.40vw,theme(spacing.40))] max-sm:gap-y-20',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGrid;
