import { globalsApi } from '@/api';
import { HorizontalScroll, LocalTime, Section, SocialNav } from '@/components';
import { Icon, Link, Text } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Form from '../form';

const ContactViewContactSection = async ({
  className,
  data = {},
  ...props
}) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  const { info = {}, form = {} } = data;

  const infoData = {
    availability: personalInfo.availability,
    'local-time': <LocalTime key='local-time' />,
    location: `${personalInfo.location?.country}, ${personalInfo.location?.state}`,
    'buy-coffee': (
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
        'flex items-center justify-center gap-md py-[--py] [--py:calc(theme(spacing.lg)*1.5)] max-lg:gap-x-sm max-md:flex-col sm:w-9/10',
        className,
      )}
      {...props}
    >
      <div className='primary w-9/10 rounded-lg shrink-[2] bg-main p-sm shadow-md sm:w-full lg:max-w-60'>
        <div className='relative mb-sm flex w-full justify-center overflow-hidden border-t'>
          {info.icons?.map((icon) => (
            <Icon
              className='aspect-square h-auto w-[33.333%] text-muted first:-translate-x-1/2 last:translate-x-1/2 odd:-mt-[15%] even:absolute even:top-0 even:-translate-y-[70%]'
              key={icon.src}
              {...icon}
            />
          ))}
        </div>

        <ul className='mb-sm mt-auto grid gap-xs'>
          {info.items?.map((data) => (
            <li
              className='rounded-sm border bg-main p-4'
              key={data.title}
            >
              <Text.Title className='mb-0.5 text-xs uppercase text-muted-content'>
                {data.title}
              </Text.Title>

              <Text className='text-sm first-letter:uppercase'>
                {infoData[data.slug?.toLowerCase()]}
              </Text>
            </li>
          ))}
        </ul>

        <nav className='grid gap-2'>
          {personalInfo.socials?.map((data, i) => (
            <SocialNav.Item
              index={i}
              key={data.href}
              data={data}
            />
          ))}
        </nav>
      </div>

      <div className='h-fit w-full rounded-lg shrink border bg-main p-sm shadow-md lg:p-[calc(var(--spacing-sm)*1.25)] md:max-w-fit'>
        <section className='mb-md'>
          <Text.Title className='mb-6 text-base font-medium'>
            <span className='lowercase first-letter:uppercase'>
              {form.title}:
            </span>{' '}
            <span className='ml-2 rounded-sm bg-muted px-3 py-1'>
              {personalInfo.email}
            </span>
          </Text.Title>

          <Form data={{ fields: form.fields, submit: form.submit }} />
        </section>

        <section>
          <Text.Title className='mb-2 text-sm font-medium lowercase text-muted-content first-letter:uppercase'>
            {form.subtitle}:
          </Text.Title>

          <Link
            className='group relative h-14 w-full justify-between gap-5 break-all rounded-sm border bg-main p-5'
            href={`mailto:${personalInfo.email}?subject=${form.subject}`}
          >
            <div className='relative flex items-center justify-center overflow-hidden'>
              <PaperPlaneIcon className='h-5 w-5 transition-transform duration-0 ease-backOut group-hover:-translate-y-full group-hover:translate-x-full group-hover:duration-500' />

              <PaperPlaneIcon className='absolute h-5 w-5 -translate-x-full translate-y-full transition-transform duration-0 ease-backOut group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-500' />
            </div>

            <span className='mx-auto'>{personalInfo.email}</span>
          </Link>
        </section>
      </div>

      <ul className='absolute -z-10  flex h-fit w-screen flex-col justify-between max-sm:hidden'>
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <HorizontalScroll
              baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
              className='text-[min(32vmin,16rem)]/none font-extrabold uppercase tracking-tighter text-muted [--gap:.2em]'
            >
              {data.title}
            </HorizontalScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ContactViewContactSection;
