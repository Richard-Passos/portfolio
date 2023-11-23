import { ScrollAnimation, Section, TextScrollAnimation } from '@/components';
import { scrollSmoothConfig } from '@/components/smooth-scroll';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeSecondText = ({ className, theme, ...props }) => {
  const animationConfig = {
      opacity: {
        useScrollConfig: {
          offset: ['1 1', '1.5 1'],
        },
        useScrollRes: 'scrollYProgress',
        prop: 'opacity',
        scrollPoints: [0, 1],
        propPoints: [1, 0.05],
      },
      y: {
        useScrollConfig: {
          offset: ['1 1', '1.5 1'],
        },
        propPoints: ['0%', '50%'],
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
        'relative my-[25vh] flex h-[150vh] flex-col items-center justify-end',
        className,
      )}
      {...props}
    >
      <ScrollAnimation
        className='absolute top-0 flex items-center overflow-hidden'
        config={animationConfig.opacity}
        smoothConfig={animationSmoothConfig}
      >
        <ScrollAnimation.Transform
          config={animationConfig.y}
          smoothConfig={animationSmoothConfig}
        >
          <Section
            asChild
            theme={theme}
          >
            <div>
              <ScrollAnimation.Transform
                config={animationConfig.x}
                smoothConfig={animationSmoothConfig}
              >
                <Text className='text-[24rem] font-bold uppercase'>but</Text>
              </ScrollAnimation.Transform>
            </div>
          </Section>
        </ScrollAnimation.Transform>
      </ScrollAnimation>

      <Section
        asChild
        className='flex w-[86%] items-center justify-center'
        theme={theme}
      >
        <div>
          <Text className='text-center text-[clamp(2rem,6.6vw,6rem)] leading-tight'>
            <TextScrollAnimation lines={["it's not just about the tech."]} />
          </Text>
        </div>
      </Section>
    </div>
  );
};

export default HomeSecondText;
