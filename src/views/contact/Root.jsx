import { LocalTime, Section } from '@/components';
import { SocialNavItem } from '@/components/social-nav';
import { Link, Separator, Text } from '@/components/ui';
import { availabilityMessage, email, name, socialMedias } from '@/constants';
import { cn } from '@/utils';

import Services from './Services';


import Form from './form';

const ContactView = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'mx-auto flex max-w-bounds flex-col items-center gap-lg py-28 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      theme='dark'
      {...props}
    >
      <main>
        <div className='flex items-center justify-between gap-10 max-md:flex-col sm:gap-14 md:w-[90%] md:items-end'>
          <Text.Title
            asChild
            className='text-[14vw] font-bold uppercase leading-none md:text-[min(10vw,8rem)]'
          >
            <h1>
              Get in <span className='ml-24 block'>touch</span>
            </h1>
          </Text.Title>

          <ul className='flex flex-wrap-reverse gap-x-12 gap-y-6'>
            <li className='space-y-1.5'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Email
              </Text.Subtitle>

              <Link
                className='h-10 rounded-sm px-2'
                href={`mailto:${email}?subject=👋 Hey ${name.split(' ')[0]}, I'd like to hire you!`}
              >
                {email}
              </Link>
            </li>

            <li className='space-y-1.5'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Socials
              </Text.Subtitle>

              <nav className='flex gap-3'>
                {socialMedias.map((socialMedia) => (
                  <SocialNavItem
                    key={socialMedia.href}
                    {...socialMedia}
                  />
                ))}
              </nav>
            </li>
          </ul>
        </div>

        <Separator />

        <div className='flex justify-between gap-x-10 gap-y-20 max-md:flex-col max-md:items-center sm:gap-14 md:w-[90%]'>
          <div className='w-fit space-y-12'>
            <Text>
              Fill up the form with your info to contact me. I&apos;ll return
              immediately (except when I don&apos;t)
            </Text>

            <Form />
          </div>

          <ul className='grid h-fit w-full gap-6 sm:max-md:grid-cols-3 md:max-w-[25%]'>
            <li className='space-y-1.5 rounded-md border bg-main p-5 transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Availability
              </Text.Subtitle>

              <Text>{availabilityMessage}</Text>
            </li>

            <li className='space-y-1.5 rounded-md border bg-main p-5 transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Location
              </Text.Subtitle>

              <Text>Brazil, RS</Text>
            </li>

            <li className='space-y-1.5 rounded-md border bg-main p-5 transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Local time
              </Text.Subtitle>

              <Text>
                <LocalTime />
              </Text>
            </li>
          </ul>
        </div>

        <Services/>
      </main>
    </Section>
  );
};

export default ContactView;
