import { ScrollAnimation, Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';

const HomeViewFirstText = (props) => {
  const animationConfig = {
    x: {
      useScrollConfig: {
        offset: ['-.5 .5', '0 .5'],
      },
      prop: '--x',
      propPoints: ['-101%', '0%'],
    },
    clipPath: {
      useScrollConfig: {
        offset: ['.5 .5', '.75 .5'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--clip-path',
      scrollPoints: [0, 1],
      propPoints: ['inset(0% -1% 0 0)', 'inset(100% -1% 0 0)'],
    },
    y: {
      useScrollConfig: {
        offset: ['.5 .5', '1 .5'],
      },
      propPoints: ['0%', '50%'],
    },
    top: {
      useScrollConfig: {
        offset: ['-1 .5', '0 .5'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--top',
      scrollPoints: [0, 1],
      propPoints: ['0%', '-50%'],
    },
  };

  return (
    <Section
      as='div'
      {...props}
    >
      <div className='grid grid-rows-3 justify-items-center [--gap:--gap-md] max-2xl:min-h-[150vh] 2xl:min-h-[calc(var(--max-h)*1.5)]'>
        <ScrollAnimation.Transform config={animationConfig.x}>
          <ScrollAnimation config={animationConfig.clipPath}>
            <ScrollAnimation.Transform config={animationConfig.y}>
              <div className='row-span-2 flex items-center py-[--gap] [clip-path:inset(0_-1%_0_0)]'>
                <Text className='relative translate-x-[--x] text-[clamp(8rem,44vw,32rem)]/[1] font-bold tracking-tighter'>
                  <span className='outline-text text-muted-content'>BUT</span>

                  <span
                    aria-hidden
                    className='absolute left-0 [clip-path:--clip-path]'
                  >
                    BUT
                  </span>
                </Text>
              </div>
            </ScrollAnimation.Transform>
          </ScrollAnimation>
        </ScrollAnimation.Transform>

        <ScrollAnimation config={animationConfig.top}>
          <div className='w-9/10 flex items-center justify-center'>
            <Text className='relative top-[--top] text-[clamp(2rem,6.6vw,6rem)]/tight font-semibold'>
              <TextScrollAnimation
                className='justify-center'
                text="it's not just about the tech."
              />
            </Text>
          </div>
        </ScrollAnimation>
      </div>
    </Section>
  );
};

export default HomeViewFirstText;
