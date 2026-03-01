import { Marquee, MarqueeProps } from '@/components/display/Marquee';
import { ScrollAnimate, ScrollAnimateConfigOptions } from '@/components/motion';
import { Title, TitleProps } from '@/components/system';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

const CLIP_PATHS = {
  ltr: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
  rtl: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)']
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

type ItemMarqueeRootProps = MergeProps<
  {
    speed?: MarqueeProps['speed'];
    direction?: MarqueeProps['direction'];
  },
  TitleProps
>;

const ItemMarqueeRoot = ({
  className,
  speed,
  direction = 'ltr',
  children,
  ...props
}: ItemMarqueeRootProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG(direction)}>
      <Title
        className={cn(
          'bg-body border-x-0 border-y py-4 odd:-rotate-[.5deg] even:rotate-[.5deg]',
          className
        )}
        component='li'
        {...props}
      >
        <Marquee
          speed={speed}
          direction={direction}
        >
          {children}
        </Marquee>
      </Title>
    </ScrollAnimate>
  );
};

export { ItemMarqueeRoot };
export type { ItemMarqueeRootProps };
