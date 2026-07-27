import { Magnetic } from '@/components/motion/Magnetic';
import { ButtonLink, ButtonLinkProps } from '@/components/navigation/Link/Button';
import { UseMagneticOptions } from '@/hooks/useMagnetic';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type MagneticLinkProps = MergeProps<UseMagneticOptions['config'], ButtonLinkProps>;

export const MagneticLink = ({
  href,
  className,
  children,
  strength = 0.35,
  duration,
  ease,
  ...props
}: MagneticLinkProps) => {
  const magneticProps = {
    strength: props.disabled ? 0 : strength,
    duration,
    ease
  } satisfies UseMagneticOptions['config'];

  return (
    <Magnetic {...magneticProps}>
      <ButtonLink
        href={href}
        className={cn(
          'isolate gap-0 overflow-hidden px-0 transition-none engaged:bg-(--bg)',
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
      </ButtonLink>
    </Magnetic>
  );
};
