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
        <section className='my-8 flex flex-wrap items-center gap-2.5'>
          <Action>{footer.action.label}</Action>

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

      <div className='absolute inset-[15%] flex items-center justify-center overflow-hidden rounded-lg'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='text-border! top-auto h-screen translate-y-0 bg-size-[83.333px_66.666px] opacity-60' />
        </ScrollAnimate>

        <span className='rounded-inherit absolute inset-0 border opacity-60' />
      </div>
    </>
  );
};

export default FooterContentOrganism;
