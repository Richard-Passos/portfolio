import { Button, type ButtonProps } from '@/components/input';
import { Magnetic, type MagneticProps } from '@/components/motion';
import { Link, type LinkProps } from '@/components/navigation';
import type { MergeProps } from '@/types';
import { cn } from '@/utils';

export type MagneticButtonProps = MergeProps<
  {
    magneticProps?: Partial<MagneticProps>;
  },
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
  href,
  className,
  children,
  magneticProps,
  ...props
}: MagneticButtonProps) => {
  magneticProps = {
    ...magneticProps,
    limit:
      (props.disabled ?? props.isLoading)
        ? { x: 0, y: 0 }
        : { x: 0.35, y: 0.35, ...magneticProps?.limit }
  };

  const content = (
    <>
      <Magnetic
        limit={
          magneticProps.limit && {
            x: magneticProps.limit.x * 0.8,
            y: magneticProps.limit.y * 0.8
          }
        }
        smoothConfig={magneticProps.smoothConfig}
      >
        <span className='rounded-inherit relative z-10 flex size-full items-center justify-center gap-[inherit] px-(--button-padding-x)'>
          {children}
        </span>
      </Magnetic>

      <span className='absolute inset-0 bg-(--button-hover) transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover/action:[clip-path:inset(0_round_0)] group-aria-disabled/action:hidden' />
    </>
  );

  className = cn(
    'group/action relative px-0 *:*:grow hover:z-10 hover:bg-(--button-bg)',
    className
  );

  return (
    <Magnetic {...magneticProps}>
      {href ? (
        <Button
          asChild={true}
          {...props}
        >
          <Link
            href={href}
            className={className}
          >
            {content}
          </Link>
        </Button>
      ) : (
        <Button
          className={className}
          {...props}
        >
          {content}
        </Button>
      )}
    </Magnetic>
  );
};
