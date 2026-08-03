import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Title } from '@/components/system/Title';
import { Lines } from '@/components/misc/Lines';
import { useIntlayer } from 'next-intlayer/server';

export type AdjacentProjectsProps = Omit<SectionProps, 'asChild'>;

export const AdjacentProjects = ({ className, children, ...props }: AdjacentProjectsProps) => {
  const t = useIntlayer('adjacent-projects');

  return (
    <Section
      className={cn('min-h-(--h)', className)}
      {...props}
    >
      <Title className='sm:sr-only'>
        {t.label.first} {t.label.second}
      </Title>

      <section className='mt-8 grid w-full max-w-3xl gap-4 sm:grid-cols-2 sm:pt-32'>
        {children}
      </section>

      <Lines />
    </Section>
  );
};
