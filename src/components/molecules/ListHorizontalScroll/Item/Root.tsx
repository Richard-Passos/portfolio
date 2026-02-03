import { Marquee, ScrollAnimate, Title } from '@/components/atoms';
import { MarqueeProps } from '@/components/atoms/Marquee';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

const CLIP_PATHS = {
  rtl: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  ltr: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
};

const ANIMATION_CONFIG = (
  dir: keyof typeof CLIP_PATHS
): ScrollAnimateConfigOptions => ({
  scrollConfig: {
    offset: ['0 1', '0 .6']
  },
  prop: 'clipPath',
  propPoints: CLIP_PATHS[dir]
});

type ListHorizontalScrollItemMoleculeOwnProps = {
  speed?: MarqueeProps['speed'];
  direction?: MarqueeProps['direction'];
};

type ListHorizontalScrollItemMoleculeProps =
  ListHorizontalScrollItemMoleculeOwnProps &
    Omit<TitleProps, keyof ListHorizontalScrollItemMoleculeOwnProps>;

const ListHorizontalScrollItemMolecule = ({
  className,
  speed = 75,
  direction = 'right',
  children,
  ...props
}: ListHorizontalScrollItemMoleculeProps) => {
  return (
    <ScrollAnimate
      config={ANIMATION_CONFIG(direction === 'right' ? 'ltr' : 'rtl')}
    >
      <Title
        className={cn(
          'bg-body border-x-0 border-y py-4 odd:-rotate-[.5deg] even:rotate-[.5deg]',
          className
        )}
        component='li'
        {...props}
      >
        <Marquee
          autoFill
          direction={direction}
          speed={speed}
        >
          {children}
        </Marquee>
      </Title>
    </ScrollAnimate>
  );
};

export default ListHorizontalScrollItemMolecule;
export type { ListHorizontalScrollItemMoleculeProps };
