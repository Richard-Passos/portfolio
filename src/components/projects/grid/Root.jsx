import { cn } from '@/utils';

const ProjectsGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid w-full [--gap:clamp(theme(spacing.10),20.20vw,theme(spacing.20))] max-sm:gap-y-md',
        className,
      )}
      {...props}
    />
  );
};

export default ProjectsGrid;
