import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 1', '0 0'];

const AboutViewHeroImagesSeciton = ({ className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--y',
      propPoints: ['-5%', '0%'],
    },
    x: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--smooth-x',
      propPoints: [1, 0],
    },
    rotate: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['15deg', '0deg'],
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.y}>
      <ScrollAnimationTransform config={animationConfig.x}>
        <ScrollAnimationTransform config={animationConfig.rotate}>
          <ul
            className={cn(
              'grid w-9/10 max-w-screen-xl gap-[--gap] [--gap:theme(spacing.sm)] sm:grid-cols-3 sm:[--x:calc(var(--smooth-x)*(var(--gap)+35%))] lg:[--gap:theme(spacing.md)]',
              className,
            )}
            {...props}
          >
            {[...Array(3)].map((_, i) => (
              <li
                className='aspect-[1/1.4] w-full rounded-3xl bg-blue-500 odd:bg-red-500 even:z-10 max-sm:last:hidden sm:first:translate-x-[--x] sm:first:-rotate-[--rotate] sm:last:-translate-x-[--x] sm:last:rotate-[--rotate] sm:odd:mt-[25%] sm:odd:translate-y-[--y]'
                key={i}
              />
            ))}
          </ul>
        </ScrollAnimationTransform>
      </ScrollAnimationTransform>
    </ScrollAnimationTransform>
  );
};

export default AboutViewHeroImagesSeciton;
