import { Lines, ScrollIndicator } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const AboutViewHeroSection = ({ className, ...props }) => {
  const animationConfig = {
    x: {
      useScrollConfig: {
        offset: ['0 1', '0 0'],
      },
      prop: 'x',
      propPoints: ['-25%', '25%'],
    },
    rotate: {
      useScrollConfig: {
        offset: ['0 1', '0 0'],
      },
      prop: 'rotate',
      propPoints: ['45deg', '0deg'],
    },
    y1: {
      useScrollConfig: {
        offset: ['0 1', '0 0'],
      },
      propPoints: ['-5%', '0%'],
    },
    y2: {
      useScrollConfig: {
        offset: ['0 1', '0 0'],
      },
      propPoints: ['0%', '-5%'],
    },
    y3: {
      useScrollConfig: {
        offset: ['0 1', '0 0'],
      },
      propPoints: ['-5%', '0%'],
    },
  };

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center gap-lg pt-[min(28vh,min(theme(spacing.28)))]',
        className,
      )}
      {...props}
    >
      <div className='w-[90%] max-w-screen-lg space-y-sm'>
        <TextTitle
          asChild
          className='title-lg max-sm:text-center'
        >
          <h1>
            Heart conquer
            <br />
            -ing{' '}
            <span className='relative inline w-fit'>
              person{' '}
              <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
                Gotta know more
              </Badge>
            </span>
          </h1>
        </TextTitle>

        <div className='relative grid grid-cols-2 place-items-center'>
          <ScrollAnimationTransform config={animationConfig.x}>
            <div className='relative z-10 col-end-3 flex h-[1em] w-[1em] items-center justify-center rounded-full bg-primary text-[clamp(8rem,12vw,10rem)] transition-bg'>
              <ScrollIndicator
                className='absolute h-full w-full rounded-inherit focus-visible:outline-primary [&>*]:hidden'
                href='#scrollTo'
              />

              <ScrollAnimationTransform config={animationConfig.rotate}>
                <ScrollIndicator
                  className='pointer-events-none h-[.5em] w-[.5em] text-primary-content [&_svg]:h-[.25em] [&_svg]:w-[.25em]'
                  href='#scrollTo'
                  tabIndex={-1}
                />
              </ScrollAnimationTransform>
            </div>
          </ScrollAnimationTransform>
          <span className='absolute h-px w-full bg-border transition-bg' />
        </div>
      </div>

      <ul
        className='grid w-[90%] max-w-screen-xl gap-sm sm:grid-cols-3 md:gap-x-md'
        id='scrollTo'
      >
        {[...Array(3)].map((_, i) => (
          <ScrollAnimationTransform
            config={animationConfig['y' + (i + 1)]}
            key={i}
          >
            <li className='aspect-[1/1.4] w-full rounded-[2rem] bg-blue-500 odd:mt-[20%] odd:bg-red-500 max-sm:!translate-y-0 max-sm:last:hidden' />
          </ScrollAnimationTransform>
        ))}
      </ul>

      <Lines />
      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-30' />
    </section>
  );
};

export default AboutViewHeroSection;
