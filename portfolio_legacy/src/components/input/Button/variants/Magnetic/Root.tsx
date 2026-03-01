import { Button, ButtonProps } from '@/components/input/Button';
import { MagneticRoot, MagneticRootProps } from '@/components/motion';
import { Link, LinkProps } from '@/components/navigation';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type MagneticButtonRootProps = MergeProps<
  {
    magneticProps?: Partial<MagneticRootProps>;
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

const MagneticButtonRoot = ({
  href,
  className,
  children,
  magneticProps,
  ...props
}: MagneticButtonRootProps) => {
  magneticProps = {
    ...magneticProps,
    limit:
      (props.disabled ?? props.isLoading)
        ? { x: 0, y: 0 }
        : { x: 0.35, y: 0.35, ...magneticProps?.limit }
  };

  const content = (
    <>
      <MagneticRoot
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
      </MagneticRoot>

      <span className='absolute inset-0 bg-(--button-hover) transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover/action:[clip-path:inset(0_round_0)] group-aria-disabled/action:hidden' />
    </>
  );

  className = cn(
    'group/action relative px-0 *:*:grow hover:z-10 hover:bg-(--button-bg)',
    className
  );

  return (
    <MagneticRoot {...magneticProps}>
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
    </MagneticRoot>
  );
};

export { MagneticButtonRoot };
export type { MagneticButtonRootProps };
