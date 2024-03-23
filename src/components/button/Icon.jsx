import { Slot } from '@radix-ui/react-slot';

import { cn, cnv } from '@/utils';

const ButtonIcon = ({ className, animation, children, ...props }) => {
  return (
    <div
      aria-hidden
      className={cn(
        'relative flex aspect-square h-[56%] items-center justify-center transition-[clip-path] duration-500 ease-backOut [clip-path:inset(37.5%_round_theme(borderRadius.full))] group-hover:[clip-path:inset(0_round_theme(borderRadius.full))]',
        className,
      )}
      {...props}
    >
      <span className='absolute inset-0 rounded-full bg-variant-content transition-bg delay-100' />

      <Slot
        className={cn(
          'relative z-10 size-1/2 text-variant',
          buttonIconAnimationVariants({ animation }),
        )}
      >
        {children}
      </Slot>
    </div>
  );
};

const buttonIconAnimations = {
  opacity: 'opacity-0 transition-opacity group-hover:opacity-100',
  slideUp: 'translate-y-full transition-transform group-hover:translate-y-0',
  slideRight: '-translate-x-full transition-transform group-hover:translate-x-0',
  slideBottom: '-translate-y-full transition-transform group-hover:translate-y-0',
   slideLeft: 'translate-x-full transition-transform group-hover:translate-x-0',
  slideUpRight:
    '-translate-x-full translate-y-full transition-transform group-hover:translate-x-0 group-hover:translate-y-0',
};

const buttonIconAnimationVariants = cnv({
  base: 'duration-500 ease-backOut ',
  variants: {
    animation: buttonIconAnimations,
  },
  defaultVariants: {
    animation: 'opacity',
  },
});

export default ButtonIcon;
export { buttonIconAnimations, buttonIconAnimationVariants };
