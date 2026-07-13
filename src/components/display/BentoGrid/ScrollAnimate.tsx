import {
  ScrollAnimate,
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/motion';
import { MergeProps } from '@/types';

const SCROLL_OFFSET = ['0 1', '0 .6'],
  ANIMATION_CONFIG = {
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'y',
      propPoints: ['25%', '0%']
    } as ScrollAnimateConfigOptions,
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'opacity',
      propPoints: [0, 1]
    } as ScrollAnimateConfigOptions
  };

type BentoGridScrollAnimateProps = MergeProps<
  {
    config?: {
      y?: ScrollAnimateConfigOptions;
      opacity?: ScrollAnimateConfigOptions;
    };
  },
  ScrollAnimateProps
>;

const BentoGridScrollAnimate = ({
  config,
  children,
  ...props
}: BentoGridScrollAnimateProps) => {
  return (
    <ScrollAnimate
      {...props}
      config={{ ...ANIMATION_CONFIG.y, ...config?.y }}
    >
      <ScrollAnimate
        config={{ ...ANIMATION_CONFIG.opacity, ...config?.opacity }}
      >
        {children}
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export { BentoGridScrollAnimate };
export type { BentoGridScrollAnimateProps };
