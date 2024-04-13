import {
  GridPattern,
  ScrollAnimate,
  ScrollIndicator,
  Section,
} from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
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

const HomeViewHeroSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] min-h-svh overflow-y-clip py-0 [--inset:calc(var(--w)*.025)] [--w:100vw] *:*:last:*:hidden 2xl:[--w:--max-w]',
        className,
      )}
      {...props}
    >
      <ScrollAnimate.Transform config={ANIMATION_CONFIG.y}>
        <ScrollAnimate config={ANIMATION_CONFIG.scale}>
          <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
            <div className='relative flex min-h-[inherit] items-center justify-center px-[--inset] py-lg max-sm:!translate-y-0'>
              <div className='w-9/10 pb-[--inset] pt-[--header-h] sm:scale-[--scale] sm:opacity-[--opacity]'>
                <Text.Title
                  aria-label={data.title?.replace(/<b>(.*)<\/b>/, '$1')}
                  asChild
                  className='flex w-full flex-col items-center text-center lg:px-sm'
                  variants={{ size: 'xl' }}
                >
                  <h1>
                    {data.title?.split(`\n`).map((w, i, arr) => {
                      // TODO fix with rich text
                      const boldRegex = /(.*)<b>(.*)<\/b>(.*)/g;

                      const hasBold = boldRegex.test(w);

                      const Bold = (
                        <>
                          {w.replace(boldRegex, '$1')}{' '}
                          <span className='outline-text'>
                            {w.replace(boldRegex, '$2')}
                          </span>{' '}
                          {w.replace(boldRegex, '$3')}
                        </>
                      );

                      const content = hasBold ? Bold : w;

                      return i !== arr.length - 1 ? (
                        <span
                          className='lg:first:mr-auto lg:[&:nth-child(2)]:ml-auto'
                          key={i}
                        >
                          {content}
                        </span>
                      ) : (
                        <span
                          key={i}
                          className='flex w-full items-end justify-evenly'
                        >
                          {content}

                          <span className='max-w-sm -translate-y-3.5 text-start text-[.12em]/tight font-normal normal-case tracking-normal text-muted-content first-letter:uppercase max-lg:hidden'>
                            {data.description}
                          </span>
                        </span>
                      );
                    })}
                  </h1>
                </Text.Title>

                <div className='mx-auto mt-sm grid max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                  <Text className='col-span-full max-w-lg justify-self-center text-center text-muted-content md:col-span-4 lg:sr-only'>
                    {data.description}
                  </Text>

                  <ScrollAnimate.Transform config={ANIMATION_CONFIG.rotate}>
                   <div className='size-6 md:-order-1'>
                   <Icon className='size-full' {...data.icon} />
                   </div>
                  </ScrollAnimate.Transform>

                  <Text className='justify-self-end text-xs font-semibold lg:col-end-7'>
                    {data.text}
                  </Text>
                </div>
              </div>

              <GridPattern className='inset-[--inset] top-[--header-h] rounded-lg' />
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </ScrollAnimate.Transform>

      <ScrollIndicator className='absolute bottom-md right-1/2 max-sm:translate-x-1/2 max-sm:translate-y-1/2 sm:bottom-[--inset] sm:right-[--inset]' />
    </Section>
  );
};

export default HomeViewHeroSection;
