import { HorizontalScroll, LocalTime, Section, SocialNav } from '@/components';
import { Link } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { Text } from '@/components/ui/text';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import Form from '../form';

const EXTRA_INFO = [
  {
    title: 'Availability',
    content: personalInfo.availabilityMessage,
  },
  {
    title: 'Local time',
    content: <LocalTime key='local-time' />,
  },
];

const ContactViewContactSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'flex w-full max-w-screen-lg flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      {/* <ul className='mb-sm grid h-fit w-full gap-sm md:grid-cols-2'>
        {EXTRA_INFO.map(({ title, content }) => (
          <li
            className='flex h-12 items-center rounded-sm border bg-main px-4'
            key={title}
          >
            <Text className='text-xs'>{content}</Text>
          </li>
        ))}
      </ul> */}

      <div className='mb-sm rounded-lg border bg-main p-sm shadow-md max-sm:w-full sm:p-[calc(var(--spacing-sm)*1.5)] sm:shadow-lg'>
        <section className='mb-md space-y-6'>
          <Text.Title>Send a message</Text.Title>

          <Form />
        </section>

        <section>
          <Text.Title className='mb-2 text-sm font-medium text-muted-content'>
            Or just email me at
          </Text.Title>

          <Link
            className='group relative h-14 w-full justify-between gap-5 break-all rounded-sm border bg-main p-5'
            href={`mailto:${personalInfo.email}?subject=👋 Hey ${personalInfo.name.first}, I'd like to hire you!`}
          >
            <div className='relative flex items-center justify-center overflow-hidden'>
              <PaperPlaneIcon className='h-5 w-5 transition-transform duration-0 ease-backOut group-hover:-translate-y-full group-hover:translate-x-full group-hover:duration-500' />

              <PaperPlaneIcon className='absolute h-5 w-5 -translate-x-full translate-y-full transition-transform duration-0 ease-backOut group-hover:translate-x-0 group-hover:translate-y-0 group-hover:duration-500' />
            </div>

            <span className='mx-auto'>{personalInfo.email}</span>
          </Link>
        </section>
      </div>

      <nav className='grid gap-2 max-sm:w-9/10 sm:grid-cols-3'>
        {personalInfo.socials.map((social, i) => (
          <SocialNav.Item
            index={i}
            key={social.href}
            {...social}
          />
        ))}
      </nav>

      <ul className='absolute inset-y-0 left-1/2 top-[calc(var(--spacing-lg)/2)] -z-20 flex w-screen -translate-x-1/2 flex-col justify-around max-sm:hidden'>
        {[...Array(3)].map((_, i) => (
          <li key={i}>
            <HorizontalScroll
              baseVelocity={i % 2 === 0 ? -1 : 1.5}
              className='text-[min(32vmin,16rem)]/[1] font-extrabold uppercase tracking-tighter text-muted [--gap:.2em]'
            >
              <span>Contact me</span> •
            </HorizontalScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ContactViewContactSection;
