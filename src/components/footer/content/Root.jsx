import BackTop from '@/components/back-top';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import { MagneticButton } from '../../button';
import { ScrollAnimationTransform } from '../../scroll-animation';
import SocialNav from '../../social-nav';
import { Logo, Text } from '../../ui';

const ANIMATION_OFFSET = ['0 1', '.95 1'];

const FooterContent = ({ className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      propPoints: ['-60%', '0%'],
    },
    linkY: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--link-y',
      propPoints: ['100%', '0%'],
    },
  };

  return (
    <ScrollAnimationTransform
      className={cn(
        'flex w-full flex-col items-center justify-between gap-12 py-8 text-content max-2xl:min-h-screen max-sm:!translate-y-0 2xl:h-screen 2xl:max-h-bounds',
        className,
      )}
      config={animationConfig.y}
      {...props}
    >
      <ScrollAnimationTransform config={animationConfig.linkY}>
        <div>
          <Logo className='ml-12 mr-auto' />

          <div className='relative flex w-[90%] max-w-screen-xl flex-col items-center gap-4'>
            <Text className='text-center text-muted-content'>
              let me take you further than you&apos;ve ever been
            </Text>

            <Text.Title className='text-center text-[14vw] uppercase leading-none sm:text-[min(10vw,8rem)]'>
              Let&apos;s work together!
            </Text.Title>

            <div className='translate-y-[--link-y]'>
              <MagneticButton
                className='-mt-[50%] uppercase'
                href='/contact'
                isLink
                variants={{ size: 'lg' }}
              >
                Get in <br /> touch
              </MagneticButton>
            </div>
          </div>

          <section className='relative flex w-full flex-col px-12'>
            <div className='relative flex w-full max-sm:flex-col max-sm:items-start'>
              <BackTop className='mb-4 max-sm:hidden' />

              <div className='bottom-0 right-0 mx-auto overflow-y-clip sm:absolute'>
                <SocialNav>
                  {personalInfo.socials.map((socialMedia, i) => (
                    <SocialNav.Item
                      index={i}
                      key={socialMedia.href}
                      {...socialMedia}
                    />
                  ))}
                </SocialNav>
              </div>
            </div>

            <div className='flex items-center justify-between gap-x-6 gap-y-1.5 border-t pt-3 max-sm:flex-col'>
              <Text.Small className='group text-xs text-content'>
                <span className='group-hover:rotate-[360deg] group-hover:transition-transform group-hover:duration-500 group-hover:ease-backOut'>
                  &copy;
                </span>{' '}
                2023 Richard Passos
              </Text.Small>

              <Text.Small className='group text-xs text-content'>
                Made with{' '}
                <span className='text-red-500 transition-transform group-hover:-translate-y-1/4'>
                  ❤
                </span>{' '}
                by Richard
              </Text.Small>
            </div>
          </section>
        </div>
      </ScrollAnimationTransform>
    </ScrollAnimationTransform>
  );
};

export default FooterContent;
