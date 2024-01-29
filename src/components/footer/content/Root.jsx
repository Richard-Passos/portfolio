import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import BackTop from '../../back-top';
import { MagneticButton } from '../../button';
import GridPattern from '../../grid-pattern';
import { ScrollAnimationTransform } from '../../scroll-animation';
import SocialNav from '../../social-nav';
import { Logo, Text } from '../../ui';
import { CursorHover } from '../../ui/cursor';
import { ArrowUpIcon, HandHornsIcon, HeartIcon } from '../../ui/icon/icons';
import { FOOTER_CONTENT_THEME } from '../Root';

const ANIMATION_OFFSET = ['0 1', '.95 1'];

const FooterContent = ({ className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--smooth-y',
      propPoints: [-0.4, 0],
    },
    x: {
      useScrollConfig: {
        offset: ANIMATION_OFFSET,
      },
      prop: '--x',
      propPoints: ['0%', '27.5%'],
    },
  };

  return (
    <CursorHover variant={{ theme: FOOTER_CONTENT_THEME }}>
      <ScrollAnimationTransform config={animationConfig.y}>
        <ScrollAnimationTransform config={animationConfig.x}>
          <div
            className={cn(
              'flex w-[90%] max-w-screen-xl flex-col pt-[--padding] text-content [--h:100vh] [--padding:min(20vh,theme(spacing.20))] max-2xl:min-h-screen sm:[--y:calc(var(--smooth-y)*var(--h))] 2xl:h-screen 2xl:max-h-bounds 2xl:[--h:--max-h]',
              FOOTER_CONTENT_THEME,
              className,
            )}
            {...props}
          >
            <div className='relative z-10 flex flex-col gap-1.5 pb-12 sm:translate-y-[--y]'>
              <Text className='text-muted-content'>ready to go wild?</Text>

              <Text.Title className='text-[12vw]/[1] font-bold uppercase sm:text-[min(10vw,7rem)]/[1]'>
                <HandHornsIcon className='my-auto inline-block h-[.65em] w-[.65em]' />{' '}
                Let&apos;s work <br /> together
              </Text.Title>

              <div className='absolute bottom-0 left-1/2 translate-x-[--x] translate-y-1/2 sm:translate-x-[calc(var(--x)*4)]'>
                <MagneticButton
                  href='/contact'
                  isLink
                  variants={{ size: 'lg' }}
                >
                  <ArrowUpIcon className='rotate-45' />
                </MagneticButton>
              </div>
            </div>

            <div className='relative flex grow items-center overflow-y-clip border-t py-[--padding] sm:translate-y-[--y]'>
              <div className='flex w-full justify-between gap-md p-5 max-sm:flex-col sm:translate-y-[--y]'>
                <div className='flex flex-col items-start gap-4'>
                  <Logo className='w-fit' />

                  <Text className='-mt-2 max-w-[14rem] text-sm font-medium'>
                    An awesome {personalInfo.job.toLowerCase()} to fit your
                    needs.
                  </Text>

                  <section className='flex flex-col gap-1.5'>
                    <Text.Small className='text-xs'>
                      Made with{' '}
                      <HeartIcon className='inline-block h-3.5 w-3.5 fill-red-500' />{' '}
                      by Richard
                    </Text.Small>

                    <Text.Small className='text-xs'>
                      &copy; 2024 Richard Passos
                    </Text.Small>
                  </section>

                  <BackTop className='mt-auto -translate-x-6 max-sm:hidden' />
                </div>

                <SocialNav>
                  {personalInfo.socials.map((social, i) => (
                    <SocialNav.Item
                      index={i}
                      key={social.href}
                      {...social}
                    />
                  ))}
                </SocialNav>
              </div>

              <GridPattern
                className='-top-px bottom-[--padding] -z-10 sm:translate-y-[--y]'
                rows={4}
              />
            </div>
          </div>
        </ScrollAnimationTransform>
      </ScrollAnimationTransform>
    </CursorHover>
  );
};

export default FooterContent;
