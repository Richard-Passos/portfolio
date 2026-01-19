import { Fragment } from 'react/jsx-runtime';

import { yFullScrollAnim } from '@/animations/scroll';
import {
  Icon,
  Lines,
  Link,
  LocalTime,
  ScrollAnimate,
  Text,
  Title
} from '@/components/atoms';
import { Action } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { serialize } from '@/utils';
import { footerApi, getLocale, pagesApi, personalApi } from '@/utils/actions';

const FooterContentOrganism = async () => {
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

  const legalPages = legalPagesRes.ok ? legalPagesRes.data : [];

  return (
    <>
      <div className='w-9by10 relative z-10 flex grow flex-col'>
        <section className='mb-xl pt-(--section-spacing-md)'>
          <Title
            className='max-w-xs font-semibold'
            component='h3'
            order={6}
          >
            {serialize(footer.cta.subtitle)}
          </Title>

          <Title
            className={`max-w-xs leading-none wrap-break-word uppercase sm:max-w-sm`}
            component='h2'
            order={3}
          >
            {serialize(footer.cta.title)}
          </Title>

          <div className='mt-md gap-xs flex flex-wrap items-center'>
            <Action>{footer.cta.action.label}</Action>

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
          </div>
        </section>

        <div
          className={`gap-lg max-lg:gap-x-sm mt-auto flex max-md:flex-col-reverse`}
        >
          <Logo
            className={`mt-auto h-auto w-full [&_svg]:size-full`}
            style={{
              '--button-hover': 'transparent',
              '--button-padding-x': '0px'
            }}
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

            <section className='mt-sm gap-xs flex max-w-sm flex-col'>
              {serialize(footer.description)}
            </section>

            <Text
              className='mt-md text-dimmed block max-w-sm text-xs'
              component='small'
            >
              {legalPages.map((d) => (
                <Fragment key={d.slug}>
                  <Link
                    className='text-[1em] text-inherit'
                    href={`/${d.slug}`}
                  >
                    {d.label}
                  </Link>
                  .{' '}
                </Fragment>
              ))}
            </Text>
          </section>
        </div>

        <section
          className={`py-sm flex justify-center max-sm:flex-col sm:justify-between`}
        >
          <Text
            className={`max-w-xs text-xs max-sm:text-center`}
            component='small'
          >
            {serialize(footer.copyright)}
          </Text>

          <Text
            className={`max-w-xs text-center text-xs sm:text-end`}
            component='small'
          >
            {serialize(footer.madeBy)}
          </Text>
        </section>
      </div>

      <div
        className={`absolute inset-[15%] flex items-center justify-center overflow-hidden rounded-lg`}
      >
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines
            className={`!text-border top-auto h-screen translate-y-0 [background-size:83.333px_66.666px] opacity-60`}
          />
        </ScrollAnimate>

        <span className='rounded-inherit absolute inset-0 border opacity-60' />
      </div>
    </>
  );
};

export default FooterContentOrganism;
