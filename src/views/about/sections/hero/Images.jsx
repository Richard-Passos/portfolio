import { ScrollAnimate } from '@/components';
import { Image } from '@/components/ui';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 1', '0 0'],
  ANIMATION_CONFIG = {
    y1: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--y',
      propPoints: ['-5%', '0%'],
    },
    y2: {
      prop: 'y',
      propPoints: ['-13%', '0%'],
    },
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--smooth-x',
      propPoints: [1, 0],
    },
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['15deg', '0deg'],
    },
  };

const AboutViewHeroSectionImages = ({ className, data = [], ...props }) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.y1}>
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
          <ul
            className={cn(
              'grid w-9/10 max-w-screen-xl gap-[--gap] [--gap:theme(spacing.sm)] sm:grid-cols-3 sm:[--x:calc(var(--smooth-x)*(var(--gap)+35%))] lg:[--gap:theme(spacing.md)]',
              className,
            )}
            {...props}
          >
            {data.map((data) => (
              <li
                className='aspect-[1/1.4] w-full overflow-hidden rounded-3xl bg-muted shadow-md even:z-10 max-sm:last:hidden sm:first:translate-x-[--x] sm:first:-rotate-[--rotate] sm:last:-translate-x-[--x] sm:last:rotate-[--rotate] sm:odd:mt-[25%] sm:odd:translate-y-[--y]'
                key={data.src}
              >
                <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
                  <Image
                    className='h-[115%] w-full object-cover'
                    {...data}
                  />
                </ScrollAnimate.Transform>
              </li>
            ))}
          </ul>
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default AboutViewHeroSectionImages;
