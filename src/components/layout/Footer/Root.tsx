import data from './Root.data';

import { Fragment } from 'react';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Section, SectionProps } from '@/components/layout/Section';
import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';
import { Link } from '@/components/navigation/Link';
import { Logo } from '@/components/navigation/Logo';
import { LocalTime } from '@/components/system/LocalTime';
import { Text } from '@/components/system/Text';
import { Title } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { Theme } from '@/types/Theme';
import { cn } from '@/utils/cn';

export type FooterProps = MergeProps<{ theme?: Theme }, SectionProps>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <Section
      asChild
      theme='light'
      className={cn('max-w-bounds items-stretch py-0', className)}
      {...props}
    >
      <footer>
        <section className='flex h-24 items-center'>
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

        <section className='mt-auto flex gap-5 max-md:flex-col-reverse'>
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

            <section className='mt-2.5 flex flex-col gap-2'>{data.description}</section>

            <Text
              small
              className='mt-4 block max-sm:hidden'
            >
              {data.legalPages.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`/legal/${id}`}
                  className='text-placeholder hover:underline'
                >
                  {label}.&nbsp;
                </Link>
              ))}
            </Text>
          </section>
        </section>

        <section className='flex items-center gap-1 py-4 max-sm:flex-col sm:justify-between'>
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

        <ScrollYLines className='inset-x-[-2.5vw] top-24 bottom-[12%] -z-10' />
      </footer>
    </Section>
  );
};
