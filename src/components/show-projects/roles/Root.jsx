import { cn } from '@/utils';

const ShowProjectsRoles = ({ className, ...props }) => {
  return (
    <nav
      className={cn(
        'flex w-full flex-wrap gap-1 rounded-md border bg-main p-1 text-muted-content sm:max-w-md',
        className,
      )}
      {...props}
    />
  );
};

export default ShowProjectsRoles;
