import { globalsApi } from '@/api';
import {
  GridPattern,
  ScrollAnimate,
  ScrollIndicator,
  Section,
} from '@/components';
import { Text } from '@/components/ui';
import { SmileIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const WorkViewHeroSection = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  const animationConfig = {
    y: {
      scrollConfig: {
        offset: ['0 0', '1 0'],
      },
      prop: 'y',
      propPoints: ['0%', '75%'],
    },
    scale: {
      scrollConfig: {
        offset: ['0 0', '1 0'],
      },
      prop: '--scale',
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
    <Section
      hasTransition={false}
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] overflow-y-clip py-0 *:*:last:*:hidden !min-h-0',
        className,
      )}
      {...props}
    >
      <ScrollAnimate.Transform config={animationConfig.y}>
        <ScrollAnimate config={animationConfig.scale}>
          <ScrollAnimate config={animationConfig.opacity}>
            <div className='relative flex items-center justify-center px-[--inset] pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))] [--inset:calc(var(--w)*.025)] [--w:100vw] min-h-svh 2xl:min-h-bounds max-sm:!translate-y-0 2xl:[--w:--max-w]'>
              <div className='w-9/10 pb-[--inset] sm:scale-[--scale] sm:opacity-[--opacity]'>
                <Text.Title
                  aria-label='Turning heads and conquering hearts.'
                  asChild
                  className='mb-sm w-full text-center [--x:--spacing-lg] lg:text-[min(9vw,theme(fontSize.9xl))]/none'
                  variants={{ size: 'xl' }}
                >
                  <h1>
                    <div aria-hidden>
                      <span className='lg:-translate-x-[--x]'>
                        Beyond code,
                      </span>

                      <br />

                      <span className='lg:translate-x-[--x]'>
                        boundaries <span className='outline-text'>&</span>
                      </span>

                      <br />

                      <div className='flex w-full items-end justify-evenly'>
                        <span>results</span>

                        <span className='max-w-sm -translate-y-3.5 text-start text-[.12em]/[1.15] font-normal normal-case tracking-normal text-muted-content max-lg:hidden'>
                          Helping brands achieve digital prominence. I bring a
                          passion for cutting-edge technology and a commitment
                          to transforming ideas into impactful, user-centric
                          solutions.
                        </span>
                      </div>
                    </div>
                  </h1>
                </Text.Title>

                <div className='mx-auto grid max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                  <Text className='col-span-full max-w-lg justify-self-center text-center text-muted-content sm:col-span-4 lg:sr-only'>
                    Helping brands achieve digital prominence. I bring a passion
                    for cutting-edge technology and a commitment to transforming
                    ideas into impactful, user-centric solutions.
                  </Text>

                  <Text className='text-xs font-semibold md:-order-1'>
                    {personalInfo.availability}
                  </Text>

                  <ScrollAnimate.Transform config={animationConfig.rotate}>
                    <SmileIcon className='size-6 justify-self-end md:col-end-7' />
                  </ScrollAnimate.Transform>
                </div>
              </div>

              <GridPattern className='inset-[--inset] top-[--header-h] rounded-3xl' />
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </ScrollAnimate.Transform>

      <ScrollIndicator className='absolute bottom-[min(9.5vw,3.75rem)] right-1/2 max-sm:translate-x-1/2 sm:right-[min(10vw,theme(spacing.16))]' />
    </Section>
  );
};

export default WorkViewHeroSection;
