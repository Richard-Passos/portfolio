import { ScrollAnimate } from '@/components/atoms';
import {
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/atoms/ScrollAnimate';

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

type BentoGridScrollAnimateMoleculeOwnProps = {
  config?: {
    y?: ScrollAnimateConfigOptions;
    opacity?: ScrollAnimateConfigOptions;
  };
};

type BentoGridScrollAnimateMoleculeProps =
  BentoGridScrollAnimateMoleculeOwnProps &
    Omit<ScrollAnimateProps, keyof BentoGridScrollAnimateMoleculeOwnProps>;

const BentoGridScrollAnimateMolecule = ({
  config,
  children,
  ...props
}: BentoGridScrollAnimateMoleculeProps) => {
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

export default BentoGridScrollAnimateMolecule;
export type { BentoGridScrollAnimateMoleculeProps };
