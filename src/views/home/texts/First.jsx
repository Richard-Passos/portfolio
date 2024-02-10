import {
  ScrollAnimation,
  Section,
  TextScrollAnimation,
} from '@/components';
import { Text } from '@/components/ui/text';

const HomeFirstText = (props) => {
  const animationConfig = {
    x: {
      useScrollConfig: {
        offset: ['-.5 .5', '0 .5'],
      },
      prop: '--x',
      propPoints: ['-100%', '0%'],
    },
    clipPath: {
      useScrollConfig: {
        offset: ['0 .5', '.5 .5'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--clip-path',
      scrollPoints: [0, 1],
      propPoints: ['inset(0% 0 0 0)', 'inset(100% 0 0 0)'],
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
              <div className='row-span-2 flex items-center overflow-hidden py-[--gap]'>
                <Text
                  className='outline-text relative translate-x-[--x] text-[clamp(8rem,44vw,24rem)]/[1] font-bold before:pointer-events-none before:absolute before:overflow-hidden before:content-[attr(data-text)] before:[-webkit-text-fill-color:currentColor] before:[clip-path:--clip-path]'
                  data-text='BUT'
                >
                  BUT
                </Text>
              </div>
            </ScrollAnimation.Transform>
          </ScrollAnimation>
        </ScrollAnimation.Transform>

        <ScrollAnimation config={animationConfig.top}>
          <div className='flex w-[90%] items-center justify-center'>
            <Text className='relative top-[--top] text-[clamp(2rem,6.6vw,6rem)] font-semibold leading-tight'>
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

export default HomeFirstText;
