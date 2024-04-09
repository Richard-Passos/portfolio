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
    id='scrollTo'
      className={cn(
        'flex items-center justify-center gap-y-md sm:w-9/10 gap-x-sm pb-[calc(theme(spacing.lg)*1.5)] max-md:flex-col',
        className,
      )}
      {...props}
    >
      <div className='primary min-w-48 max-md:w-9/10 grow rounded-lg bg-main p-sm shadow-md md:max-w-56'>
        <div className='relative flex justify-center overflow-hidden border-t'>
          {info.icons?.map((icon) => (
            <div className='aspect-square w-1/3 first:-translate-x-1/2 last:translate-x-1/2 odd:-mt-[15%] even:absolute even:top-0 even:-translate-y-[70%]'              key={icon.src}
            >
              <Icon 
              className='size-full text-muted'
              {...icon}
            />
            </div>
          ))}
        </div>

        <ul className='mt-sm grid sm:max-md:grid-cols-2 gap-xs'>
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

        <nav className='grid mt-sm sm:max-md:grid-cols-3 gap-2'>
          {personalInfo.socials?.map((data, i) => (
            <SocialNav.Item
              index={i}
              key={data.href}
              data={data}
            />
          ))}
        </nav>
      </div>

      <div className='rounded-lg border max-md:w-full grow lg:max-w-fit bg-main p-sm shadow-md lg:p-[calc(theme(spacing.sm)*1.25)]'>
        <section>
          <Text.Title className='text-base font-medium'>
            <span className='lowercase first-letter:uppercase'>
              {form.title}:
            </span>{' '}
            <span className='ml-2 rounded-sm bg-muted px-3 py-1'>
              {personalInfo.email}
            </span>
          </Text.Title>

          <Form className='mt-6' data={form} />
        </section>

        <section className='mt-md'>
          <Text.Title className='text-sm font-medium lowercase text-muted-content first-letter:uppercase'>
            {form.subtitle}:
          </Text.Title>

          <Link
            className='group mt-2 w-full relative h-14 gap-sm px-sm break-all transition-none rounded-sm border bg-main'
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

       <ul className='absolute flex h-fit -z-10 gap-md w-screen flex-col max-md:hidden'>
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
