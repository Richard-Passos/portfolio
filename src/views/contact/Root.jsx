import { LocalTime, SocialNav } from '@/components';
import { Link, Text } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import Services from './Services';
import Form from './form';

const ContactView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'dark-layout mx-auto flex w-full max-w-bounds flex-col items-center gap-lg py-[min(28vh,theme(spacing.28))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        className='w-[90%] max-w-screen-lg text-[14vw]/[1] font-bold uppercase md:text-[min(8vw,6rem)]/[1]'
      >
        <h1>
          Let&apos;s make <br /> ideas fly!
        </h1>
      </Text.Title>

      <section className='grid w-[90%] max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-12'>
        <div className='space-y-md md:col-span-7 md:col-end-13'>
          <section className='space-y-6'>
            <Text.Title>Send me a message</Text.Title>

            <Form />
          </section>

          <section className='space-y-2'>
            <Text.Title className='text-sm font-medium text-muted-content'>
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

        <section className='space-y-sm md:col-span-2 md:row-start-1'>
          <Text.Title className='text-xs uppercase text-muted-content'>
            Socials
          </Text.Title>

          <nav className='grid gap-sm sm:max-md:grid-cols-3'>
            {personalInfo.socials.map((social, i) => (
              <SocialNav.Item
                className='md:w-24'
                index={i}
                key={social.href}
                {...social}
              />
            ))}
          </nav>
        </section>

        <ul className='grid h-fit gap-sm max-md:grid-cols-3 max-md:place-items-center md:col-span-3 md:row-start-1'>
          <li className='space-y-1.5'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              Availability
            </Text.Subtitle>

            <Text>{personalInfo.availabilityMessage}</Text>
          </li>

          <li className='space-y-1.5'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              Location
            </Text.Subtitle>

            <Text>
              {personalInfo.location.country}, {personalInfo.location.state}
            </Text>
          </li>

          <li className='space-y-1.5'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              Local time
            </Text.Subtitle>

            <Text>
              <LocalTime />
            </Text>
          </li>
        </ul>
      </section>

      <Services />
    </main>
  );
};

export default ContactView;
