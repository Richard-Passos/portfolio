import { Fragment } from 'react/jsx-runtime';

import {
  Icon,
  Lines,
  Link,
  LocalTime,
  ScrollAnimate,
  Text,
  Title
} from '@/components/atoms';
import Section, { SectionProps } from '@/components/layout/wrappers/Section';
import { Action } from '@/components/molecules';
import { yFullScrollAnim } from '@/components/motion/ScrollAnimate/animations/scroll';
import Logo from '@/components/navigation/Logo';
import { LegalPage } from '@/types';
import { MergeProps } from '@/types';
import { cn, entries } from '@/utils';
import { serialize } from '@/utils';
import { footerApi, getLocale, pagesApi, personalApi } from '@/utils/actions';

type FooterOwnProps = Pick<Partial<SectionProps>, 'theme'>;

type FooterProps = MergeProps<FooterOwnProps, SectionProps>;

const Footer = async ({ className, ...props }: FooterProps) => {
  const locale = await getLocale();

  const [footerRes, personalRes, legalPagesRes] = await Promise.all([
    footerApi.get({ locale }),
    personalApi.get({ locale }),
    pagesApi.get({ locale, type: 'legal' })
  ]);

  if (!footerRes.ok) return null;

  const footer = footerRes.data,
    personal = personalRes.ok ? personalRes.data : undefined;

  const socials = personal?.socials;

  const legalPages = legalPagesRes.ok
    ? (legalPagesRes.data as Record<string, LegalPage>)
    : undefined;

  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      className={cn('max-w-bounds py-0', className)}
      component='footer'
      theme='light'
      {...props}
    >
      <div className='w-9by10 relative z-10 flex grow flex-col'>
        <section className='my-8 flex flex-wrap items-center gap-2.5'>
          <Action
            color='red'
            as='link'
            href='/contact'
          >
            {footer.action.label}
          </Action>

          {socials?.map((data) => (
            <Action
              aria-label={data.label}
              as='link'
              href={data.href}
              isIconOnly
              key={data.href}
              variant='default'
            >
              <Icon
                className='absolute size-2/3'
                src={data.icon}
              />
            </Action>
          ))}
        </section>

        <div className='mt-auto flex gap-5 max-lg:gap-x-3 max-md:flex-col-reverse'>
          <Logo
            className='mt-auto h-auto w-full'
            variant='secondary'
          />

          <section>
            <Title
              component='p'
              order={6}
            >
              {personal?.location.country}
              &nbsp;
              {footer.locationSeparator}
              &nbsp;
              {personal?.location.state}
              &nbsp;
              {footer.locationSeparator}
              &nbsp;
              <LocalTime />
            </Title>

            <section className='mt-3 flex max-w-sm flex-col gap-2.5'>
              {serialize(footer.description)}
            </section>

            <Text
              className='text-dimmed mt-4 block max-w-sm text-xs'
              component='small'
            >
              {entries(legalPages).map(([key, d]) => (
                <Fragment key={key}>
                  <Link
                    className='text-[1em] text-inherit'
                    href={`/legal/${key}`}
                  >
                    {d.label}
                  </Link>
                  .{' '}
                </Fragment>
              ))}
            </Text>
          </section>
        </div>

        <section className='flex justify-center py-3 max-sm:flex-col sm:justify-between'>
          <Text
            className='max-w-xs text-xs max-sm:text-center'
            component='small'
          >
            {serialize(footer.copyright)}
          </Text>

          <Text
            className='max-w-xs text-center text-xs sm:text-end'
            component='small'
          >
            {serialize(footer.madeBy)}
          </Text>
        </section>
      </div>

      <div className='border-gray-3 dark:border-dark-4 absolute inset-[15%] flex items-center justify-center overflow-hidden rounded-lg border'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='text-gray-3 dark:text-dark-4 h-full translate-y-0 bg-size-[83.333px_66.666px]' />
        </ScrollAnimate>
      </div>
    </Section>
  );
};

export { Footer };
export type { FooterProps };
