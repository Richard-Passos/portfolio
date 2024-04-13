import { cn } from '@/utils';

const SkillCardIcon = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'absolute flex aspect-square h-2/3 items-center justify-center place-self-center rounded-sm bg-muted/40 transition-[transform,opacity] delay-150 duration-300 group-data-open:-translate-y-2 group-data-open:opacity-0 group-data-open:delay-0 dark:bg-muted/10 [&>svg]:h-2/3',
        className,
      )}
      {...props}
    />
  );
};

export default SkillCardIcon;
