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
      propPoints: ['0vw', '10vw'],
    },
    rotate: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--rotate',
      propPoints: ['0deg', '360deg'],
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.x}>
      <ScrollAnimationTransform config={animationConfig.rotate}>
        <Section
          className={cn(
            'relative flex items-center justify-center pb-10 pt-20',
            className,
          )}
          {...props}
        >
          <Title
            asChild
            className='flex w-[90%] max-w-screen-xl flex-col items-center md:-translate-y-6'
          >
            <h1>
              <span className='translate-x-[--x]'>Richard P.</span>

              <span className='flex w-full items-center justify-center gap-font-blank-space md:justify-between'>
                <span className='shrink-0 translate-x-[calc(var(--x)*-1)]'>
                  full stack
                </span>

                <span
                  aria-hidden
                  className='flex max-w-xs flex-col text-[.125em] font-semibold normal-case leading-normal text-muted-content max-md:hidden'
                >
                  <span className='ml-[2em]'>
                    that&apos;s what I am — solid and
                  </span>
                  <span>scalable products with a great user</span>
                  <span>experience, that&apos;s what I build.</span>
                </span>
              </span>

              <span className='flex translate-x-[--x] items-center gap-[calc(var(--font-blank-space)*3)]'>
                <span>developer</span>

                <span
                  aria-hidden
                  className='relative flex items-center justify-center text-[.2em]'
                >
                  ✦{' '}
                  <TextRing
                    className='rotate-[--rotate] animate-none text-[.5em]'
                    text='made with ❤ made with ❤ '
                  />
                </span>
              </span>

              <span className='mt-4 max-w-xs text-center text-base font-semibold normal-case text-muted-content md:hidden'>
                that&apos;s what I am — solid and scalable products with a great
                user experience, that&apos;s what I build.
              </span>
            </h1>
          </Title>

          <div className='absolute inset-0 bottom-0 -z-10 w-auto bg-main transition-bg md:bottom-[5%]'>
            <span className='absolute bottom-0 left-1/2 h-px w-[90%] max-w-screen-xl -translate-x-1/2 bg-border transition-bg' />
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
        'text-[clamp(1rem,9vw,8rem)] font-bold uppercase leading-none',
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
