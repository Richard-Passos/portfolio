import { cn } from '@/utils';

const ListProjects = ({ className, ...props }) => {
  return (
    <ul
      className={cn('w-full max-w-screen-lg', className)}
      {...props}
    />
  );
};

export default ListProjects;