import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const SkillCardWaterMark = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'absolute right-0 top-0 -z-10 size-2/3 -translate-y-[--translate] translate-x-[--translate] opacity-[--opacity] transition-[transform,opacity] duration-300 [--opacity:0] [--translate:50%] group-data-open:[--opacity:.025] group-data-open:[--translate:25%] dark:group-data-open:[--opacity:.01]',
        className,
      )}
      {...props}
    />
  );
};

export default SkillCardWaterMark;
