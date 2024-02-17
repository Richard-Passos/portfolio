import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const SkillCardIcon = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'absolute flex aspect-square h-2/3 items-center justify-center place-self-center rounded-md bg-muted/50 transition-[transform,opacity] delay-150 duration-300 ease-backOut group-data-open:-translate-y-2 group-data-open:opacity-0 group-data-open:delay-0 group-data-open:ease-in-out',
        className,
      )}
      {...props}
    >
      <Slot className='size-2/3'>{children}</Slot>
    </div>
  );
};
export default SkillCardIcon;
