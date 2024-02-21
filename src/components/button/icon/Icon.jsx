import { Slot } from '@radix-ui/react-slot';

import { cn, cnv } from '@/utils';

const IconButtonIcon = ({ className, animation, children, ...props }) => {
  return (
    <div
      aria-hidden
      className={cn(
        'relative flex aspect-square h-[56%] items-center justify-center transition-[clip-path] duration-500 ease-backOut [clip-path:inset(37.5%_round_theme(borderRadius.full))] group-hover:[clip-path:inset(0_round_theme(borderRadius.full))]',
        className,
      )}
      {...props}
    >
      <span className='absolute inset-0 rounded-full bg-current transition-bg' />

      <Slot
        className={cn(
          'relative z-10 size-1/2 text-[--svg-color]',
          iconButtonIconAnimationVariants({ animation }),
        )}
      >
        {children}
      </Slot>
    </div>
  );
};

const iconButtonIconAnimations = {
  opacity: 'opacity-0 transition-opacity group-hover:opacity-100',
  slideUp: 'translate-y-full transition-transform group-hover:translate-y-0',
  slideUpRight:
    '-translate-x-full translate-y-full transition-transform group-hover:translate-x-0 group-hover:translate-y-0',
};

const iconButtonIconAnimationVariants = cnv({
  base: 'duration-500 ease-backOut ',
  variants: {
    animation: iconButtonIconAnimations,
  },
  defaultVariants: {
    animation: 'opacity',
  },
});

export default IconButtonIcon;
export { iconButtonIconAnimations, iconButtonIconAnimationVariants };
