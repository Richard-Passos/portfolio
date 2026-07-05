import { MagneticButton } from '@/components/input/Button/variants';
import { Section, type SectionProps } from '@/components/layout/wrappers';
import { Lines } from '@/components/misc';
import { ScrollAnimate } from '@/components/motion';
import { yFull } from '@/components/motion/ScrollAnimate/animations';
import { Link, Logo } from '@/components/navigation';
import { LocalTime, Text, Title } from '@/components/system';
import { useI18nServer } from '@/hooks';
import type { MergeProps, Theme } from '@/types';
import { cn, entries } from '@/utils';

export type FooterProps = MergeProps<{ theme?: Theme }, SectionProps>;

export const Footer = ({ className, ...props }: FooterProps) => {
  const { data, personal, legalPages } = useI18nServer('footer');

  return (
    <Section
      asChild
      theme='light'
      className={cn('max-w-bounds py-0', className)}
      {...props}
    >
      <footer>
        <div className='relative z-10 flex w-9by10 grow flex-col'>
          <section className='my-8 flex flex-wrap items-center gap-2.5'>
            <MagneticButton
              color='primary'
              href='/contact'
            >
              {data.action.label}
            </MagneticButton>

            {personal.socials.map(({ Comp, ...data }) => (
              <MagneticButton
                isIconOnly
                variant='default'
                key={data.href}
                href={data.href}
                aria-label={data.label}
              >
                <Comp className='absolute size-2/3' />
              </MagneticButton>
            ))}
          </section>

          <div className='mt-auto flex gap-5 max-lg:gap-x-3 max-md:flex-col-reverse'>
            <Logo
              className='mt-auto h-auto w-full'
              variant='secondary'
            />

            <section>
              <Title as='h6'>
                {personal.location.country}
                &nbsp;
                {data.locationSeparator}
                &nbsp;
                {personal.location.state}
                &nbsp;
                {data.locationSeparator}
                &nbsp;
                <LocalTime />
              </Title>

              <section className='mt-3 flex max-w-sm flex-col gap-2.5'>{data.description}</section>

              <Text
                asChild
                className='text-dimmed mt-4 block max-w-sm text-xs'
              >
                <small>
                  {entries(legalPages).map(([key, d]) => (
                    <Link
                      key={key}
                      href={`/legal/${key}`}
                      className='text-[1em] text-inherit'
                    >
                      {d.label}.{' '}
                    </Link>
                  ))}
                </small>
              </Text>
            </section>
          </div>

          <section className='flex justify-center py-3 max-sm:flex-col sm:justify-between'>
            <Text
              asChild
              className='max-w-xs text-xs max-sm:text-center'
            >
              <small>{data.copyright}</small>
            </Text>

            <Text
              asChild
              className='max-w-xs text-center text-xs sm:text-end'
            >
              <small>{data.madeBy}</small>
            </Text>
          </section>
        </div>

        <div className='border-gray-3 dark:border-dark-4 absolute inset-[15%] flex items-center justify-center overflow-hidden rounded-lg border'>
          <ScrollAnimate config={yFull}>
            <Lines className='text-gray-3 dark:text-dark-4 h-full translate-y-0 bg-size-[83.333px_66.666px]' />
          </ScrollAnimate>
        </div>
      </footer>
    </Section>
  );
};
