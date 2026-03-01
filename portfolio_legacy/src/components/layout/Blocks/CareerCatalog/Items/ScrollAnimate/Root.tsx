import { ScrollAnimate } from '@/components/motion';
import {
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/motion/ScrollAnimate';
import { MergeProps } from '@/types';

const SCROLL_OFFSET = ['0 1', '0 .6'],
  ANIMATION_CONFIG = {
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'x',
      propPoints: ['15%', '0%']
    } as ScrollAnimateConfigOptions,
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'opacity',
      propPoints: [0, 1]
    } as ScrollAnimateConfigOptions
  };

type CareerCatalogItemsScrollAnimateBlockOwnProps = {
  config?: {
    x?: ScrollAnimateConfigOptions;
    opacity?: ScrollAnimateConfigOptions;
  };
};

type CareerCatalogItemsScrollAnimateBlockProps = MergeProps<
  CareerCatalogItemsScrollAnimateBlockOwnProps,
  ScrollAnimateProps
>;

const CareerCatalogItemsScrollAnimateBlock = ({
  config,
  children,
  ...props
}: CareerCatalogItemsScrollAnimateBlockProps) => {
  return (
    <ScrollAnimate
      {...props}
      config={{ ...ANIMATION_CONFIG.x, ...config?.x }}
    >
      <ScrollAnimate
        config={{ ...ANIMATION_CONFIG.opacity, ...config?.opacity }}
      >
        {children}
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export { CareerCatalogItemsScrollAnimateBlock };
export type { CareerCatalogItemsScrollAnimateBlockProps };
