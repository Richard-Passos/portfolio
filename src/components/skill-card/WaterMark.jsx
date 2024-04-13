import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const SkillCardWaterMark = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'absolute right-0 top-0 -z-10 size-2/3 -translate-y-1/2 translate-x-1/2 transition-[transform,opacity] duration-300 opacity-0 group-data-open:opacity-40 text-muted group-data-open:-translate-y-1/4 group-data-open:translate-x-1/4 dark:group-data-open:opacity-10',
        className,
      )}
      {...props}
    />
  );
};

export default SkillCardWaterMark;
