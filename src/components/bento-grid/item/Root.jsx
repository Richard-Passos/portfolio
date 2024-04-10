import { cn } from '@/utils';

const BentoGridItem = ({ className, idx, style, ...props }) => {
  return (
    <li
      className={cn(
        'relative flex gap-xs overflow-hidden rounded-md border bg-main p-sm',
        className,
      )}
      style={{
        gridArea: `item-${idx}`,
        ...style,
      }}
      {...props}
    />
  );
};

export default BentoGridItem;
