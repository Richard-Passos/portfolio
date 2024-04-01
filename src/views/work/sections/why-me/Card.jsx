import { ScrollAnimate } from '@/components/scroll-animate';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const SCROLL_OFFSET = ['0 1', '0 .55'];

const WorkVieWhyMeCardSection = ({ className, value, title, ...props }) => {
  const animationConfig = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },

      prop: 'opacity',
      propPoints: [0, 1],
    },
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--x',
      propPoints: ['-25%', '0%'],
    },
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['-12deg', '0deg'],
    },
  };

  return (
    <ScrollAnimate config={animationConfig.opacity}>
      <ScrollAnimate config={animationConfig.x}>
        <ScrollAnimate config={animationConfig.rotate}>
          <li
            className={cn(
              'flex h-fit w-full translate-x-[--x] rotate-[--rotate] flex-col justify-between gap-sm rounded-3xl border bg-main p-sm shadow-md even:-translate-x-[--x] even:-rotate-[--rotate] sm:p-md md:even:mt-lg md:[&:not(:last-child)]:even:-mb-lg',
              className,
            )}
            {...props}
          >
            <Text className='text-7xl font-bold tracking-tight sm:text-8xl'>
              {value}
            </Text>

            <Text.Subtitle className='ml-auto whitespace-pre-line text-end text-2xl/none font-medium uppercase tracking-tight sm:text-3xl/none'>
              {title}
            </Text.Subtitle>
          </li>
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default WorkVieWhyMeCardSection;
