import { cn } from '@/utils';

const ValuesItem = ({ className, ...props }) => {
  return (
    <li
      className={cn(
        'flex h-full flex-col items-start rounded-lg border bg-main p-sm transition-[background-color,border-color] lg:[&:nth-child(3)]:col-start-2',
        className,
      )}
      {...props}
    />
  );
};

export default ValuesItem;
