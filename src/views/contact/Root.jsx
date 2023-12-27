import { ChangeTheme, LocalTime } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { SocialNavItem } from '@/components/social-nav';
import { Link, Text } from '@/components/ui';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import Services from './Services';
import Form from './form';

const CONTACT_VIEW_THEME = 'dark';

const ContactView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'mx-auto w-[90%] max-w-screen-xl space-y-lg py-[min(28vh,theme(spacing.28))]',
        className,
      )}
      {...props}
    >
      <div className='relative flex w-fit flex-col items-center'>
        <Text.Title
          asChild
          className='flex flex-col text-[14vw] font-bold uppercase leading-none sm:text-[min(10vw,8rem)]'
        >
          <h1>
            Let&apos;s do <span>something</span>{' '}
            <span className='outline-text'>amazing</span> together
          </h1>
        </Text.Title>

        <ul
          aria-hidden
          className='pointer-events-none absolute inset-0 flex items-center justify-center max-md:hidden'
        >
          <ScrollAnimationTransform config={{ propPoints: ['25%', '-50%'] }}>
            <li className='pointer-events-auto absolute left-[10%] top-0 flex flex-col items-center gap-1.5 rounded-md border bg-main/75 p-5 text-center backdrop-blur-sm transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Availability
              </Text.Subtitle>

              <Text>{personalInfo.availabilityMessage}</Text>
            </li>
          </ScrollAnimationTransform>

          <ScrollAnimationTransform config={{ propPoints: ['50%', '-100%'] }}>
            <li className='pointer-events-auto absolute right-[10%] flex flex-col items-center gap-1.5 rounded-md border bg-main/75 p-5 text-center backdrop-blur-sm transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Location
              </Text.Subtitle>

              <Text>
                {personalInfo.location.country}, {personalInfo.location.state}
              </Text>
            </li>
          </ScrollAnimationTransform>

          <ScrollAnimationTransform config={{ propPoints: ['100%', '-25%'] }}>
            <li className='pointer-events-auto absolute bottom-[10%] flex flex-col items-center gap-1.5 rounded-md border bg-main/75 p-5 text-center backdrop-blur-sm transition-bg'>
              <Text.Subtitle className='text-xs uppercase text-muted-content'>
                Local time
              </Text.Subtitle>

              <Text>
                <LocalTime />
              </Text>
            </li>
          </ScrollAnimationTransform>
        </ul>
      </div>

      <ul className='grid gap-6 sm:grid-cols-3 md:sr-only'>
        <li className='space-y-1.5 rounded-md border bg-main p-5 text-center transition-bg'>
          <Text.Subtitle className='text-xs uppercase text-muted-content'>
            Availability
          </Text.Subtitle>

          <Text>{personalInfo.availabilityMessage}</Text>
        </li>

        <li className='space-y-1.5 rounded-md border bg-main p-5 text-center transition-bg'>
          <Text.Subtitle className='text-xs uppercase text-muted-content'>
            Location
          </Text.Subtitle>

          <Text>
            {personalInfo.location.country}, {personalInfo.location.state}
          </Text>
        </li>

        <li className='space-y-1.5 rounded-md border bg-main p-5 text-center transition-bg'>
          <Text.Subtitle className='text-xs uppercase text-muted-content'>
            Local time
          </Text.Subtitle>

          <Text>
            <LocalTime />
          </Text>
        </li>
      </ul>

      <section className='relative grid gap-md md:grid-cols-12'>
        <section className='space-y-12 rounded-md border bg-main p-6 transition-bg sm:p-12 md:col-span-9 lg:col-span-7'>
          <header className='max-w-sm space-y-2'>
            <Text.Title className='text-3xl'>
              Lemme take you further than you&apos;ve ever been.
            </Text.Title>

            <Text className='w-fit text-muted-content'>
              Fell free to fill up the form below with your data to contact me.
            </Text>
          </header>

          <Form />
        </section>

        <ul className='top-10 h-fit w-fit space-y-6 max-md:row-start-1 md:sticky md:col-span-3 lg:col-span-5'>
          <li className='flex gap-1.5 gap-x-6 max-lg:flex-col lg:items-center'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              Email
            </Text.Subtitle>

            <Link
              className='h-10 break-all rounded-sm px-2.5'
              href={`mailto:${personalInfo.email}?subject=👋 Hey ${personalInfo.name.first}, I'd like to hire you!`}
            >
              {personalInfo.email}
            </Link>
          </li>

          <li className='flex gap-1.5 gap-x-6 max-lg:flex-col lg:items-center'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              Socials
            </Text.Subtitle>

            <nav className='flex flex-wrap gap-3'>
              {personalInfo.socials.map((social, i) => (
                <SocialNavItem
                  index={i}
                  key={social.href}
                  limit={0.15}
                  {...social}
                />
              ))}
            </nav>
          </li>
        </ul>
      </section>

      <Services />

      <ChangeTheme
        className='pointer-events-none absolute left-0 top-0 h-1/2 max-h-screen w-full'
        theme={CONTACT_VIEW_THEME}
      >
        <span />
      </ChangeTheme>

      <ChangeTheme
        className='pointer-events-none absolute bottom-0 left-0 h-1/2 max-h-screen w-full'
        theme={CONTACT_VIEW_THEME}
      >
        <span />
      </ChangeTheme>
    </main>
  );
};

export default ContactView;
