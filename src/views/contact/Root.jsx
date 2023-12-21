import { LocalTime, Section } from '@/components';
import { SocialNavItem } from '@/components/social-nav';
import { Link, Text } from '@/components/ui';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import Services from './Services';
import Form from './form';

const ContactView = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'mx-auto flex max-w-bounds flex-col items-center gap-lg py-[min(28vh,theme(spacing.28))] 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      theme='dark'
      {...props}
    >
      <main>
        <div className='w-[90%] space-y-3.5'>
          <Text.Title
            asChild
            className='text-[14vw] font-bold uppercase leading-none md:text-[min(10vw,8rem)]'
          >
            <h1>
              Get in <span className='ml-24 block'>touch</span>
            </h1>
          </Text.Title>

          <Text className='max-w-screen-sm text-muted-content'>
            Fell free to reach me out — even if it is for a chat, build a
            project, or even hire me.
          </Text>
        </div>

        <div className='flex w-[90%] justify-between gap-md max-md:flex-col'>
          <div className='grow space-y-8'>
            <ul className='flex flex-wrap-reverse gap-x-12 gap-y-6'>
              <li className='space-y-1.5'>
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  Email
                </Text.Subtitle>

                <Link
                  className='h-10 rounded-sm px-2'
                  href={`mailto:${personalInfo.email}?subject=👋 Hey ${personalInfo.name.first}, I'd like to hire you!`}
                >
                  {personalInfo.email}
                </Link>
              </li>

              <li className='space-y-1.5'>
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  Socials
                </Text.Subtitle>

                <nav className='flex gap-3'>
                  {personalInfo.socials.map((socialMedia) => (
                    <SocialNavItem
                      key={socialMedia.href}
                      {...socialMedia}
                    />
                  ))}
                </nav>
              </li>
            </ul>

            <ul className='grid h-fit w-full gap-6 sm:max-md:grid-cols-3'>
              <li className='space-y-1.5 rounded-md border bg-main p-5 transition-bg'>
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  Availability
                </Text.Subtitle>

                <Text>{personalInfo.availabilityMessage}</Text>
              </li>

              <li className='space-y-1.5 rounded-md border bg-main p-5 transition-bg'>
                <Text.Subtitle className='text-xs uppercase text-muted-content'>
                  Location
                </Text.Subtitle>

                <Text>
                  {personalInfo.location.country}, {personalInfo.location.state}
                </Text>
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

          <div className='grow-[2] space-y-8'>
            <Text className='text-sm text-muted-content'>
              Fill up the form with your info to contact me. I&apos;ll return
              immediately (except when I don&apos;t)
            </Text>

            <Form />
          </div>
        </div>

        <Services />
      </main>
    </Section>
  );
};

export default ContactView;
