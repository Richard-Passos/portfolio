import { cn } from '@/utils';

const ShowProjectsTypes = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex w-fit flex-wrap items-center justify-center gap-4 sm:max-w-md',
        className,
      )}
      {...props}
    />
  );
};

export default ShowProjectsTypes;
