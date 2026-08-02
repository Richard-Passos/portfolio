import { Section, SectionProps } from '@/components/layout/Section';
import { cn } from '@/utils/cn';

export type AboutProps = SectionProps;

export const About = ({ className, ...props }: AboutProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    />
  );
};
