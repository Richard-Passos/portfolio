import { cn } from '@/utils';

const ValuesItem = ({ className, ...props }) => {
  return (
    <li
      className={cn(
        'flex flex-col rounded-md border bg-main p-sm lg:[&:nth-child(3)]:col-start-2',
        className,
      )}
      {...props}
    />
  );
};

export default ValuesItem;
