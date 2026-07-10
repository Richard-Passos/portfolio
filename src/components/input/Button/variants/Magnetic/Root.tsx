import { Button, ButtonProps } from '@/components/input/Button';
import { Magnetic } from '@/components/motion/Magnetic';
import { Link, LinkProps } from '@/components/navigation/Link';
import { UseMagneticOptions } from '@/hooks/useMagnetic';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type MagneticButtonProps = MergeProps<
  {
    active?: boolean;
  } & UseMagneticOptions['config'],
  MergeProps<
    ButtonProps,
    | {
        href?: never;
      }
    | LinkProps
  >,
  'asChild'
>;

export const MagneticButton = ({
  active,
  href,
  className,
  children,
  strength = 0.35,
  duration,
  ease,
  ...props
}: MagneticButtonProps) => {
  const magneticProps = {
    strength: props.disabled ? 0 : strength,
    duration,
    ease
  } satisfies UseMagneticOptions['config'];

  const content = (
    <>
      <Magnetic strength={magneticProps.strength * 0.75}>
        <span className='relative z-10 flex size-full items-center justify-center gap-(--gap) rounded-[inherit] px-(--px)'>
          {children}
        </span>
      </Magnetic>

      <span className='absolute inset-0 rounded-[inherit] bg-(--hover) transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-aria-disabled/action:hidden group-[:is(:hover,:focus-visible,[data-active])]/action:[clip-path:inset(0_round_0)]' />
    </>
  );

  className = cn(
    'group/action relative gap-0 px-0 transition-none hover:z-10 hover:bg-(--bg) focus-visible:z-10',
    className
  );

  return (
    <Magnetic {...magneticProps}>
      {href ? (
        <Button
          asChild
          {...props}
        >
          <Link
            href={href}
            className={className}
            data-active={active ?? undefined}
          >
            {content}
          </Link>
        </Button>
      ) : (
        <Button
          className={className}
          data-active={active ?? undefined}
          {...props}
        >
          {content}
        </Button>
      )}
    </Magnetic>
  );
};
