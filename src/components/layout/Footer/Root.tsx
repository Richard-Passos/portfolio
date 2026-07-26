import data from './.data';

import { MagneticButton } from '@/components/input/Button/Magnetic';
import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/ScrollY';
import { Logo } from '@/components/navigation/Logo';
import { LocalTime } from '@/components/system/LocalTime';
import { Text } from '@/components/system/Text';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { Theme } from '@/types/Theme';
import { cn } from '@/utils/cn';
import { FooterAnim } from '@/components/layout/Footer/Anim';
import { EmailClipboard } from '@/components/input/Clipboard/Email';
import MouseTrail from '@/components/motion/MouseTrail';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { RocketIcon } from '@/components/system/Icon/Rocket';
import { PaperPlaneIcon } from '@/components/system/Icon/PaperPlane';
import { BoltIcon } from '@/components/system/Icon/Bolt';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { HeartIcon } from '@/components/system/Icon/Heart';
import { TrophyIcon } from '@/components/system/Icon/Trophy';

export type FooterProps = MergeProps<{ theme?: Theme }, SectionProps>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <FooterAnim>
      <Section
        asChild
        theme='light'
      >
        <footer
          className={cn('min-h-(--h) w-full max-w-bounds overflow-hidden px-[5%] py-0', className)}
          {...props}
        >
          <section
            data-animate
            className='mr-auto flex h-24 w-fit flex-wrap items-center'
          >
            <div className='flex gap-0.5'>
              <EmailClipboard value={data.action.email} />

              <MagneticButton
                href={`mailto:${data.action.email}`}
                color='primary'
                className='mr-2.5'
              >
                {data.action.label}
              </MagneticButton>
            </div>

            {data.socials.map(({ url, label, icon }) => (
              <MagneticButton
                iconOnly
                key={url}
                href={url}
                aria-label={label}
                className='bg-transparent!'
              >
                {icon}
              </MagneticButton>
            ))}
          </section>

          <section
            data-animate
            id='contact'
            className='mt-auto flex w-full gap-5 max-md:flex-col-reverse'
          >
            <Logo
              variant='secondary'
              className='mt-auto h-full grow'
            />

            <section className='max-w-md'>
              <Title
                as='h6'
                className='font-semibold'
              >
                {data.location.country}, {data.location.state}, <LocalTime />
              </Title>

              <Text className='mt-2.5'>{data.description}</Text>
            </section>
          </section>

          <section
            data-animate
            className='flex w-full items-center gap-1 py-4 max-sm:flex-col sm:justify-between'
          >
            <Text
              small
              className='max-w-xs text-xs max-sm:text-center'
            >
              {data.copyright}
            </Text>

            <Text
              small
              className='max-w-xs text-center text-xs sm:text-end'
            >
              {data.madeBy}
            </Text>
          </section>

          <MouseTrail.Container>
            <ScrollYLines className='inset-x-[2.5vw] top-24 bottom-[12%] -z-10'>
              <MouseTrail
                items={[
                  <SmileIcon key='smile' />,
                  <RocketIcon key='rocket' />,
                  <PaperPlaneIcon key='paper-plane' />,
                  <BoltIcon key='bolt' />,
                  <GlobeIcon key='globe' />,
                  <HeartIcon key='heart' />,
                  <TrophyIcon key='trophy' />
                ]}
                className='text-9xl'
              />
            </ScrollYLines>
          </MouseTrail.Container>
        </footer>
      </Section>
    </FooterAnim>
  );
};
