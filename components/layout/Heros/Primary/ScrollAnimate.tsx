import {
  ScrollAnimate,
  type ScrollAnimateConfigOptions,
  type ScrollAnimateProps
} from '@/components/motion';
import type { MergeProps } from '@/types';
import { cn } from '@/utils';

const ANIMATION_CONFIG: {
  y: ScrollAnimateConfigOptions;
  scale: ScrollAnimateConfigOptions;
  opacity: ScrollAnimateConfigOptions;
} = {
  y: {
    scrollConfig: {
      offset: ['0 0', '1 0']
    },
    prop: '--y',
    propPoints: ['0%', '75%']
  },
  scale: {
    scrollConfig: {
      offset: ['0 0', '1 0']
    },
    prop: '--scale',
    propPoints: [1, 0.85]
  },
  opacity: {
    scrollConfig: {
      offset: ['0 0', '.75 0']
    },
    prop: '--opacity',
    propPoints: [1, 0]
  }
};

type PrimaryHeroScrollAnimateProps = MergeProps<
  { config?: ScrollAnimateConfigOptions },
  ScrollAnimateProps
>;

const PrimaryHeroScrollAnimate = ({
  className,
  children,
  ...props
}: PrimaryHeroScrollAnimateProps) => {
  return (
    <ScrollAnimate
      className={cn('sm:translate-y-(--y)', className)}
      config={ANIMATION_CONFIG.y}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.scale}>
        <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
          {children}
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export { PrimaryHeroScrollAnimate };
export type { PrimaryHeroScrollAnimateProps };
