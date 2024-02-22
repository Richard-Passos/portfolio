import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 1', '0 0'];

const AboutViewHeroImagesSeciton = ({ className, ...props }) => {
  const animationConfig = {
    y1: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      propPoints: ['-5%', '0%'],
    },
    y2: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      propPoints: ['0%', '-5%'],
    },
    y3: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      propPoints: ['-5%', '0%'],
    },
  };

  return (
    <ul
      className={cn(
        'grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-3 md:gap-x-md',
        className,
      )}
      {...props}
    >
      {[...Array(3)].map((_, i) => (
        <ScrollAnimationTransform
          config={animationConfig['y' + (i + 1)]}
          key={i}
        >
          <li className='aspect-[1/1.4] w-full rounded-3xl bg-blue-500 odd:bg-red-500 max-sm:!translate-y-0 max-sm:last:hidden sm:odd:mt-[20%]' />
        </ScrollAnimationTransform>
      ))}
    </ul>
  );
};

export default AboutViewHeroImagesSeciton;
