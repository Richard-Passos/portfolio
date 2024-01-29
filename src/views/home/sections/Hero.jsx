import { GridPattern, ScrollAnimation, ScrollIndicator } from '@/components';
import { Text } from '@/components/ui';
import { introText } from '@/constants/texts';
import { cn } from '@/utils';

const HomeHeroSection = ({ theme, className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: ['0 0', '1 0'],
      },
      prop: '--y',
      propPoints: ['0%', '50%'],
    },
    opacity: {
      useScrollConfig: {
        offset: ['0 0', '.75 0'],
      },
      useScrollRes: 'scrollYProgress',
      scrollPoints: [0, 1],
      prop: '--opacity',
      propPoints: [1, 0],
    },
  };

  return (
    <ScrollAnimation.Transform config={animationConfig.y}>
      <ScrollAnimation config={animationConfig.opacity}>
        <section
          className={cn(
            'relative overflow-hidden [--header-h:88px]',
            theme,
            className,
          )}
          {...props}
        >
          <div className='relative flex justify-center py-[min(28vh,theme(spacing.28))] [--inset:calc(var(--w)*.025)] [--w:100vw] max-2xl:min-h-[calc(100svh-var(--header-h))] sm:translate-y-[--y] 2xl:h-screen 2xl:max-h-bounds 2xl:[--w:--max-w]'>
            <div className='flex w-[90%] max-w-screen-xl flex-col items-center justify-center gap-sm pb-[--inset] lg:opacity-[--opacity]'>
              <Text.Title
                aria-label='Turning heads and conquering hearts.'
                asChild
                className='w-full text-center text-[13vw]/[1] font-bold uppercase sm:text-[min(10vw,7rem)]/[1]'
              >
                <h1>
                  <div aria-hidden>
                    <span className='lg:-translate-x-[min(20vw,theme(spacing.20))]'>
                      Turning heads
                    </span>

                    <br />

                    <span className='lg:translate-x-[min(20vw,theme(spacing.20))]'>
                      <span className='outline-text'>&</span> conquering
                    </span>

                    <br />

                    <div className='flex w-full items-end justify-evenly'>
                      <span>hearts</span>

                      <span className='max-w-sm -translate-y-3.5 text-start text-[.14em]/[1.15] font-medium normal-case text-muted-content max-lg:hidden'>
                        {introText}
                      </span>
                    </div>
                  </div>
                </h1>
              </Text.Title>

              <Text className='max-w-lg text-center font-medium text-muted-content lg:sr-only'>
                {introText}
              </Text>
            </div>

            <GridPattern className='inset-[--inset] top-0 -z-50 [&>*:nth-child(2)]:border-transparent first:[&>*]:border-transparent last:[&>*]:border-transparent' />
          </div>

          <ScrollIndicator
            className='absolute bottom-[min(10vw,theme(spacing.16))] right-[min(10vw,theme(spacing.16))]'
            href='#scrollTo'
          />
        </section>
      </ScrollAnimation>
    </ScrollAnimation.Transform>
  );
};

export default HomeHeroSection;
