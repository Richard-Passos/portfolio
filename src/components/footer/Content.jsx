import { globalsApi } from '@/api';
import { cn } from '@/utils';

import Button from '../button';
import GridPattern from '../grid-pattern';
import { ScrollAnimate } from '../scroll-animate';
import Section from '../section';
import SocialNav from '../social-nav';
import { Icon, Link, Logo, Text } from '../ui';
import { ScrollToLink } from '../link';

const SCROLL_OFFSET = ['0 1', '1 1'],
  ANIMATION_CONFIG = {
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

const FooterContent = ({ className, data = {}, ...props }) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.x}>
      <Section
        hasTransition={false}
        className={cn(
          'flex w-9/10 max-w-screen-xl flex-col overflow-y-clip py-0 [--h:100vh] 2xl:[--h:--max-h]',
          className,
        )}
        {...props}
      >
        <FooterContentCta data={data.cta} />

        <FooterContentPersonal data={data.personal} />
      </Section>
    </ScrollAnimate>
  );
};

const FooterContentCta = ({ className, data = {}, ...props }) => {
  const { action = {} } = data;

  return (
    <ScrollAnimate config={ANIMATION_CONFIG.y}>
      <div
        className={cn(
          'relative z-10 py-md [--y:calc(var(--smooth-y)*var(--h))] sm:translate-y-[--y] dark:border-border/20',
          className,
        )}
        {...props}
      >
        <Text className='text-muted-content first-letter:uppercase'>
          {data.subtitle}
        </Text>

        <Text.Title
          variants={{ size: 'xl' }}
          className='mt-1.5 whitespace-pre-line'
        >
          {data.title}
        </Text.Title>

        <div className='absolute bottom-0 left-1/2 translate-x-[--x] translate-y-1/2'>
          <Button.Magnetic {...action.data}>
            <Icon {...action.icon} />
          </Button.Magnetic>
        </div>

        <span className='dark:box-border/20 absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 border-b border-border/60 bg-main shadow-[0_25px_35px_-15px] shadow-[hsl(var(--content)/.025)] dark:shadow-none' />
      </div>
    </ScrollAnimate>
  );
};

const FooterContentPersonal = async ({ data = {}, className, ...props }) => {
  const personalInfo =
      (await globalsApi.getOne('personal-info')).data?.data || {},
    { action = {} } = data;

  return (
    <ScrollAnimate config={ANIMATION_CONFIG.y}>
      <div
        className={cn(
          'relative flex grow justify-between gap-md py-md [--y:calc(var(--smooth-y)*var(--h))] max-sm:flex-col sm:translate-y-[--y] sm:items-end',
          className,
        )}
        {...props}
      >
        <div className='flex flex-col items-start'>
          <Logo />

          <Text className='mt-1 max-w-52 text-sm font-medium'>
            {personalInfo.description}
          </Text>

          <section className='mt-4 flex flex-col gap-1.5'>
            {data.smalls?.map((data, i) => {
              // TODO fix with rich text
              const aRegex = /(.*)<a>(.*)<\/a>(.*)/g;

              const hasA = aRegex.test(data.label);

              const A = (
                <>
                  {data.label.replace(aRegex, '$1')}{' '}
                  <Link href={data.href}>
                    {data.label.replace(aRegex, '$2')}
                  </Link>{' '}
                  {data.label.replace(aRegex, '$3')}{' '}
                </>
              );

              return (
                <Text.Small
                  key={i}
                  className='text-xs'
                >
                  {hasA ? A : data.label}
                </Text.Small>
              );
            })}
          </section>

          <ScrollToLink href='start' asChild>
            <Button
              className='mt-md no-underline text-xs font-bold uppercase max-sm:hidden'
              {...action.data}
            >
              <Button.Icon animation={action.animation}>
                <Icon {...action.icon} />
              </Button.Icon>

              {action.data?.label}
            </Button>
          </ScrollToLink>
        </div>

        <section>
          <Text.Subtitle className='text-xs uppercase text-muted-content'>
            {data.socialsTitle}
          </Text.Subtitle>

          <SocialNav className='mt-4'>
            {personalInfo.socials?.map((data, i) => (
              <SocialNav.Item
                idx={i}
                key={data.href}
                data={data}
              />
            ))}
          </SocialNav>
        </section>

        <Logo
          aria-hidden
          tabIndex={-1}
          className='pointer-events-none absolute bottom-0 left-1/2 -z-10 h-auto w-[calc(var(--w)*.95)] -translate-x-1/2 translate-y-1/2 touch-none select-none p-0 text-muted [--w:100vw] 2xl:[--w:--max-w]'
        />

        <GridPattern className='-top-px left-1/2 right-auto w-screen -translate-x-1/2' />
      </div>
    </ScrollAnimate>
  );
};

export default FooterContent;
