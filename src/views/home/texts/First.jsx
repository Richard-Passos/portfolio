import {
  Lines,
  ScrollAnimation,
  Section,
  TextScrollAnimation,
} from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeFirstText = ({ className, ...props }) => {
  const animationConfig = {
    y1: {
      useScrollConfig: {
        offset: ['1 1', '1.5 1'],
      },
      propPoints: ['0%', '50%'],
    },
    y2: {
      useScrollConfig: {
        offset: ['0 1', '1 1'],
      },
      propPoints: ['0%', '-50%'],
    },
    clipPath: {
      useScrollConfig: {
        offset: ['.75 1', '1.1 1'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--clip-path',
      scrollPoints: [0, 1],
      propPoints: ['inset(0% 0 0 0)', 'inset(100% 0 0 0)'],
    },
    x: {
      useScrollConfig: {
        offset: ['0 1', '.75 1'],
      },
      prop: 'x',
      propPoints: ['-100%', '0%'],
    },
  };

  return (
    <Section
      as='div'
      className={cn(
        'relative flex h-[150vh] flex-col items-center 2xl:max-h-[calc(var(--max-h)*1.5)]',
        className,
      )}
      {...props}
    >
      <ScrollAnimation.Transform
        className='flex h-[66.666%] items-center overflow-x-clip'
        config={animationConfig.y1}
      >
        <ScrollAnimation config={animationConfig.clipPath}>
          <div>
            <ScrollAnimation.Transform config={animationConfig.x}>
              <Text
                className='outline-text relative text-[clamp(1rem,44vw,24rem)] font-bold before:pointer-events-none before:absolute before:origin-bottom before:overflow-hidden before:content-[attr(data-text)] before:[-webkit-text-fill-color:currentColor] before:[clip-path:--clip-path]'
                data-text='BUT'
              >
                BUT
              </Text>
            </ScrollAnimation.Transform>
          </div>
        </ScrollAnimation>
      </ScrollAnimation.Transform>

      <div className='h-[33.333%] w-[90%]'>
        <ScrollAnimation.Transform config={animationConfig.y2}>
          <Text className='mx-auto text-[clamp(2rem,6.6vw,6rem)] font-bold leading-tight'>
            <TextScrollAnimation
              className='justify-center'
              text="it's not just about the tech."
            />
          </Text>
        </ScrollAnimation.Transform>
      </div>

      <Lines />
    </Section>
  );
};

export default HomeFirstText;
