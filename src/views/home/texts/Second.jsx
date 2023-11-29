import { ScrollAnimation, Section, TextScrollAnimation } from '@/components';
import { scrollSmoothConfig } from '@/components/smooth-scroll';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeSecondText = ({ className, theme, ...props }) => {
  const animationConfig = {
      y: {
        useScrollConfig: {
          offset: ['1 1', '1.5 1'],
        },
        propPoints: ['0%', '50%'],
      },
      clipPath: {
        useScrollConfig: {
          offset: ['1 1', '1.5 1'],
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
    },
    animationSmoothConfig = { scroll: scrollSmoothConfig };

  return (
    <div
      className={cn(
        'relative my-[25vh] flex h-[150vh] flex-col items-center justify-end 2xl:my-[calc(var(--max-h)*.25)] 2xl:max-h-[calc(var(--max-h)*1.5)]',
        className,
      )}
      {...props}
    >
      <ScrollAnimation.Transform
        className='absolute top-0 flex items-center overflow-hidden'
        config={animationConfig.y}
        smoothConfig={animationSmoothConfig}
      >
        <Section
          asChild
          theme={theme}
        >
          <div>
            <ScrollAnimation
              config={animationConfig.clipPath}
              smoothConfig={animationSmoothConfig}
            >
              <ScrollAnimation.Transform
                config={animationConfig.x}
                smoothConfig={animationSmoothConfig}
              >
                <Text
                  className='outline-text relative text-[24rem] font-bold before:pointer-events-none before:absolute before:origin-bottom before:overflow-hidden before:content-[attr(data-text)] before:[-webkit-text-fill-color:currentColor] before:[clip-path:--clip-path]'
                  data-text='BUT'
                >
                  BUT
                </Text>
              </ScrollAnimation.Transform>
            </ScrollAnimation>
          </div>
        </Section>
      </ScrollAnimation.Transform>

      <Section
        asChild
        className='flex w-[86%] items-center justify-center'
        theme={theme}
      >
        <div>
          <Text className='text-[clamp(2rem,6.6vw,6rem)] font-bold leading-tight'>
            <TextScrollAnimation
              className='justify-center'
              text="it's not just about the tech."
            />
          </Text>
        </div>
      </Section>
    </div>
  );
};

export default HomeSecondText;
