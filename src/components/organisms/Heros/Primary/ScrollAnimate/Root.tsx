import { ScrollAnimate } from '@/components/atoms';
import {
  ScrollAnimateConfigOptions,
  ScrollAnimateProps
} from '@/components/atoms/ScrollAnimate';
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

type PrimaryHeroScrollAnimateOrganismOwnProps = Partial<
  Pick<ScrollAnimateProps, 'config'>
>;

type PrimaryHeroScrollAnimateOrganismProps =
  PrimaryHeroScrollAnimateOrganismOwnProps &
    Omit<ScrollAnimateProps, keyof PrimaryHeroScrollAnimateOrganismOwnProps>;

const PrimaryHeroScrollAnimateOrganism = ({
  className,
  children,
  ...props
}: PrimaryHeroScrollAnimateOrganismProps) => {
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

export default PrimaryHeroScrollAnimateOrganism;
export type { PrimaryHeroScrollAnimateOrganismProps };
