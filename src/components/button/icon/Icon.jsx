import { Slot } from '@radix-ui/react-slot';

import { cn, cnv } from '@/utils';

const IconButtonIcon = ({ className, animation, children, ...props }) => {
  return (
    <div
      className={cn(
        'relative scale-[.25] overflow-hidden rounded-full transition-transform duration-500 ease-backOut group-hover:scale-100',
        className,
      )}
      {...props}
    >
      <span className='absolute inset-0 bg-current transition-bg' />

      <div
        className={cn(
          'relative z-10 flex aspect-square w-[1.625rem] items-center justify-center',
          iconButtonIconAnimationVariants({ animation }),
        )}
      >
        <Slot className='h-3.5 w-3.5 text-[--svg-color]'>{children}</Slot>
      </div>
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
