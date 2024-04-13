import { cn } from '@/utils';

const ShowProjectsRoles = ({ className, ...props }) => {
  return (
    <nav
      className={cn(
        'flex gap-1 w-full rounded-md sm:max-w-md border bg-main p-1 text-muted-content flex-wrap',
        className,
      )}
      {...props}
    />
  );
};

export default ShowProjectsRoles;
