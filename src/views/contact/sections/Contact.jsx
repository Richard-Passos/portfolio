import { globalsApi } from '@/api';
import { HorizontalScroll, LocalTime, Section, SocialNav } from '@/components';
import { Icon, Link, Text } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Form from '../form';
import { CONTACT_VIEW_HERO_SECTION_ICONS } from './hero/Root';

const ContactViewContactSection = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  const extraInfo = [
    {
      title: 'Availability',
      content: personalInfo.availability,
    },
    {
      title: 'Local time',
      content: <LocalTime key='local-time' />,
    },
    {
      title: 'Location',
      content: `${personalInfo.location?.country}, ${personalInfo.location?.state}`,
    },
    {
      title: 'Cleber',
      content: 'Lorem, ipsum',
    },
  ];
  return (
    <Section
      className={cn(
        'gap-md flex items-center justify-center max-md:flex-col py-[--py] [--py:calc(theme(spacing.lg)*1.5)] sm:w-9/10 max-lg:gap-x-sm',
        className,
      )}
      {...props}
    >
      <div className='primary w-9/10 rounded-md bg-main md:max-w-60 p-sm shadow-md sm:w-full'>
        <div className='relative mb-sm flex w-full justify-center overflow-hidden border-t'>
          {CONTACT_VIEW_HERO_SECTION_ICONS.map((icon) => (
            <Icon
              className='aspect-square h-auto w-[33.333%] fill-muted first:-translate-x-1/2 last:translate-x-1/2 odd:-mt-[15%] even:absolute even:top-0 even:-translate-y-[70%]'
              key={icon.src}
              {...icon}
            />
          ))}
        </div>

        <ul className='mb-sm mt-auto grid gap-xs'>
          {extraInfo.map(({ title, content }) => (
            <li
              className='rounded-sm border bg-main p-4'
              key={title}
            >
              <Text.Title className='mb-0.5 text-xs uppercase text-muted-content'>
                {title}
              </Text.Title>

              <Text className='text-sm'>{content}</Text>
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

      <div className='h-fit w-full md:max-w-fit rounded-lg border bg-main p-sm shadow-md sm:p-[calc(var(--spacing-sm)*1.5)]'>
        <section className='mb-md'>
          <Text.Title className='mb-6 text-base font-medium'>
            To:{' '}
            <span className='ml-2 rounded-sm bg-muted px-3 py-1'>
              {personalInfo.email}
            </span>
          </Text.Title>

          <Form />
        </section>

        <section>
          <Text.Title className='mb-2 text-sm font-medium text-muted-content'>
            Or just email me at
          </Text.Title>

          <Link
            className='group relative h-14 w-full justify-between gap-5 break-all rounded-sm border bg-main p-5'
            href={`mailto:${personalInfo.email}?subject=👋 Hey ${personalInfo.name?.first}, I'd like to hire you!`}
          >
            <div className='relative flex items-center justify-center overflow-hidden'>
              <PaperPlaneIcon className='h-5 w-5 transition-transform duration-0 ease-backOut group-hover:-translate-y-full group-hover:translate-x-full group-hover:duration-500' />

              <PaperPlaneIcon className='absolute h-5 w-5 -translate-x-full translate-y-full transition-transform duration-0 ease-backOut group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-500' />
            </div>

            <span className='mx-auto'>{personalInfo.email}</span>
          </Link>
        </section>
      </div>

      <ul className='absolute h-fit  -z-10 flex w-screen flex-col justify-between max-sm:hidden'>
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <HorizontalScroll
              baseVelocity={i % 2 === 0 ? 1 : -1.5}
              className='text-[min(32vmin,16rem)]/[1] font-extrabold uppercase tracking-tighter text-muted [--gap:.2em]'
            >
              <span>Contact me</span> ·
            </HorizontalScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ContactViewContactSection;
