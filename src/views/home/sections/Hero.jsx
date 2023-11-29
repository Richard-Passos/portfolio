import { InfinityScroll, Section } from '@/components';
import ScrollAnimation from '@/components/scroll-animation';
import { scrollSmoothConfig } from '@/components/smooth-scroll';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_OFFSET = ['0 0', '0.5 0'];

const HomeHeroSection = ({ className, ...props }) => {
  const animationConfig = {
      useScrollConfig: { offset: ANIMATION_OFFSET },
      useScrollRes: 'scrollYProgress',
      prop: '--h',
      scrollPoints: [0, 1],
      propPoints: [0.95, 0.5],
    },
    animationSmoothConfig = {
      scroll: scrollSmoothConfig,
    };

  return (
    <ScrollAnimation
      config={animationConfig}
      smoothConfig={animationSmoothConfig}
    >
      <Section
        className={cn(
          'relative isolate -mb-[(var(--height)_-_var(--height)*var(--h))] flex items-center justify-center overflow-hidden bg-main transition-bg [--height:100vh] 2xl:[--height:--max-h]',
          className,
        )}
        {...props}
      >
        <div className='relative w-full max-w-screen-xl'>
          <Title
            asChild
            className='flex w-full flex-col'
          >
            <h1>
              <div className='flex items-center justify-between'>
                <div className='shrink-0'>
                  <div className='w-full max-w-md overflow-hidden rounded-full border'>
                    <InfinityScroll
                      as='ul'
                      className='bg-content text-main transition-colors [--duration:25s] [--gap:--font-blank-space] hover:paused'
                    >
                      {[
                        '•',
                        'full stack',
                        '•',
                        'front end',
                        '•',
                        'back end',
                      ].map((content, i) => (
                        <li
                          key={i}
                          role={i % 2 === 0 ? 'separator' : 'listitem'}
                        >
                          {content}
                        </li>
                      ))}
                    </InfinityScroll>
                  </div>
                  developer
                </div>

                <span className='text-base font-semibold lowercase'>
                  — that&apos;s what I build —
                </span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-base font-semibold lowercase'>
                  — that&apos;s what I am —
                </span>

                <div className='shrink-0'>
                  <div className='w-full max-w-md overflow-hidden rounded-full border'>
                    <InfinityScroll
                      as='ul'
                      className='bg-content text-main transition-colors [--duration:25s] [--gap:--font-blank-space] hover:paused'
                    >
                      {['•', 'solid', '•', 'scalable', '•', 'accesible'].map(
                        (content, i) => (
                          <li
                            key={i}
                            role={i % 2 === 0 ? 'separator' : 'listitem'}
                          >
                            {content}
                          </li>
                        ),
                      )}
                    </InfinityScroll>
                  </div>
                  products
                </div>
              </div>
            </h1>
          </Title>
        </div>
      </Section>
    </ScrollAnimation>
  );
};

const Title = ({ className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-9xl font-bold uppercase', className)}
      {...props}
    />
  );
};

export default HomeHeroSection;
