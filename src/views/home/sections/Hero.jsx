import { ScrollIndicator, Section } from '@/components';
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
      propPoints: [0, 1],
    },
    y: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      propPoints: ['0%', '100%'],
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.x}>
      <Section
        className={cn(
          'flex flex-col items-center pb-[calc(var(--padding)*2)] pt-[--padding] [--padding:min(28vh,theme(spacing.28))]',
          className,
        )}
        {...props}
      >
        <div className='relative flex w-[90%] max-w-screen-xl flex-col gap-sm max-lg:items-center'>
          <Text.Title
            asChild
            className='w-full text-center text-[13vw]/[1] font-bold uppercase sm:text-[min(10vw,7rem)]/[1]'
          >
            <h1>
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

                <span
                  aria-hidden
                  className='max-w-sm -translate-y-3 text-start text-[.14em]/[1.15] font-medium normal-case max-lg:hidden'
                >
                  Hey there! I&apos;m Richard an awesome full stack developer —
                  who cares building solid and scalable products with a great
                  user experience.
                </span>
              </div>
            </h1>
          </Text.Title>

          <Text className='max-w-lg text-center font-medium lg:sr-only'>
            Hey there! I&apos;m Richard an awesome full stack developer — who
            cares building solid and scalable products with a great user
            experience.
          </Text>
        </div>

        <div className='pointer-events-none absolute inset-0 -z-50 -translate-y-36 overflow-hidden'>
          <ScrollIndicator
            className='pointer-events-auto absolute bottom-12 right-12 z-10'
            href='#scrollTo'
          />

          <div className='absolute inset-0 bg-main transition-bg'>
            <span className='absolute inset-0 bg-[linear-gradient(theme(colors.border)_1px,_transparent_1px),_linear-gradient(to_right,_theme(colors.border)_1px,__transparent_1px_1px)] bg-center opacity-50 [background-size:25px_25px] [mask-image:radial-gradient(#000,transparent_75%)] dark:opacity-20' />

            <span className='absolute bottom-0 h-px w-full bg-border opacity-50 transition-bg dark:opacity-20' />
          </div>
        </div>
      </Section>
    </ScrollAnimationTransform>
  );
};

export default HomeHeroSection;
