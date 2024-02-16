import { cn } from '@/utils';

const ValuesItem = ({ className, ...props }) => {
  return (
    <li
      className={cn(
        'flex h-full flex-col items-start gap-2 rounded-lg border bg-main p-[min(var(--p),theme(spacing.8))] transition-[background-color,border-color] [--p:8vw] md:[--p:2.5vw] md:[&:nth-child(4)]:col-start-2 lg:[&:nth-child(4)]:col-start-3',
        className,
      )}
      {...props}
    />
  );
};

export default ValuesItem;
