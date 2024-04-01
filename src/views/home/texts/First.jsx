import { ScrollAnimate, Section, TextScrollAnimate } from '@/components';
import { Text } from '@/components/ui/text';

const HomeViewFirstText = (props) => {
  const animationConfig = {
    x: {
      scrollConfig: {
        offset: ['-.5 .5', '0 .5'],
      },
      prop: '--x',
      propPoints: ['-101%', '0%'],
    },
    clipPath: {
      scrollConfig: {
        offset: ['.5 .5', '.75 .5'],
      },

      prop: '--clip-path',
      propPoints: ['inset(0% -1% 0 0)', 'inset(100% -1% 0 0)'],
    },
    y: {
      scrollConfig: {
        offset: ['.5 .5', '1 .5'],
      },
      prop: 'y',
      propPoints: ['0%', '50%'],
    },
    top: {
      scrollConfig: {
        offset: ['-1 .5', '0 .5'],
      },
      prop: '--top',
      propPoints: ['0%', '-50%'],
    },
  };

  return (
    <Section
      as='div'
      {...props}
    >
      <div className='grid min-h-[calc(var(--h)*1.5)] grid-rows-3 justify-items-center [--h:100vh] 2xl:[--h:--max-h]'>
        <ScrollAnimate config={animationConfig.x}>
          <ScrollAnimate config={animationConfig.clipPath}>
            <ScrollAnimate.Transform config={animationConfig.y}>
              <div className='row-span-2 flex items-center py-md [clip-path:inset(0_-1%_0_0)]'>
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
            </ScrollAnimate.Transform>
          </ScrollAnimate>
        </ScrollAnimate>

        <ScrollAnimate config={animationConfig.top}>
          <div className='flex w-9/10 items-center justify-center'>
            <Text className='relative top-[--top] text-center text-[clamp(2rem,6.6vw,6rem)]/tight font-semibold'>
              <TextScrollAnimate text="it's not just about the tech." />
            </Text>
          </div>
        </ScrollAnimate>
      </div>
    </Section>
  );
};

export default HomeViewFirstText;
