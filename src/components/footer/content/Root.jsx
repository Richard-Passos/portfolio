import { globalsApi } from '@/api';
import { HeaderChangeTheme } from '@/components/header';
import { cn } from '@/utils';

import BackTop from '../../back-top';
import { MagneticButton } from '../../button';
import GridPattern from '../../grid-pattern';
import { ScrollAnimate } from '../../scroll-animate';
import SocialNav from '../../social-nav';
import { Logo, Text } from '../../ui';
import { ArrowUpIcon, HandHornsIcon, HeartIcon } from '../../ui/icon/icons';

const SCROLL_OFFSET = ['0 1', '1 1'];

const FooterContent = async ({ theme, className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  const animationConfig = {
    y: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--smooth-y',
      propPoints: [-0.4, 0],
    },
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: '--x',
      propPoints: ['0%', '70%'],
    },
  };

  return (
    <HeaderChangeTheme theme={theme}>
      <ScrollAnimate config={animationConfig.x}>
        <div
          className={cn(
            'flex w-9/10 max-w-screen-xl flex-col [--h:100vh] max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds 2xl:[--h:--max-h]',
            theme,
            className,
          )}
          {...props}
        >
          <ScrollAnimate config={animationConfig.y}>
            <div className='relative z-10 flex flex-col gap-1.5 py-md [--y:calc(var(--smooth-y)*var(--h))] sm:translate-y-[--y] dark:border-border/20'>
              <Text className='text-muted-content'>
                is your great ideas ready to fly?
              </Text>

              <Text.Title variants={{ size: 'xl' }}>
                <HandHornsIcon className='inline-block h-[.65em] w-[.65em]' />{' '}
                Let&apos;s work <br /> together
              </Text.Title>

              <div className='absolute bottom-0 left-1/2 translate-x-[--x] translate-y-1/2'>
                <MagneticButton
                  aria-label='Go to contact page'
                  asLink
                  href='/contact'
                  variants={{ size: 'lg' }}
                >
                  <ArrowUpIcon className='rotate-45' />
                </MagneticButton>
              </div>

              <span className='absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 border-b border-border/60 bg-main shadow-[0_25px_35px_-15px] shadow-[hsl(--content/.2)]' />
            </div>
          </ScrollAnimate>

          <ScrollAnimate config={animationConfig.y}>
            <div className='relative flex grow justify-between gap-md py-md [--y:calc(var(--smooth-y)*var(--h))] max-sm:flex-col sm:translate-y-[--y] sm:items-end'>
              <div className='flex flex-col items-start'>
                <Logo className='mb-1' />

                <Text className='mb-4 max-w-52 text-sm font-medium'>
                  An great {personalInfo.job?.toLowerCase()} to fit your needs.
                </Text>

                <section className='flex flex-col gap-1.5 sm:mb-md'>
                  <Text.Small className='text-xs'>
                    Made with{' '}
                    <HeartIcon className='inline-block h-3.5 w-3.5 fill-red-500' />{' '}
                    by Richard
                  </Text.Small>

                  <Text.Small className='text-xs'>
                    &copy; 2024 Richard Passos
                  </Text.Small>
                </section>

                <BackTop className='max-sm:hidden' />
              </div>

              <SocialNav>
                {personalInfo.socials?.map((data, i) => (
                  <SocialNav.Item
                    index={i}
                    key={data.href}
                    data={data}
                  />
                ))}
              </SocialNav>

              <Logo
                aria-hidden
                tabIndex={-1}
                className='pointer-events-none absolute bottom-0 left-1/2 -z-10 h-auto w-[calc(var(--w)*.95)] -translate-x-1/2 translate-y-1/2 touch-none select-none p-0 text-muted [--w:100vw] 2xl:[--w:--max-w]'
              />

              <GridPattern className='pointer-events-none inset-x-auto -top-px left-1/2 w-screen -translate-x-1/2' />
            </div>
          </ScrollAnimate>
        </div>
      </ScrollAnimate>
    </HeaderChangeTheme>
  );
};

export default FooterContent;
