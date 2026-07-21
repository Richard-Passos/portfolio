import data from './.data';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { Logo } from '@/components/navigation/Logo';
import { LocalTime } from '@/components/system/LocalTime';
import { Text } from '@/components/system/Text';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { Theme } from '@/types/Theme';
import { cn } from '@/utils/cn';
import { FooterAnimation } from '@/components/layout/Footer/Animation';

export type FooterProps = MergeProps<{ theme?: Theme }, SectionProps>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <FooterAnimation>
      <Section
        asChild
        theme='light'
        className={cn(
          'min-h-[min(100dvh,var(--max-height-bounds))] w-full max-w-bounds px-[5%] py-0 has-focus-within:transform-[translateY(0)]!',
          className
        )}
        {...props}
      >
        <footer>
          <section className='flex h-24 w-full items-center'>
            <MagneticButton
              href='/contact'
              color='primary'
              className='mr-2.5'
            >
              {data.action.label}
            </MagneticButton>

            {data.socials.map(({ url, label, icon }) => (
              <MagneticButton
                iconOnly
                key={url}
                href={url}
                aria-label={label}
              >
                {icon}
              </MagneticButton>
            ))}
          </section>

          <section
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

          <section className='flex w-full items-center gap-1 py-4 max-sm:flex-col sm:justify-between'>
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

          <ScrollYLines className='inset-x-[2.5vw] top-24 bottom-[12%] -z-10' />
        </footer>
      </Section>
    </FooterAnimation>
  );
};
