import { Button, ButtonProps } from '@/components/input/Button';
import { Magnetic } from '@/components/motion/Magnetic';
import { UseMagneticOptions } from '@/hooks/useMagnetic';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

export type MagneticButtonProps = MergeProps<UseMagneticOptions['config'], ButtonProps, 'asChild'>;

export const magneticButtonVariants = cva('', {
  variants: {
    variant: {
      default: '*:data-bg:bg-(--hover) engaged:bg-(--bg)',
      subtle: '*:data-bg:bg-(--hover)/16 engaged:bg-(--bg)/8',
      ghost: '*:data-bg:bg-(--hover)/16 engaged:bg-transparent',
      plain: ''
    }
  }
});

export const MagneticButton = ({
  className,
  children,
  strength = 0.35,
  duration,
  ease,
  variant,
  ...props
}: MagneticButtonProps) => {
  const magneticProps = {
    strength: props.disabled ? 0 : strength,
    duration,
    ease
  } satisfies UseMagneticOptions['config'];

  return (
    <Magnetic {...magneticProps}>
      <Button
        className={cn(
          magneticButtonVariants({ variant }),
          'isolate gap-0 overflow-hidden px-0 transition-none',
          className
        )}
        {...props}
      >
        <Magnetic
          {...magneticProps}
          strength={magneticProps.strength * 0.75}
        >
          <span className='flex size-full items-center justify-center gap-(--gap) rounded-inherit px-(--px)'>
            {children}
          </span>
        </Magnetic>

        <span className='absolute inset-0 -z-10 rounded-inherit bg-(--hover) transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-aria-disabled/button:hidden group-engaged/button:[clip-path:inset(0_round_0)]' />
      </Button>
    </Magnetic>
  );
};
