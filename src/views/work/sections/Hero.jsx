import { GridPattern, HorizontalScroll, ScrollIndicator } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Text } from '@/components/ui';
import { SmileIcon } from '@/components/ui/icon/icons';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

const WorkViewHeroSection = ({ theme, className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: ['0 0', '.2 0'],
      },
      prop: '--y',
      propPoints: ['100%', '0%'],
    },
    scale: {
      useScrollConfig: {
        offset: ['0 0', '.2 0'],
      },
      prop: '--scale',
      propPoints: [1, 0.75],
    },
    rotate: {
      useScrollConfig: {
        offset: ['1 1', '1 0'],
      },
      useScrollRes: 'scrollY',
      prop: 'rotate',
      scrollPoints: [0, 200],
      propPoints: ['0deg', '360deg'],
      useTransformConfig: { clamp: false },
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.y}>
      <ScrollAnimationTransform config={animationConfig.scale}>
        <section
          className={cn(
            'relative w-full [--h:100vh] [--header-h:88px] sm:min-h-[calc(var(--h)*1.5)] 2xl:[--h:--max-h]',
            className,
          )}
          {...props}
        >
          <div className='top-0 sm:sticky'>
            <div className='relative mx-auto w-[95%] sm:scale-[--scale]'>
              <div className='fix-work-hero-y relative mx-auto flex w-9/10 flex-col items-center justify-center gap-sm py-[--p] [--p:--spacing-lg] max-2xl:min-h-screen max-sm:min-h-[calc(100svh-var(--header-h))] sm:-translate-y-[--header-h] 2xl:h-screen 2xl:max-h-bounds'>
                <Text.Title className='overflow-y-clip text-center text-[min(20vw,16rem)]/[1] font-extrabold uppercase tracking-tighter'>
                  <div className='relative sm:translate-y-[--y]'>
                    <span className='sm:absolute sm:bottom-full sm:left-1/2 sm:-translate-x-1/2'>
                      Beyond
                    </span>{' '}
                    <span>Results</span>
                  </div>
                </Text.Title>

                <div className='grid w-full max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                  <Text className='col-span-full max-w-md justify-self-center text-center font-medium text-muted-content md:col-span-4'>
                    Helping brands achieve digital prominence. I bring a passion
                    for cutting-edge technology and a commitment to transforming
                    ideas into impactful, user-centric solutions.
                  </Text>

                  <Text className='text-xs font-semibold md:-order-1'>
                    {personalInfo.availabilityMessage}
                  </Text>

                  <ScrollAnimationTransform config={animationConfig.rotate}>
                    <SmileIcon className='h-6 w-6 justify-self-end' />
                  </ScrollAnimationTransform>
                </div>

                <ScrollIndicator
                  className='absolute bottom-[calc(var(--p)/2)] rounded-sm bg-muted transition-transform duration-300 hover:scale-90 focus-visible:outline-content'
                  href='#scrollTo'
                />
              </div>

              <GridPattern
                className='bottom-px -z-40 [&>*]:bg-main [&>:nth-child(14)]:rounded-tr-3xl [&>:nth-child(99)]:rounded-bl-3xl first:[&>]:rounded-tl-3xl last:[&>]:rounded-br-3xl'
                rows={8}
              />
            </div>

            <ul className='absolute inset-y-0 left-1/2 -z-50 flex w-screen -translate-x-1/2 flex-col justify-around'>
              {[...Array(3)].map((_, i) => (
                <li key={i}>
                  <HorizontalScroll
                    baseVelocity={i % 2 === 0 ? 1 : -1.5}
                    className='text-[min(32vmin,16rem)]/[1] font-extrabold uppercase tracking-tighter text-muted [--gap:.2em]'
                  >
                    <span>Beyond</span> •
                  </HorizontalScroll>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollAnimationTransform>
    </ScrollAnimationTransform>
  );
};

export default WorkViewHeroSection;
