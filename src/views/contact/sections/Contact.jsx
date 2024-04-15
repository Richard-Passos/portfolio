import { globalsApi } from '@/api';
import { HorizontalScroll, LocalTime, Section, SocialNav } from '@/components';
import { Icon, Link, Text } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { cn, normKey } from '@/utils';

import Form from '../form';

const ContactViewContactSection = async ({
  className,
  data = {},
  ...props
}) => {
  const personalInfo =
    (await globalsApi.getOne('personal-info')).data?.data || {};

  const { info = {}, form = {} } = data;

  const infoData = {
    availability: personalInfo.availability,
    localTime: <LocalTime key='local-time' />,
    location: `${personalInfo.location?.country}, ${personalInfo.location?.state}`,
    buyCoffee: (
      <Link
        key='buy-coffee'
        href={personalInfo.buyCoffee?.href}
      >
        {personalInfo.buyCoffee?.label}
      </Link>
    ),
  };

  return (
    <Section
      className={cn(
        'flex items-center justify-center gap-x-sm gap-y-md py-[calc(var(--py)*1.5)] max-md:flex-col sm:w-9/10',
        className,
      )}
      {...props}
    >
      <div className='theme-primary grow basis-48 rounded-lg bg-main p-sm shadow-md max-md:w-9/10 md:max-w-56 dark:shadow-none'>
        <div className='relative flex justify-center overflow-hidden border-t'>
          {info.icons?.map((icon) => (
            <div
              className='aspect-square w-1/3 first:-translate-x-1/2 last:translate-x-1/2 odd:-mt-[15%] even:absolute even:top-0 even:-translate-y-[70%]'
              key={icon.src}
            >
              <Icon
                className='size-full text-muted'
                {...icon}
              />
            </div>
          ))}
        </div>

        <ul className='mt-sm grid gap-xs sm:max-md:grid-cols-2'>
          {info.items?.map((data) => (
            <li
              className='rounded-sm border bg-main p-4'
              key={data.title}
            >
              <Text.Title className='text-xs uppercase text-muted-content'>
                {data.title}
              </Text.Title>

              <Text className='mt-0.5 text-sm first-letter:uppercase'>
                {infoData[normKey(data.slug)]}
              </Text>
            </li>
          ))}
        </ul>

        <nav className='mt-sm grid gap-2 sm:max-md:grid-cols-3'>
          {personalInfo.socials?.map((data, i) => (
            <SocialNav.Item
              idx={i}
              key={data.href}
              data={data}
            />
          ))}
        </nav>
      </div>

      <div className='w-full rounded-lg border bg-main p-sm shadow-md md:w-fit lg:p-[calc(theme(spacing.sm)*1.25)] dark:shadow-none'>
        <section>
          <Text.Title className='text-base font-medium'>
            <span className='first-letter:uppercase'>{form.title}:</span>{' '}
            <span className='ml-2 rounded-sm bg-muted/75 px-3 py-1'>
              {personalInfo.email}
            </span>
          </Text.Title>

          <Form
            className='mt-6'
            data={form}
          />
        </section>

        <section className='mt-md'>
          <Text.Title className='text-sm font-medium text-muted-content first-letter:uppercase'>
            {form.subtitle}:
          </Text.Title>

          <Link
            className='group relative mt-2 h-14 w-full gap-sm break-all rounded-sm border bg-main px-sm transition-none'
            href={`mailto:${personalInfo.email}?subject=${form.subject}`}
          >
            <div className='relative size-5 overflow-hidden'>
              <PaperPlaneIcon className='size-full transition-transform duration-0 group-hover:-translate-y-full group-hover:translate-x-full group-hover:duration-300' />

              <PaperPlaneIcon className='absolute inset-0 size-auto -translate-x-full translate-y-full transition-transform duration-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-300' />
            </div>

            <span className='mx-auto'>{personalInfo.email}</span>
          </Link>
        </section>
      </div>

      <ul
        aria-hidden
        className='absolute -z-10 flex h-fit w-screen flex-col gap-md max-md:hidden'
      >
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <HorizontalScroll
              baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
              className='text-[min(32vmin,16rem)]/none font-extrabold uppercase tracking-tighter text-muted'
            >
              {data.title}&nbsp;
            </HorizontalScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ContactViewContactSection;
