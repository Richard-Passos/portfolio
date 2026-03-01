import { ComponentProps } from 'react';

import { ScrollAnimate } from '@/components/motion';
import scrollAnimations from '@/components/motion/ScrollAnimate/animations/scroll';
import { Icon } from '@/components/system';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type IconsPairIconProps = MergeProps<
  {
    src: string;
    pos: ['top' | 'bottom', 'left' | 'right'];
    animation: keyof typeof scrollAnimations;
  },
  ComponentProps<'div'>
>;

const IconsPairIcon = ({
  src,
  pos,
  animation,
  className,
  style,
  ...props
}: IconsPairIconProps) => {
  const [x, y] = pos;

  return (
    <ScrollAnimate config={scrollAnimations[animation]}>
      <div
        className={cn(
          'absolute size-[min(50vmin,var(--container-md))]',
          className
        )}
        style={{ [x]: 0, [y]: 0, ...style }}
        {...props}
      >
        <Icon
          className='text-gray-0 dark:text-dark-6'
          src={src}
        />
      </div>
    </ScrollAnimate>
  );
};

export { IconsPairIcon };
export type { IconsPairIconProps };
