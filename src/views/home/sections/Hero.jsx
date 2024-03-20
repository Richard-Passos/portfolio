import { GridPattern, ScrollAnimation, ScrollIndicator } from '@/components';
import { Text } from '@/components/ui';
import { SmileIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const HomeViewHeroSection = ({ theme, className, ...props }) => {
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
    rotate: {
      useScrollRes: 'scrollY',
      prop: 'rotate',
      scrollPoints: [0, 400],
      propPoints: ['0deg', '360deg'],
      useTransformConfig: { clamp: false },
    },
  };

  return (
    <ScrollAnimation.Transform config={animationConfig.y}>
      <ScrollAnimation config={animationConfig.opacity}>
        <section
          className={cn(
            'relative sm:[clip-path:inset(0_-50vw_1px_-50vw)]',
            theme,
            className,
          )}
          {...props}
        >
          <div className='relative flex items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))] [--inset:calc(var(--w)*.025)] [--w:100vw] max-2xl:min-h-svh -mt-[--header-h] sm:translate-y-[--y] 2xl:h-screen 2xl:max-h-bounds 2xl:[--w:--max-w]'>
            <div className='w-[calc(90%-var(--inset)*2)] space-y-sm pb-[--inset] sm:grid-cols-3 lg:opacity-[--opacity]'>
              <Text.Title
                aria-label='Turning heads and conquering hearts.'
                asChild
                className='w-full text-center [--x:--spacing-lg] lg:text-[min(9vw,theme(fontSize.9xl))]/[1]'
                variants={{ size: 'xl' }}
              >
                <h1>
                  <div aria-hidden>
                    <span className='lg:-translate-x-[--x]'>Turning heads</span>

                    <br />

                    <span className='lg:translate-x-[--x]'>
                      <span className='outline-text'>&</span> conquering
                    </span>

                    <br />

                    <div className='flex w-full items-end justify-evenly'>
                      <span>hearts</span>

                      <span className='max-w-sm -translate-y-3.5 text-start text-[.12em]/[1.15] font-normal normal-case tracking-normal text-muted-content max-lg:hidden'>
                        Hey there! I'm Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.
                      </span>
                    </div>
                  </div>
                </h1>
              </Text.Title>

              <div className='mx-auto grid max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                <Text className='col-span-full max-w-lg text-center text-muted-content sm:col-span-4 lg:sr-only'>
                  Hey there! I'm Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.
                </Text>

                <ScrollAnimation.Transform config={animationConfig.rotate}>
                  <SmileIcon className='h-6 w-6 md:-order-1' />
                </ScrollAnimation.Transform>

                <Text className='justify-self-end text-xs font-semibold md:col-end-7'>
                  (2024)
                </Text>
              </div>
            </div>

            <GridPattern className='inset-[--inset] top-[--header-h] rounded-3xl' />
          </div>

          <ScrollIndicator className='absolute bottom-[min(9.5vw,3.75rem)] right-1/2 max-sm:translate-x-1/2 sm:right-[min(10vw,theme(spacing.16))]' />
        </section>
      </ScrollAnimation>
    </ScrollAnimation.Transform>
  );
};

export default HomeViewHeroSection;
