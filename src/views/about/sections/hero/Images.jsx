import { ScrollAnimate } from '@/components/scroll-animate';
import { Image } from '@/components/ui';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 1', '0 0'];

const AboutViewHeroImagesSeciton = ({ className, data = [], ...props }) => {
  const animationConfig = {
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--y',
      propPoints: ['-5%', '0%'],
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

  return (
    <ScrollAnimate config={animationConfig.y}>
      <ScrollAnimate config={animationConfig.x}>
        <ScrollAnimate config={animationConfig.rotate}>
          <ul
            className={cn(
              'grid w-9/10 max-w-screen-xl gap-[--gap] [--gap:theme(spacing.sm)] sm:grid-cols-3 sm:[--x:calc(var(--smooth-x)*(var(--gap)+35%))] lg:[--gap:theme(spacing.md)]',
              className,
            )}
            {...props}
          >
            {data.map((data) => (
              <li
                className='aspect-[1/1.4] w-full overflow-hidden rounded-3xl even:z-10 max-sm:last:hidden sm:first:translate-x-[--x] sm:first:-rotate-[--rotate] sm:last:-translate-x-[--x] sm:last:rotate-[--rotate] sm:odd:mt-[25%] sm:odd:translate-y-[--y]'
                key={data.src}
              >
                <Image
                  className='size-full object-cover'
                  {...data}
                />
              </li>
            ))}
          </ul>
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default AboutViewHeroImagesSeciton;
