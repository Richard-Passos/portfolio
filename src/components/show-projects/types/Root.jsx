import { cn } from '@/utils';

const ShowProjectsTypes = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'flex flex-wrap w-fit sm:max-w-md items-center justify-center gap-4',
        className,
      )}
      {...props}
    />
  );
};

export default ShowProjectsTypes;
