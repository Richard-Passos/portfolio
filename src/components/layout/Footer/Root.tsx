import data from './Root.data'

import { Fragment } from 'react';
import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Section, type SectionProps } from '@/components/layout/Section';
import { Link } from '@/components/navigation/Link';
import { Logo } from '@/components/navigation/Logo';
import { LocalTime } from '@/components/system/LocalTime';
import { Text } from '@/components/system/Text';
import { Title } from '@/components/system/Title';
import type { MergeProps } from '@/types/MergeProps';
import type { Theme } from '@/types/Theme';
import { cn } from '@/utils/cn';
import { ScrollYLines } from '@/components/misc/Lines/variants/ScrollY';

export type FooterProps = MergeProps<{ theme?: Theme }, SectionProps>;

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <Section
      asChild
      theme='light'
      className={cn('max-w-bounds py-0', className)}
      {...props}
    >
      <footer>
        <div className='relative z-10 w-9by10 grow flex flex-col'>
          <section className='my-8 flex flex-wrap'>
            <MagneticButton
              href='/contact'
              color='primary'
              className='mr-2.5'
            >
              {data.action.label}
            </MagneticButton>

            {data.socials.map(({ url, label, Icon }) => (
              <MagneticButton
                key={url}
                href={url}
                iconOnly 
                aria-label={label}
                className='border-transparent'
              >
                <Icon className='absolute size-2/3' />
              </MagneticButton>
            ))}
          </section>

          <div className='mt-auto flex gap-5 max-lg:gap-x-3 max-md:flex-col-reverse'>
            <Logo
              className='mt-auto grow h-full'
              variant='secondary'
            />

            <section className='max-w-md'>
              <Title as='h6' className='font-semibold'>
                {data.location.country}, {data.location.state}, <LocalTime />
              </Title>

              <section className='mt-2 flex flex-col gap-2.5'>
                {data.description}
              </section>

              <Text
                small
                className='block mt-4 max-sm:hidden'
              >
                {data.legalPages.map(({ id, label }) => (
                  <Fragment key={id}>
                    <Link href={`/legal/${id}`} className='text-placeholder hover:underline'>
                      {label}.
                    </Link>{' '}
                  </Fragment>
                ))}
              </Text>
            </section>
          </div>

          <section className='py-4 flex items-center gap-1 max-sm:flex-col sm:justify-between'>
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
        </div>

        <ScrollYLines className='absolute inset-[15%]' />
      </footer>
    </Section>
  );
};
