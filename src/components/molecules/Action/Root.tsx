import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { MagneticRoot, MagneticRootProps } from '@/components/atoms/Magnetic';
import { cn } from '@/utils';

import ActionLink, { ActionLinkProps } from './Link';

type ActionMoleculeOwnProps = {
  ref?: any;
  magneticProps?: Partial<MagneticRootProps>;
};

type ActionMoleculeProps = ActionMoleculeOwnProps &
  (
    | ({
        as: 'link';
      } & Omit<ActionLinkProps, 'ref' | keyof ActionMoleculeOwnProps>)
    | ({
        as?: 'button';
      } & Omit<ButtonProps, 'ref' | keyof ActionMoleculeOwnProps>)
  );

const ActionMolecule = ({
  disabled,
  isLoading,
  className,
  children,
  ref,
  magneticProps,
  ...props
}: ActionMoleculeProps) => {
  magneticProps = {
    ...magneticProps,
    limit:
      (disabled ?? isLoading)
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
        <span
          className={`rounded-inherit relative z-10 flex size-full items-center justify-center gap-[inherit] px-(--button-padding-x)`}
        >
          {children}
        </span>
      </MagneticRoot>

      <span
        className={`absolute inset-0 bg-(--button-hover) transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover/action:[clip-path:inset(0_round_0)] group-aria-disabled/action:hidden`}
      />
    </>
  );

  const defaultProps = {
    children: content,
    className: cn(
      `
        group/action relative px-0

        *:*:grow

        hover:z-10 hover:bg-(--button-bg)
      `,
      className
    ),
    disabled,
    isLoading,
    ref
  };

  if (props.as === 'link') {
    const { as: _, ...rest } = props;

    return (
      <MagneticRoot {...magneticProps}>
        <ActionLink
          {...defaultProps}
          {...rest}
        />
      </MagneticRoot>
    );
  }

  const { as: _, ...rest } = props;

  return (
    <MagneticRoot {...magneticProps}>
      <Button
        {...defaultProps}
        {...rest}
      />
    </MagneticRoot>
  );
};

export default ActionMolecule;
export type { ActionMoleculeProps };
