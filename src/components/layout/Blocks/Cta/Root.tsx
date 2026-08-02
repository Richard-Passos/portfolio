import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { Lines } from '@/components/misc/Lines';

export type CtaProps = Omit<SectionProps, 'asChild'>;

export const Cta = ({ className, children, ...props }: CtaProps) => {
  return (
    <Section
      className={cn('min-h-(--h) max-w-5xl', className)}
      {...props}
    >
      {children}

      <Lines />
    </Section>
  );
};
