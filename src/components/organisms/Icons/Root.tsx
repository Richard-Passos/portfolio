import { ComponentProps } from 'react';

import scrollAnimations from '@/animations/scroll';
import { Icon, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

type IconsOrganismIcon = {
  src: string;
  animation: keyof typeof scrollAnimations;
  y: 'top' | 'bottom';
};

type IconsOrganismOwnProps = {
  left: IconsOrganismIcon;
  right: IconsOrganismIcon;
  leftProps?: Partial<ComponentProps<'div'>>;
  rightProps?: Partial<ComponentProps<'div'>>;
};

type IconsOrganismProps = IconsOrganismOwnProps &
  Omit<ComponentProps<'div'>, keyof IconsOrganismOwnProps>;

const IconsOrganism = ({
  className,
  left,
  right,
  leftProps,
  rightProps,
  ...props
}: IconsOrganismProps) => {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      <ScrollAnimate config={scrollAnimations[left.animation]}>
        <div
          {...leftProps}
          className={cn(
            'absolute left-0 size-[min(50vmin,var(--container-md))]',
            leftProps?.className
          )}
          style={{ [left.y]: '0px', ...leftProps?.style }}
        >
          <Icon
            className={`text-gray-0 dark:text-dark-6`}
            src={left.src}
          />
        </div>
      </ScrollAnimate>

      <ScrollAnimate config={scrollAnimations[right.animation]}>
        <div
          {...rightProps}
          className={cn(
            'absolute right-0 size-[min(50vmin,var(--container-md))]',
            rightProps?.className
          )}
          style={{ [right.y]: '0px', ...rightProps?.style }}
        >
          <Icon
            className={`text-gray-0 dark:text-dark-6`}
            src={right.src}
          />
        </div>
      </ScrollAnimate>
    </div>
  );
};

export default IconsOrganism;
export type { IconsOrganismProps, IconsOrganismIcon };
