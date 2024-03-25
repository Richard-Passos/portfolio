import { GridPattern, ScrollAnimate, ScrollIndicator } from '@/components';
import { Text } from '@/components/ui';
import { SmileIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const HomeViewHeroSection = ({ theme, className, ...props }) => {
  const animationConfig = {
    y: {
      scrollConfig: {
        offset: ['0 0', '1 0'],
      },
      prop: '--tw-translate-y',
      propPoints: ['0%', '75%'],
    },
    scale: {
      scrollConfig: {
        offset: ['0 0', '1 0'],
      },
      prop: 'scale',
      propPoints: [1, 0.85],
    },
    opacity: {
      scrollConfig: {
        offset: ['0 0', '.75 0'],
      },
      
      prop: '--opacity',
      propPoints: [1, 0],
    },
    rotate: {
      scroll: 'scrollY',
      scrollPoints: [0, 400],
      prop: 'rotate',
      propPoints: ['0deg', '360deg'],
      transformConfig: { clamp: false },
    },
  };

  return (
    <section
      className={cn(
        'max-2xl:min-h-svh relative -mt-[--header-h] w-full overflow-hidden 2xl:h-screen 2xl:max-h-bounds',
        theme,
        className,
      )}
      {...props}
    >
        <ScrollAnimate config={animationConfig.y}>
       <ScrollAnimate.Transform config={animationConfig.scale}>
          <ScrollAnimate config={animationConfig.opacity}>
            <div className='relative flex size-full items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))] px-[--inset] [--inset:calc(var(--w)*.025)] [--w:100vw] max-sm:!translate-y-0 max-sm:!scale-0 2xl:[--w:--max-w]'>
              <div className='w-9/10 pb-[--inset] sm:opacity-[--opacity]'>
                <Text.Title
                  aria-label='Turning heads and conquering hearts.'
                  asChild
                  className='mb-sm w-full text-center [--x:--spacing-lg] lg:text-[min(9vw,theme(fontSize.9xl))]/[1]'
                  variants={{ size: 'xl' }}
                >
                  <h1>
                    <div aria-hidden>
                      <span className='lg:-translate-x-[--x]'>
                        Turning heads
                      </span>

                      <br />

                      <span className='lg:translate-x-[--x]'>
                        <span className='outline-text'>&</span> conquering
                      </span>

                      <br />

                      <div className='flex w-full items-end justify-evenly'>
                        <span>hearts</span>

                        <span className='max-w-sm -translate-y-3.5 text-start text-[.12em]/[1.15] font-normal normal-case tracking-normal text-muted-content max-lg:hidden'>
                          Hey there! I&apos;m Richard an awesome full stack
                          developer — who cares building solid and scalable
                          products with a great user experience.
                        </span>
                      </div>
                    </div>
                  </h1>
                </Text.Title>

                <div className='mx-auto grid max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                  <Text className='col-span-full max-w-lg justify-self-center text-center text-muted-content sm:col-span-4 lg:sr-only'>
                    Hey there! I&apos;m Richard an awesome full stack developer
                    — who cares building solid and scalable products with a
                    great user experience.
                  </Text>

                  <ScrollAnimate.Transform config={animationConfig.rotate}>
                    <SmileIcon className='h-6 w-6 md:-order-1' />
                  </ScrollAnimate.Transform>

                  <Text className='justify-self-end text-xs font-semibold md:col-end-7'>
                    (2024)
                  </Text>
                </div>
              </div>

              <GridPattern className='inset-[--inset] top-[--header-h] rounded-3xl' />
            </div>
          </ScrollAnimate>
      </ScrollAnimate.Transform>
        </ScrollAnimate>

      <ScrollIndicator className='absolute bottom-[min(9.5vw,3.75rem)] right-1/2 max-sm:translate-x-1/2 sm:right-[min(10vw,theme(spacing.16))]' />
    </section>
  );
};

export default HomeViewHeroSection;
