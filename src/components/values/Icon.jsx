import { cn } from '@/utils';

const ValuesIcon = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex size-12 items-center justify-center rounded-sm bg-muted [&>svg]:size-1/2',
      )}
      {...props}
    />
  );
};

export default ValuesIcon;
