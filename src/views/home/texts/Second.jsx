import { ScrollAnimation, Section, TextScrollAnimation } from '@/components';
import { scrollSmoothConfig } from '@/components/smooth-scroll';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeSecondText = ({ className, theme, ...props }) => {
  const animationConfig = {
      opacity: {
        useScrollConfig: {
          offset: ['1 1', '1.25 1'],
        },
        useScrollRes: 'scrollYProgress',
        prop: 'opacity',
        scrollPoints: [0, 1],
        propPoints: [1, 0.1],
      },
      y: {
        useScrollConfig: {
          offset: ['1 1', '1.25 1'],
        },
        propPoints: ['0%', '25%'],
      },
      x: {
        useScrollConfig: {
          offset: ['0 1', '0.75 1'],
        },
        prop: 'x',
        propPoints: ['-100%', '0%'],
      },
    },
    animationSmoothConfig = { scroll: scrollSmoothConfig };

  return (
    <div
      className={cn(
        'relative flex h-[125vh] flex-col items-center justify-end',
        className,
        { ...props },
      )}
    >
      <Section
        asChild
        theme={theme}
      >
        <ScrollAnimation
          config={animationConfig.opacity}
          smoothConfig={animationSmoothConfig}
        >
          <ScrollAnimation.Transform
            config={animationConfig.y}
            smoothConfig={animationSmoothConfig}
          >
            <div className='absolute top-0 flex items-center overflow-hidden'>
              <ScrollAnimation.Transform
                config={animationConfig.x}
                smoothConfig={animationSmoothConfig}
              >
                <Text className='text-[24rem] font-bold uppercase'>but</Text>
              </ScrollAnimation.Transform>
            </div>
          </ScrollAnimation.Transform>
        </ScrollAnimation>
      </Section>

      <Section
        asChild
        theme={theme}
      >
        <div className='flex w-[86%] items-center justify-center'>
          <Text className='text-center text-8xl leading-tight'>
            <TextScrollAnimation text="it's not just about the tech." />
          </Text>
        </div>
      </Section>
    </div>
  );
};

export default HomeSecondText;
