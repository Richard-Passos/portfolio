import { Section, SectionProps } from '@/components/layout/Section';
import { Lines } from '@/components/misc/Lines';
import { cn } from '@/utils/cn';

export type MissionProps = Omit<SectionProps, 'asChild'>;

export const Mission = ({ className, children, ...props }: MissionProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    >
      {children}

      <Lines />
    </Section>
  );
};
