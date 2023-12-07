import { InfinityScroll, Section, TextRing } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_OFFSET = ['0 0', '1 0'];

const HomeHeroSection = ({ className, ...props }) => {
  const animationConfig = {
    x: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--x',
      propPoints: ['0vw', '-10vw'],
    },
    rotate: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['0deg', '-360deg'],
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.x}>
      <ScrollAnimationTransform config={animationConfig.rotate}>
        <Section
          className={cn(
            'relative flex flex-col items-center justify-center gap-4 pb-14 pt-28',
            className,
          )}
          {...props}
        >
          <div className='flex w-[90%] max-w-screen-xl flex-col items-center gap-4 pb-32'>
            <Title
              asChild
              className='flex w-full flex-col'
            >
              <h1>
                <span className='translate-x-[--x]'>Richard P.</span>

                <span className='flex w-full items-center justify-between gap-font-blank-space'>
                  <span
                    aria-hidden
                    className='flex max-w-xs flex-col text-base font-semibold normal-case text-muted-content max-lg:hidden'
                  >
                    <span className='ml-[2em]'>
                      that&apos;s what I am — solid and
                    </span>
                    <span>scalable products with a great user</span>
                    <span>experience, that&apos;s what I build.</span>
                  </span>

                  <span className='shrink-0 translate-x-[calc(var(--x)*-1)]'>
                    full stack
                  </span>
                </span>

                <span className='flex translate-x-[--x] items-center gap-[calc(var(--font-blank-space)*3)]'>
                  <span>developer</span>

                  <span
                    aria-hidden
                    className='relative flex items-center justify-center text-[.15em] text-content max-sm:hidden'
                  >
                    ✦{' '}
                    <TextRing
                      className='rotate-[--rotate] animate-none text-[.65em]'
                      text='made with ❤ made with ❤ '
                    />
                  </span>
                </span>
              </h1>
            </Title>

            <span className='max-w-xs text-center font-semibold text-muted-content lg:sr-only'>
              that&apos;s what I am — solid and scalable products with a great
              user experience, that&apos;s what I build.
            </span>
          </div>

          <div className='absolute inset-0 bottom-0 -z-10 w-auto bg-main transition-bg md:bottom-[5%]'>
            <span className='absolute bottom-0 left-1/2 h-px w-[90%] max-w-screen-xl -translate-x-1/2 bg-border opacity-50 transition-bg dark:opacity-20' />
          </div>
        </Section>
      </ScrollAnimationTransform>
    </ScrollAnimationTransform>
  );
};

const Title = ({ className, ...props }) => {
  return (
    <Text.Title
      className={cn(
        'text-[14vw] uppercase leading-none sm:text-[min(10vw,8.5rem)]',
        className,
      )}
      {...props}
    />
  );
};

const List = ({ className, content, ...props }) => {
  return (
    <div
      className={cn(
        'w-full max-w-md overflow-hidden rounded-full text-[clamp(1rem,7.5vw,6rem)]',
        className,
      )}
      {...props}
    >
      <InfinityScroll
        as='ul'
        className='bg-content py-4 text-main transition-colors [--duration:25s] [--gap:--font-blank-space] hover:paused'
      >
        {content.map((content, i) => (
          <li
            key={i}
            role={i % 2 === 0 ? 'separator' : 'listitem'}
          >
            {content}
          </li>
        ))}
      </InfinityScroll>
    </div>
  );
};

export default HomeHeroSection;
